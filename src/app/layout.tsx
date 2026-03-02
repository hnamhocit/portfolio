import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	// 1. TITLE: Đưa "hnamhocit" lên ngay đầu hoặc vị trí cực kỳ nổi bật
	title: 'hnamhocit (Nguyen Hoang Nam) | Full-stack Developer',

	// 2. DESCRIPTION: Phải chứa từ khóa ở ngay câu đầu tiên
	description:
		'Welcome to the portfolio of hnamhocit (Nguyen Hoang Nam), a Full-stack Developer based in Vietnam. Specializing in Golang, React, and Next.js to build robust systems.',

	// 3. KEYWORDS: Đẩy "hnamhocit" lên top 1 mảng
	keywords: [
		'hnamhocit',
		'Nguyen Hoang Nam',
		'hnamhocit portfolio', // Thêm biến thể
		'Full-stack Developer',
		'Golang',
		'Next.js',
		'React',
	],
	authors: [{ name: 'Nguyen Hoang Nam' }],

	// 4. OPEN GRAPH: Đồng bộ cho Social Media (Facebook, Zalo...)
	openGraph: {
		title: 'hnamhocit | Nguyen Hoang Nam - Full-stack Developer',
		description:
			'Portfolio of hnamhocit. Building robust systems and scalable web applications.',
		url: 'https://hnamhocit.vercel.app',
		siteName: 'hnamhocit Portfolio', // Đổi tên site
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'hnamhocit - Nguyen Hoang Nam Portfolio Preview', // Alt ảnh cũng phải có từ khóa
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	// 5. TWITTER
	twitter: {
		card: 'summary_large_image',
		title: 'hnamhocit | Nguyen Hoang Nam',
		description:
			'Portfolio of hnamhocit. Building robust systems and scalable web applications.',
		images: ['/og-image.png'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<GoogleAnalytics gaId='G-RFMJXL0QL6' />
			</body>
		</html>
	)
}
