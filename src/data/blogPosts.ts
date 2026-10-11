export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number; // in minutes
  content: string;
}

export const BLOG_CATEGORIES = [
  "Tất cả",
  "Backend & Systems",
  "Architecture & Security",
  "DevOps & Cloud Native",
  "Database & In-Memory State",
  "Mobile & Architecture",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-high-throughput-websocket-engine-golang",
    title: "Kiến Trúc Pool WebSocket Triệu Kết Nối Bằng Golang & Epoll",
    excerpt: "Cách thiết kế connection pool trong Golang xử lý hàng chục nghìn kết nối đồng thời với lượng RAM tối thiểu và p99 latency dưới 5ms.",
    category: "Backend & Systems",
    tags: ["Golang", "Concurrency", "WebSocket", "Linux", "Epoll"],
    publishedAt: "10 Tháng 10, 2026",
    readTime: 6,
    content: `## 1. Vấn Đề Với Mô Hình Goroutine-Per-Connection Truyền Thống

Trong kiến trúc mạng Golang cơ bản, mỗi socket WebSocket thường được gán cho một cặp Goroutine (một để đọc và một để ghi):

\`\`\`go
// Mô hình cũ: 2 Goroutines cho mỗi Client
go client.readPump()
go client.writePump()
\`\`\`

Dù Goroutine chỉ tiêu tốn khởi điểm **2 KB stack memory**, khi hệ thống mở rộng lên **100,000 kết nối đồng thời**, chỉ riêng chi phí stack và kernel buffer socket đã nuốt trọn hơn **1 GB RAM**, chưa kể áp lực khổng lồ lên bộ thu gom rác (*Garbage Collector*).

> [!IMPORTANT]
> Mục tiêu thiết kế: Giảm footprint bộ nhớ xuống dưới **5 KB / connection**, giữ độ trễ p99 < 5ms trong điều kiện nghẽn mạng và bão broadcast sự kiện.

---

## 2. Giải Pháp: Event-Driven Netpoll Dựa Trên Linux Epoll

Thay vì để hàng trăm nghìn Goroutine ngủ và chờ I/O, chúng tôi chuyển sang cơ chế bất đồng bộ non-blocking I/O dựa trên **Linux \`epoll\`**:

\`\`\`mermaid
flowchart TD
    Client1[Client Socket 1] -->|Non-blocking| EpollReactor[Epoll Reactor Engine]
    Client2[Client Socket 2] -->|Non-blocking| EpollReactor
    ClientN[Client Socket N] -->|Non-blocking| EpollReactor
    EpollReactor -->|Event Ready| WorkerPool[Fixed Goroutine Worker Pool]
    WorkerPool -->|Parse Message| MessageBroker[In-Memory RingBuffer]
\`\`\`

### Cốt Lõi Vòng Lặp Epoll (Reactor Loop)
\`\`\`go
type Reactor struct {
    epollFd int
    events  []unix.EpollEvent
    workers chan *Client
}

func (r *Reactor) Loop() {
    for {
        n, err := unix.EpollWait(r.epollFd, r.events, -1)
        if err != nil && err != unix.EINTR {
            log.Printf("epoll wait error: %v", err)
            continue
        }
        for i := 0; i < n; i++ {
            fd := int(r.events[i].Fd)
            if client := pool.Get(fd); client != nil {
                r.workers <- client
            }
        }
    }
}
\`\`\`

---

## 3. Quản Trị Broadcast Qua Lock-Free RingBuffer

Khi một sự kiện hệ thống cần phát sóng tới 50,000 người dùng trong cùng một kênh (Room), cơ chế \`sync.Mutex\` truyền thống sẽ gây ra **Lock Contention** nghiêm trọng.

Chúng tôi áp dụng mô hình **Lock-Free Circular RingBuffer**:

| Chỉ Số Đo Lường | sync.Mutex Pool | Lock-Free RingBuffer | Cải Thiện |
| :--- | :--- | :--- | :--- |
| **Throughput (msg/s)** | 35,000 msg/s | 280,000 msg/s | **+ 700%** |
| **p95 Latency** | 38.4 ms | 2.1 ms | **Giảm 94.5%** |
| **Memory Footprint** | 820 MB | 165 MB | **Tiết kiệm 80% RAM** |

\`\`\`go
type RingBuffer struct {
    buffer []byte
    head   uint64
    tail   uint64
    mask   uint64
}

func (rb *RingBuffer) Push(data []byte) bool {
    // Atomic CAS operation - hoàn toàn không khóa
    head := atomic.LoadUint64(&rb.head)
    tail := atomic.LoadUint64(&rb.tail)
    if (tail - head) >= rb.mask {
        return false // Buffer full
    }
    // Ghi dữ liệu an toàn theo con trỏ atomic
    return atomic.CompareAndSwapUint64(&rb.tail, tail, tail+1)
}
\`\`\`

---

## 4. Tổng Kết & Bài Học Rút Ra

1. **Hiểu rõ tầng OS Socket**: Tinh chỉnh \`SO_REUSEPORT\`, \`TCP_NODELAY\` và giới hạn \`ulimit -n\` là bắt buộc khi triển khai dịch vụ mạng quy mô lớn.
2. **Hạn chế cấp phát bộ nhớ động trong Hot-path**: Sử dụng \`sync.Pool\` để tái sử dụng buffer byte, giảm 90% số lần GC chạy mỗi phút.
3. **Độc lập hạ tầng**: Giữ code thuần Golang runtime với chuẩn POSIX, dễ dàng đóng gói thành Distroless Docker image chỉ nặng **18MB**.
`,
  },

  {
    slug: "zero-trust-auth-webauthn-passkeys",
    title: "Hiện Thực Hoá Zero-Trust Auth Với FIDO2 Passkeys & Ed25519 Tokens",
    excerpt: "Loại bỏ hoàn toàn mật khẩu truyền thống: cơ chế bắt tay WebAuthn, xác thực phần cứng TouchID/FaceID và ký số token không đối xứng Ed25519.",
    category: "Architecture & Security",
    tags: ["Security", "WebAuthn", "Passkeys", "Ed25519", "Zero-Trust"],
    publishedAt: "28 Tháng 9, 2026",
    readTime: 7,
    content: `## 1. Mật Khẩu Đã Chết: Vì Sao Chúng Ta Cần Passkeys?

Hơn 80% các vụ rò rỉ dữ liệu doanh nghiệp bắt nguồn từ mật khẩu bị lộ, bị đoán hoặc bị tấn công phi kỹ thuật (*Phishing*).

Chuẩn **FIDO2 / WebAuthn** giải quyết triệt để vấn đề này bằng mô hình mật mã khoá công khai không đối xứng (*Asymmetric Cryptography*):
- **Private Key**: Lưu an toàn trong chip bảo mật phần cứng của thiết bị người dùng (Secure Enclave trên Apple, TPM trên Windows, Android Keystore).
- **Public Key**: Lưu trên máy chủ backend của chúng tôi. Máy chủ không bao giờ biết private key là gì.

---

## 2. Luồng Bắt Tay Xác Thực WebAuthn (Ceremony Flow)

\`\`\`mermaid
sequenceDiagram
    autonumber
    actor User as Người dùng
    participant Client as Trình duyệt (WebAuthn API)
    participant Server as Povixa ID Server
    participant DB as Database (Postgres)

    User->>Client: Bấm "Đăng nhập bằng Passkey"
    Client->>Server: Gửi yêu cầu Challenge (/auth/challenge)
    Server->>Server: Sinh ngẫu nhiên Challenge 32-bytes
    Server-->>Client: Trả về Challenge + Relying Party ID
    Client->>User: Yêu cầu xác thực sinh trắc học (TouchID/FaceID)
    User-->>Client: Chạm ngón tay / Quét khuôn mặt
    Client->>Client: Ký Challenge bằng Private Key phần cứng
    Client->>Server: Gửi chữ ký số + Authenticator Data
    Server->>DB: Lấy Public Key của User
    Server->>Server: Xác thực chữ ký bằng Public Key
    Server-->>Client: Cấp JWT Session (Ed25519 Signed)
\`\`\`

---

## 3. Triển Khai Ký Token Bằng Ed25519 Asymmetric Keys

Thay vì sử dụng mã băm đối xứng \`HS256\` (vốn có nhược điểm là toàn bộ các microservices đều phải giữ chung một mật mã bí mật), hệ thống áp dụng thuật toán **Ed25519 (EdDSA)**:

\`\`\`go
// Sinh cặp khoá Ed25519 an toàn cao
pubKey, privKey, err := ed25519.GenerateKey(rand.Reader)

// Ký phiên làm việc phía Auth Server
token := jwt.NewWithClaims(jwt.SigningMethodEd25519, claims)
signedToken, err := token.SignedString(privKey)
\`\`\`

### Lợi Ích Của Ed25519 So Với RSA-2048
- **Tốc độ ký và xác thực**: Nhanh gấp 3 đến 5 lần so với RSA-2048.
- **Kích thước khóa**: Chỉ **32 bytes** (so với 256 bytes của RSA), giảm đáng kể băng thông HTTP Header trên mỗi request.
- **Kháng tấn công Side-Channel**: Thuật toán được thiết kế chạy trong thời gian không đổi (*Constant-Time Execution*), triệt tiêu nguy cơ tấn công đo thời gian CPU.

---

## 4. Quản Lý Phiên Đa Miền (Cross-Domain SSO)

Hệ sinh thái Povixa bao gồm nhiều subdomain độc lập:
- \`id.povixa.cloud\` (Auth Central)
- \`console.povixa.cloud\` (Developer Portal)
- \`docs.povixa.cloud\` (Documentation Hub)

Chúng tôi cấu hình Cookie phiên cấp cao với cờ:
\`\`\`http
Set-Cookie: __Host-povixa_session=TOKEN; Domain=.povixa.cloud; Path=/; Secure; HttpOnly; SameSite=Lax
\`\`\`

Kết hợp với cơ chế **Token Revocation List** lưu trong Redis In-Memory cluster, bất kỳ hành động đăng xuất nào tại một miền sẽ vô hiệu hoá toàn bộ phiên trên toàn bộ các subdomain chỉ trong vòng **15ms**.
`,
  },

  {
    slug: "kubernetes-production-patterns-helm-distroless",
    title: "Tối Ưu Container Distroless 18MB & Chuẩn Hóa Helm Charts Sản Xuất",
    excerpt: "Cách giảm kích thước Docker image từ 600MB xuống 18MB, loại bỏ hoàn toàn shell để ngăn ngừa CVE, và cấu hình Helm Chart tự phục hồi trong Kubernetes.",
    category: "DevOps & Cloud Native",
    tags: ["Kubernetes", "Docker", "DevOps", "Helm", "Security"],
    publishedAt: "15 Tháng 9, 2026",
    readTime: 5,
    content: `## 1. Nỗi Đau Container "Béo Phì" Và Lỗ Hổng Bảo Mật

Một Docker image thông thường dựng từ \`golang:latest\` hoặc \`ubuntu:22.04\` thường nặng từ **500MB tới 1GB**. Không chỉ tốn băng thông kéo image trên cụm máy chủ, image còn chứa hàng loạt tiện ích nguy hiểm như:
- Trình biên dịch \`gcc\`, \`curl\`, \`wget\`
- Trình thực thi lệnh \`bash\`, \`sh\`
- Hàng chục thư viện chia sẻ \`.so\` dễ dính lỗ hổng CVE zero-day

---

## 2. Multi-Stage Dockerfile Dựng Image Distroless 18MB

Bằng việc chia quá trình build thành 2 giai đoạn và kết thúc với base image **Google Distroless**:

\`\`\`dockerfile
# Giai đoạn 1: Builder với đầy đủ công cụ
FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
# Biên dịch tĩnh hoàn toàn, tắt CGO
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o server ./cmd/server

# Giai đoạn 2: Runtime Distroless siêu sạch (không bash, không root)
FROM gcr.io/distroless/static-debian12:nonroot
WORKDIR /
COPY --from=builder /app/server /server
USER nonroot:nonroot
EXPOSE 8080
ENTRYPOINT ["/server"]
\`\`\`

### Kết Quả Đạt Được:
- Kích thước image: **18.4 MB** (giảm 97%).
- Số lượng lỗ hổng CVE: **0 phát hiện** qua Trivy scanner.
- Kẻ tấn công nếu có khai thác được code injection cũng **không thể gọi shell**, vì trong container không hề có file \`/bin/sh\`.

---

## 3. Chuẩn Hóa Kubernetes Helm Chart Tự Phục Hồi

Một ứng dụng sản xuất bắt buộc phải có cấu hình Probes và Resource Limits chuẩn xác:

\`\`\`yaml
# values.yaml
resources:
  limits:
    cpu: 500m
    memory: 256Mi
  requests:
    cpu: 100m
    memory: 64Mi

livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10

readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 2
  periodSeconds: 5

podDisruptionBudget:
  minAvailable: 1
\`\`\`

> [!TIP]
> Việc cấu hình \`readinessProbe\` kiểm tra kết nối database trước khi tiếp nhận traffic giúp loại bỏ 100% lỗi **502 Bad Gateway** trong quá trình Rolling Update.
`,
  },

  {
    slug: "in-memory-state-sync-redis-pubsub-edge",
    title: "Đồng Bộ Cấu Hình Phân Tán < 50ms Bằng Redis Pub/Sub & Edge In-Memory Cache",
    excerpt: "Kiến trúc đồng bộ Feature Flags và Dynamic Config thời gian thực tới hàng nghìn worker instances mà không gây bão truy vấn database.",
    category: "Database & In-Memory State",
    tags: ["Redis", "Edge Computing", "Cache", "Distributed Systems"],
    publishedAt: "02 Tháng 9, 2026",
    readTime: 8,
    content: `## 1. Bài Toán Thắt Nút Cổ Chai Trong Dynamic Configuration

Trong hệ thống SaaS phân tán, các cờ tính năng (*Feature Flags*) và hạn ngạch (*Rate Limits*) cần được cập nhật ngay lập tức:
- Nếu mỗi HTTP request đều truy vấn database để kiểm tra cấu hình: **Database sập vì hàng triệu queries/giây**.
- Nếu dùng in-memory cache đơn thuần với TTL 5 phút: **Độ trễ cập nhật quá lâu, không thể dừng khẩn cấp khi tính năng mới lỗi**.

---

## 2. Kiến Trúc Two-Tier Cache Kết Hợp Redis Pub/Sub

\`\`\`mermaid
flowchart LR
    Admin[Admin Console] -->|Ghi config mới| Postgres[(PostgreSQL)]
    Admin -->|Publish Event| RedisCluster[Redis Pub/Sub Bus]
    RedisCluster -->|Broadcast Invalidation| Node1[Instance Edge 1 (In-Memory)]
    RedisCluster -->|Broadcast Invalidation| Node2[Instance Edge 2 (In-Memory)]
    RedisCluster -->|Broadcast Invalidation| NodeN[Instance Edge N (In-Memory)]
    Node1 -->|Đọc tức thời 0ms| Client[End-Users]
\`\`\`

### Cơ Chế Lắng Nghe Sự Kiện Trên Golang Worker:
\`\`\`go
func (c *ConfigManager) SubscribeInvalidation(ctx context.Context) {
    pubsub := c.redis.Subscribe(ctx, "config:invalidation:channel")
    ch := pubsub.Channel()

    for msg := range ch {
        var event InvalidateEvent
        if err := json.Unmarshal([]byte(msg.Payload), &event); err == nil {
            // Xoá hoặc cập nhật in-memory cache cục bộ
            c.localCache.Store(event.Key, event.NewValue)
        }
    }
}
\`\`\`

---

## 3. Phòng Ngừa Hiện Tượng Cache Stampede

Khi một key cấu hình cực kỳ phổ biến bị invalidate, hàng ngàn luồng xử lý cùng lúc có thể đồng loạt gọi xuống PostgreSQL để nạp lại dữ liệu (*Thundering Herd*).

Chúng tôi sử dụng cơ chế **SingleFlight** của Golang:

\`\`\`go
var group singleflight.Group

func GetConfig(key string) (*Config, error) {
    val, err, _ := group.Do(key, func() (interface{}, error) {
        // Chỉ ĐÚNG 1 query chạy xuống database cho dù có 10,000 requests cùng lúc
        return fetchFromPostgres(key)
    })
    return val.(*Config), err
}
\`\`\`

Kết quả: Toàn bộ quá trình đồng bộ cấu hình từ lúc kỹ sư bấm "Rollback" trên Dashboard tới khi tất cả các cụm edge máy chủ áp dụng diễn ra trong **dưới 42ms**.
`,
  },

  {
    slug: "flutter-drift-sqlite-offline-first",
    title: "Kỹ Thuật Caching SQLite & Clean Architecture Trong Mobile 60 FPS",
    excerpt: "Cách xây dựng ứng dụng di động Offline-First hoàn toàn không phụ thuộc mạng, phản hồi tức thời 60 FPS với Drift SQLite và 5-tab shell routing.",
    category: "Mobile & Architecture",
    tags: ["Flutter", "Dart", "SQLite", "Clean Architecture", "Mobile"],
    publishedAt: "18 Tháng 8, 2026",
    readTime: 6,
    content: `## 1. Triết Lý Thiết Kế Ứng Dụng "Offline-First"

Một ứng dụng di động chuyên nghiệp không bao giờ được phép bắt người dùng nhìn thấy spinner xoay tròn mỗi khi mở màn hình. Mọi tương tác của người dùng phải được ghi nhận ngay lập tức vào cơ sở dữ liệu cục bộ (*Local First*), sau đó mới đồng bộ bất đồng bộ lên máy chủ đám mây.

---

## 2. Vì Sao Lại Là Drift SQLite Thay Vì SharedPreferences Hay Hive?

- **Kiểm soát kiểu tĩnh (*Type Safety*)**: Drift kiểm tra cú pháp SQL ngay khi biên dịch ứng dụng.
- **Reactive Streams**: Tự động phát sinh luồng dữ liệu (Stream) khi bảng dữ liệu thay đổi; UI tự động re-render không cần gọi \`setState\`.
- **Hỗ trợ Indexing & FTS5**: Tìm kiếm toàn văn bản (*Full-Text Search*) hàng chục nghìn ghi chú trong chớp mắt.

\`\`\`dart
// Khai báo bảng Drift với type safety cao
class Notes extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get title => text().withLength(min: 1, max: 120)();
  TextColumn get content => text()();
  DateTimeColumn get updatedAt => dateTime().withDefault(currentDateAndTime)();
  BoolColumn get isSynced => boolean().withDefault(const Constant(false))();
}
\`\`\`

---

## 3. Tối Ưu Rendering 60 FPS Tránh Khựng Giật (*Jank*)

Trong Flutter, việc thực thi các phép tính toán nặng hoặc parse JSON lớn trên UI Main Isolate là nguyên nhân số 1 gây tụt khung hình.

Chúng tôi chuyển toàn bộ các tác vụ xử lý database phức tạp sang **Background Dart Isolate**:

\`\`\`dart
DatabaseConnection connectToDatabase() {
  return DatabaseConnection.delayed(Future.sync(() async {
    final isolate = await createDriftIsolate();
    return isolate.connect();
  }));
}
\`\`\`

Nhờ kiến trúc này, ngay cả khi ứng dụng đang batch insert 5,000 bản ghi dữ liệu, màn hình cuộn danh sách vẫn duy trì ổn định **chuẩn 60 FPS**, tạo cảm giác mượt mà và cao cấp cho người dùng.
`,
  },
];
