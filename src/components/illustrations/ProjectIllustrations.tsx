import React from "react";

// 1. Storage & Zero-Egress Cloud (NVMe Server Rack + S3 Floating Block)
export function IsometricStorageArt({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="iso-storage-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f77241" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#fb291a" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <g transform="translate(60, 20)">
        <polygon points="40,0 80,20 40,40 0,20" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.02" />
        <polygon points="0,20 40,40 40,110 0,90" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.03" />
        <polygon points="40,40 80,20 80,90 40,110" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.01" />

        <line x1="0" y1="42" x2="40" y2="62" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
        <line x1="40" y1="62" x2="80" y2="42" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
        <line x1="0" y1="65" x2="40" y2="85" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
        <line x1="40" y1="85" x2="80" y2="65" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
        <line x1="0" y1="88" x2="40" y2="108" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
        <line x1="40" y1="108" x2="80" y2="88" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />

        <circle cx="15" cy="52" r="2" fill="#10b981" />
        <circle cx="23" cy="56" r="2" fill="#06b6d4" />
        <circle cx="15" cy="75" r="2" fill="#fb291a" />
        <circle cx="23" cy="79" r="2" fill="#10b981" />
      </g>

      <g transform="translate(10, 60)">
        <polygon points="25,0 50,12 25,24 0,12" stroke="url(#iso-storage-grad)" strokeWidth="1.2" fill="#fb291a" fillOpacity="0.06" />
        <polygon points="0,12 25,24 25,36 0,24" stroke="url(#iso-storage-grad)" strokeWidth="1.2" fill="#fb291a" fillOpacity="0.08" />
        <polygon points="25,24 50,12 50,24 25,36" stroke="url(#iso-storage-grad)" strokeWidth="1.2" fill="#fb291a" fillOpacity="0.04" />
      </g>

      <path d="M35 72 Q 70 85 85 95" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="35" cy="72" r="2.5" fill="#10b981" />
      <circle cx="85" cy="95" r="2.5" fill="#10b981" />
    </svg>
  );
}

// 2. Security & Zero-Trust IAM (Passkey & PKCE Shield)
export function IsometricSecurityArt({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="iso-sec-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <g transform="translate(50, 15)">
        <polygon
          points="50,10 95,30 95,85 50,115 5,85 5,30"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-slate-300 dark:text-slate-700"
          fill="currentColor"
          fillOpacity="0.02"
        />
        <polygon
          points="50,22 85,38 85,80 50,102 15,80 15,38"
          stroke="url(#iso-sec-grad)"
          strokeWidth="1.4"
          fill="#a855f7"
          fillOpacity="0.05"
        />

        <path d="M50 42 C40 42 32 50 32 62 C32 74 40 82 50 86" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M50 48 C44 48 38 54 38 63 C38 71 44 77 50 79" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M50 55 C46 55 44 58 44 63 C44 68 47 72 50 74" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M56 52 C64 58 64 68 60 76" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="text-slate-400 dark:text-slate-600" />
        <path d="M62 44 C72 54 72 70 66 82" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="text-slate-400 dark:text-slate-600" />

        <line x1="22" y1="62" x2="78" y2="62" stroke="#a855f7" strokeWidth="1.4" strokeDasharray="3 2" />

        <circle cx="50" cy="102" r="3.5" fill="#10b981" />
        <circle cx="50" cy="102" r="8" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

// 3. Offline-First POS (Local SQLite Cylinder & POS Screen)
export function IsometricOfflineArt({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="iso-offline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <g transform="translate(55, 15)">
        <polygon points="45,0 90,22 45,45 0,22" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.02" />
        <polygon points="0,22 45,45 45,55 0,32" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.03" />
        <polygon points="45,45 90,22 90,32 45,55" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.01" />

        <line x1="20" y1="26" x2="65" y2="38" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="25" y1="32" x2="55" y2="40" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
      </g>

      <g transform="translate(65, 75)">
        <ellipse cx="35" cy="15" rx="35" ry="14" stroke="url(#iso-offline-grad)" strokeWidth="1.2" fill="#06b6d4" fillOpacity="0.06" />
        <path d="M0 15 L0 45 C0 53 16 59 35 59 C54 59 70 53 70 45 L70 15" stroke="url(#iso-offline-grad)" strokeWidth="1.2" fill="#06b6d4" fillOpacity="0.03" />
        <path d="M0 30 C0 38 16 44 35 44 C54 44 70 38 70 30" stroke="url(#iso-offline-grad)" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="35" cy="15" r="3" fill="#10b981" />
      </g>

      <path d="M45 45 C25 65 30 100 55 110" stroke="#10b981" strokeWidth="1.4" strokeDasharray="3 3" />
      <polygon points="58,110 52,105 52,115" fill="#10b981" />

      <path d="M150 105 C170 85 165 50 140 40" stroke="#06b6d4" strokeWidth="1.4" strokeDasharray="3 3" />
      <polygon points="137,40 143,35 143,45" fill="#06b6d4" />
    </svg>
  );
}

// 4. Telemetry & Workers Hub (Funnel, Meters & Latency Sparkline)
export function IsometricTelemetryArt({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="iso-funnel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <g transform="translate(40, 15)">
        <polygon points="55,0 110,25 55,50 0,25" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.02" />
        <polygon points="0,25 55,50 55,62 0,37" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.03" />
        <polygon points="55,50 110,25 110,37 55,62" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.01" />
      </g>

      <g transform="translate(55, 60)">
        <polygon points="40,0 80,18 40,36 0,18" stroke="url(#iso-funnel-grad)" strokeWidth="1.2" fill="#f59e0b" fillOpacity="0.06" />
        <polygon points="0,18 40,36 40,46 0,28" stroke="url(#iso-funnel-grad)" strokeWidth="1.2" fill="#f59e0b" fillOpacity="0.08" />
        <polygon points="40,36 80,18 80,28 40,46" stroke="url(#iso-funnel-grad)" strokeWidth="1.2" fill="#f59e0b" fillOpacity="0.04" />
      </g>

      <g transform="translate(70, 98)">
        <polygon points="25,0 50,11 25,22 0,11" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.12" />
        <polygon points="0,11 25,22 25,30 0,19" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.16" />
        <polygon points="25,22 50,11 50,19 25,30" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      </g>

      <circle cx="95" cy="115" r="3.5" fill="#10b981" />
      <circle cx="95" cy="115" r="8" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />

      <path d="M20 70 L35 70 L45 50 L55 85 L65 65 L75 70" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="75" cy="70" r="2" fill="#f59e0b" />
    </svg>
  );
}

// 5. SoloType (Keyboard & Typing Speed Waveforms)
export function IsometricTypingArt({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="iso-type-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <g transform="translate(45, 30)">
        <polygon points="55,0 110,24 55,48 0,24" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.02" />
        <polygon points="0,24 55,48 55,60 0,36" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.03" />
        <polygon points="55,48 110,24 110,36 55,60" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.01" />

        {/* Isometric Keycaps */}
        {[
          { x: 25, y: 15 }, { x: 45, y: 15 }, { x: 65, y: 15 },
          { x: 18, y: 25 }, { x: 38, y: 25 }, { x: 58, y: 25 }, { x: 78, y: 25 },
          { x: 30, y: 35 }, { x: 50, y: 35 }, { x: 70, y: 35 }
        ].map((k, idx) => (
          <polygon
            key={idx}
            points={`${k.x},${k.y} ${k.x + 8},${k.y + 4} ${k.x + 4},${k.y + 7} ${k.x - 4},${k.y + 3}`}
            fill={idx % 3 === 0 ? "#0284c7" : "currentColor"}
            fillOpacity={idx % 3 === 0 ? 0.7 : 0.15}
            stroke="#0284c7"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* Typing WPM Velocity Curve */}
      <path d="M25 110 Q 60 70 95 100 T 175 60" stroke="url(#iso-type-grad)" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="175" cy="60" r="3.5" fill="#0284c7" />
      <circle cx="175" cy="60" r="7" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

// 6. Bonsai Reader (Minimalist Typography & Open Book / Paper Stacks)
export function IsometricReaderArt({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="iso-book-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Open Book Wings */}
      <g transform="translate(30, 35)">
        {/* Left Page */}
        <polygon points="70,0 10,25 10,95 70,70" stroke="url(#iso-book-grad)" strokeWidth="1.3" fill="#10b981" fillOpacity="0.04" />
        {/* Right Page */}
        <polygon points="70,0 130,25 130,95 70,70" stroke="url(#iso-book-grad)" strokeWidth="1.3" fill="#10b981" fillOpacity="0.06" />

        {/* Text Lines on Left */}
        <line x1="22" y1="36" x2="60" y2="20" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        <line x1="22" y1="46" x2="58" y2="31" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        <line x1="22" y1="56" x2="60" y2="41" stroke="#10b981" strokeWidth="1.2" />
        <line x1="22" y1="66" x2="52" y2="54" stroke="currentColor" strokeWidth="1" className="text-slate-400" />

        {/* Text Lines on Right */}
        <line x1="80" y1="20" x2="118" y2="36" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        <line x1="80" y1="31" x2="115" y2="46" stroke="#10b981" strokeWidth="1.2" />
        <line x1="80" y1="41" x2="118" y2="56" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        <line x1="80" y1="52" x2="110" y2="64" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
      </g>
    </svg>
  );
}

// 7. GitVN (Local-First Git Branches & Kanban Board)
export function IsometricGitKanbanArt({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="iso-git-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Kanban Column 1 */}
      <g transform="translate(30, 25)">
        <polygon points="35,0 70,15 35,30 0,15" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.02" />
        <polygon points="0,15 35,30 35,90 0,75" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.03" />
        <polygon points="35,30 70,15 70,75 35,90" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.01" />

        {/* Task Cards in Column 1 */}
        <polygon points="10,25 30,34 30,48 10,39" stroke="url(#iso-git-grad)" strokeWidth="1" fill="#6366f1" fillOpacity="0.2" />
        <polygon points="10,50 30,59 30,73 10,64" stroke="url(#iso-git-grad)" strokeWidth="1" fill="#6366f1" fillOpacity="0.2" />
      </g>

      {/* Kanban Column 2 */}
      <g transform="translate(95, 45)">
        <polygon points="35,0 70,15 35,30 0,15" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.02" />
        <polygon points="0,15 35,30 35,80 0,65" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.03" />
        <polygon points="35,30 70,15 70,65 35,80" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-slate-700" fill="currentColor" fillOpacity="0.01" />

        <polygon points="10,25 30,34 30,48 10,39" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.2" />
      </g>

      {/* Git Branch Lines connecting commits */}
      <path d="M40 120 L80 120 L110 95 L150 95" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="40" cy="120" r="3" fill="#6366f1" />
      <circle cx="80" cy="120" r="3" fill="#6366f1" />
      <circle cx="110" cy="95" r="3" fill="#8b5cf6" />
      <circle cx="150" cy="95" r="3" fill="#10b981" />
    </svg>
  );
}
