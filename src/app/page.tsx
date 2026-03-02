'use client'

import {
	BriefcaseIcon,
	DatabaseIcon,
	DownloadIcon,
	ExternalLinkIcon,
	GithubIcon,
	GraduationCapIcon,
	LayersIcon,
	LayoutTemplateIcon,
	MailIcon,
	MenuIcon,
	PhoneIcon,
	ServerIcon,
	TerminalIcon,
	XIcon,
} from 'lucide-react'
import { motion, useMotionValue, useSpring, Variant } from 'motion/react'
import { useEffect, useState } from 'react'

// --- Cấu hình Animations ---
const fadeInUp: Record<string, Variant> = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
}

const staggerContainer: Record<string, Variant> = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const popIn: Record<string, Variant> = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { type: 'spring', stiffness: 200, damping: 15 },
	},
}

const slideInLeft: Record<string, Variant> = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
}

const slideInRight: Record<string, Variant> = {
	hidden: { opacity: 0, x: 50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
}

export default function Portfolio() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const closeMenu = () => setIsMobileMenuOpen(false)

	// --- 1. HIỆU ỨNG GLOW CHUỘT ---
	const mouseX = useMotionValue(-1000) // Khởi tạo ở ngoài màn hình
	const mouseY = useMotionValue(-1000)
	// Dùng Spring để con trỏ sáng di chuyển mượt (có độ trễ nhẹ rât nghệ)
	const smoothX = useSpring(mouseX, {
		damping: 30,
		stiffness: 200,
		mass: 0.5,
	})
	const smoothY = useSpring(mouseY, {
		damping: 30,
		stiffness: 200,
		mass: 0.5,
	})

	// --- 2. HIỆU ỨNG CLICK BỤP BỤP ---
	const [clicks, setClicks] = useState<
		{ id: number; x: number; y: number }[]
	>([])

	useEffect(() => {
		// Lắng nghe di chuyển chuột
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX)
			mouseY.set(e.clientY)
		}

		// Lắng nghe click chuột
		const handleClick = (e: MouseEvent) => {
			const newClick = { id: Date.now(), x: e.clientX, y: e.clientY }
			setClicks((prev) => [...prev, newClick])
			// Xóa click khỏi mảng sau 1 giây (khi hiệu ứng chạy xong)
			setTimeout(() => {
				setClicks((prev) => prev.filter((c) => c.id !== newClick.id))
			}, 1000)
		}

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('click', handleClick)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('click', handleClick)
		}
	}, [mouseX, mouseY])

	return (
		<div className='min-h-screen bg-[#050505] text-neutral-300 font-sans selection:bg-blue-500/30 overflow-hidden relative'>
			{/* VÙNG EFFECT 1: CON TRỎ CHUỘT GLOW (Ẩn trên mobile vì mobile không có chuột) */}
			<motion.div
				className='pointer-events-none fixed top-0 left-0 w-150 h-150 bg-blue-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block'
				style={{ x: smoothX, y: smoothY }}
			/>

			{/* VÙNG EFFECT 2: CLICK RIPPLES (Nổ bọt sáng) */}
			{clicks.map((click) => (
				<motion.div
					key={click.id}
					className='pointer-events-none fixed top-0 left-0 rounded-full border-2 border-cyan-400/50'
					initial={{
						width: 0,
						height: 0,
						x: click.x,
						y: click.y,
						opacity: 1,
					}}
					animate={{
						width: 150,
						height: 150,
						x: click.x - 75,
						y: click.y - 75, // Trừ đi một nửa width/height để căn giữa điểm click
						opacity: 0,
					}}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					style={{ zIndex: 9999 }} // Nổi lên trên tất cả mọi thứ
				/>
			))}

			{/* Header / Navbar */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				className='fixed top-0 w-full backdrop-blur-md bg-[#050505]/85 border-b border-neutral-800/60 z-50'>
				<div className='max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between'>
					<div className='flex items-center gap-3 relative z-10'>
						<svg
							width='32'
							height='32'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='group-hover:scale-110 transition-transform duration-300 shrink-0 md:w-10 md:h-10'>
							<rect
								width='40'
								height='40'
								rx='10'
								className='fill-neutral-900 stroke-neutral-800'
								strokeWidth='2'
							/>
							<path
								d='M14 20L19 15M14 20L19 25'
								stroke='#3B82F6'
								strokeWidth='2.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M26 20L21 15M26 20L21 25'
								stroke='#10B981'
								strokeWidth='2.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M22 12L18 28'
								stroke='#6B7280'
								strokeWidth='2'
								strokeLinecap='round'
							/>
							<circle
								cx='26'
								cy='28'
								r='1.5'
								fill='#3B82F6'
								className='animate-pulse'
							/>
						</svg>
						<span className='text-lg md:text-xl font-bold text-white tracking-tighter cursor-pointer'>
							hnam<span className='text-blue-500'>hocit</span>
							<span className='text-neutral-500 animate-pulse'>
								_
							</span>
						</span>
					</div>

					<div className='hidden md:flex gap-8 text-sm font-medium items-center relative z-10'>
						<a
							href='#about'
							className='hover:text-blue-400 transition-colors'>
							About
						</a>
						<a
							href='#experience'
							className='hover:text-blue-400 transition-colors'>
							Journey
						</a>
						<a
							href='#projects'
							className='hover:text-blue-400 transition-colors'>
							Projects
						</a>
						<a
							href='/my_cv.pdf'
							target='_blank'
							className='flex items-center gap-2 text-blue-400 hover:text-blue-300 px-3 py-1.5 rounded-md bg-blue-500/10 hover:bg-blue-500/20 transition-all border border-blue-500/20'>
							<DownloadIcon size={14} /> Resume
						</a>
					</div>

					<button
						className='md:hidden p-2 text-neutral-400 hover:text-white transition-colors relative z-10'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ?
							<XIcon size={24} />
						:	<MenuIcon size={24} />}
					</button>
				</div>

				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className='md:hidden absolute top-16 left-0 w-full bg-[#0a0a0a] border-b border-neutral-800/60 shadow-2xl z-50'>
						<div className='flex flex-col p-4 space-y-4 text-sm font-medium'>
							<a
								href='#about'
								onClick={closeMenu}
								className='text-neutral-300 hover:text-white p-2 rounded-md hover:bg-neutral-900'>
								About
							</a>
							<a
								href='#experience'
								onClick={closeMenu}
								className='text-neutral-300 hover:text-white p-2 rounded-md hover:bg-neutral-900'>
								Journey
							</a>
							<a
								href='#projects'
								onClick={closeMenu}
								className='text-neutral-300 hover:text-white p-2 rounded-md hover:bg-neutral-900'>
								Projects
							</a>
							<a
								href='/my_cv.pdf'
								onClick={closeMenu}
								target='_blank'
								className='flex items-center justify-center gap-2 text-blue-400 p-3 rounded-md bg-blue-500/10 border border-blue-500/20'>
								<DownloadIcon size={16} /> View Resume
							</a>
						</div>
					</motion.div>
				)}
			</motion.nav>

			{/* Content Chính (Thêm relative và z-10 để đè lên cái đèn nền Glow) */}
			<main className='max-w-5xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-20 relative z-10'>
				{/* Hero Section */}
				<motion.section
					variants={staggerContainer}
					initial='hidden'
					animate='visible'
					className='py-12 md:py-24'>
					<motion.div
						variants={fadeInUp}
						className='inline-block px-3 py-1.5 mb-6 rounded-full bg-neutral-900 border border-neutral-800 text-xs md:text-sm font-mono text-neutral-400'>
						&gt; Hello World, I am Nguyen Hoang Nam.
					</motion.div>

					<motion.h1
						variants={fadeInUp}
						className='text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 md:mb-6 leading-[1.15]'>
						Architecting{' '}
						<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400'>
							Systems.
						</span>
						<br />
						Crafting{' '}
						<span className='text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-500'>
							Experiences.
						</span>
					</motion.h1>

					<motion.p
						variants={fadeInUp}
						className='text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8 md:mb-10'>
						A Full-stack Developer with 2+ years of hands-on
						experience. I specialize in building robust Go-based
						back-end systems and high-performance React-based
						front-ends.
					</motion.p>

					<motion.div
						variants={fadeInUp}
						className='flex flex-col sm:flex-row items-center gap-4'>
						<a
							href='/my_cv.pdf'
							target='_blank'
							className='relative group w-full sm:w-auto'>
							<div className='absolute -inset-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300'></div>
							<div className='relative flex items-center justify-center gap-2 bg-white text-black w-full px-8 py-3.5 rounded-full font-bold hover:bg-neutral-100 transition-colors'>
								<DownloadIcon size={18} /> View My Resume
							</div>
						</a>
						<a
							href='https://github.com/hnamhocit'
							target='_blank'
							className='flex items-center justify-center gap-2 bg-neutral-900 border border-neutral-800 text-white w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold hover:bg-neutral-800 transition-colors'>
							<GithubIcon size={18} /> GitHub
						</a>
					</motion.div>
				</motion.section>

				{/* About Section */}
				<motion.section
					id='about'
					className='py-12 md:py-16'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-100px' }}
					variants={fadeInUp}>
					<div className='rounded-xl overflow-hidden border border-neutral-800 bg-[#0c0c0c] shadow-2xl text-xs sm:text-sm md:text-base'>
						<div className='flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-neutral-800'>
							<div className='w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500'></div>
							<div className='w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500'></div>
							<div className='w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500'></div>
							<span className='ml-2 text-[10px] md:text-xs text-neutral-500 font-mono'>
								hnamhocit@macbook: ~/about
							</span>
						</div>
						<div className='p-4 md:p-6 font-mono leading-relaxed text-neutral-300 wrap-break-words'>
							<p className='mb-2'>
								<span className='text-blue-400'>nam$</span>{' '}
								whoami
							</p>
							<p className='mb-4 text-neutral-400'>
								Nguyen Hoang Nam. Full-stack Developer based in
								HCMC, Vietnam.
							</p>
							<p className='mb-2'>
								<span className='text-blue-400'>nam$</span> cat
								core_philosophy.txt
							</p>
							<p className='mb-4 text-neutral-400'>
								I build REST/GraphQL APIs with Golang (Gin) and
								scalable web apps using React & Next.js.
								Obsessed with clean UI/UX, database
								optimization, and creating tools that empower
								developers.
							</p>
							<p className='mb-2'>
								<span className='text-blue-400'>nam$</span>{' '}
								./get_tech_stack.sh
							</p>
							<p className='text-emerald-400'>
								["Golang", "React/Next.js", "Docker", "AWS",
								"MySQL", "PostgreSQL"]
								<span className='animate-pulse text-white'>
									_
								</span>
							</p>
						</div>
					</div>
				</motion.section>

				{/* The Journey (Timeline) */}
				<section
					id='experience'
					className='py-16 md:py-24 border-t border-neutral-800/50'>
					<motion.h2
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInUp}
						className='text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3'>
						<BriefcaseIcon
							className='text-blue-500'
							size={24}
						/>{' '}
						The Journey
					</motion.h2>

					<div className='space-y-8 relative before:absolute before:inset-0 before:ml-4.5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-neutral-800 before:to-transparent'>
						{/* Freelancer */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, margin: '-50px' }}
							variants={slideInLeft}
							className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active'>
							<div className='flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-blue-500 bg-neutral-900 text-blue-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10'>
								<ServerIcon size={16} />
							</div>
							<div className='w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-5 md:p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-blue-500/30 transition-colors ml-auto md:ml-0'>
								<div className='flex flex-col sm:flex-row sm:items-center justify-between mb-2 md:mb-3 gap-1'>
									<h3 className='font-bold text-white text-base md:text-lg'>
										Freelance Full-stack
									</h3>
									<span className='text-xs font-mono text-blue-400'>
										01/2025 - Present
									</span>
								</div>
								<p className='text-xs md:text-sm text-neutral-400 mb-3'>
									Developing scalable web modules and backend
									services for game-related projects.
								</p>
								<ul className='text-xs md:text-sm text-neutral-500 list-disc list-inside space-y-1'>
									<li>
										Built backend APIs using Golang (Gin).
									</li>
									<li>Maintained CRUD modules & auth.</li>
								</ul>
							</div>
						</motion.div>

						{/* Education */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, margin: '-50px' }}
							variants={slideInRight}
							className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group'>
							<div className='flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10'>
								<GraduationCapIcon size={16} />
							</div>
							<div className='w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-5 md:p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 transition-colors ml-auto md:ml-0'>
								<div className='flex flex-col sm:flex-row sm:items-center justify-between mb-2 md:mb-3 gap-1'>
									<h3 className='font-bold text-white text-base md:text-lg'>
										Bachelor of IT
									</h3>
									<span className='text-xs font-mono text-neutral-500'>
										2025 - 2029
									</span>
								</div>
								<p className='text-xs md:text-sm text-neutral-400'>
									University of Transport Ho Chi Minh City
									(UTH). Building a strong foundation in
									computer science and system architecture.
								</p>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Projects Section */}
				<section
					id='projects'
					className='py-16 md:py-24 border-t border-neutral-800/50'>
					<motion.h2
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInUp}
						className='text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3'>
						<TerminalIcon
							className='text-blue-500'
							size={24}
						/>{' '}
						Featured Builds
					</motion.h2>

					<motion.div
						variants={staggerContainer}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6'>
						{/* HN Studio */}
						<motion.div
							variants={fadeInUp}
							className='group flex flex-col justify-between bg-neutral-900/30 border border-neutral-800 p-6 md:p-8 rounded-4xl hover:border-blue-500/40 transition-all hover:bg-neutral-900/60 relative overflow-hidden'>
							<div className='absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20 pointer-events-none'></div>
							<div>
								<div className='w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-5 md:mb-6 border border-blue-500/20'>
									<DatabaseIcon size={24} />
								</div>
								<h3 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>
									HN Studio (Database Client)
								</h3>
								<p className='text-sm md:text-base text-neutral-400 mb-6 leading-relaxed'>
									A professional-grade Database Client built
									for the web supporting MySQL & PostgreSQL.
									Features an intelligent SQL Editor,
									real-time Schema mapping, and interactive ER
									Diagrams.
								</p>
							</div>
							<div className='flex flex-wrap gap-2'>
								{[
									'React',
									'Zustand',
									'React Flow',
									'MySQL',
								].map((tech) => (
									<span
										key={tech}
										className='px-2.5 py-1 bg-[#0a0a0a] border border-neutral-800 rounded-full text-[10px] md:text-xs text-neutral-300'>
										{tech}
									</span>
								))}
							</div>
						</motion.div>

						{/* Flashcard App */}
						<motion.div
							variants={fadeInUp}
							className='group flex flex-col justify-between bg-neutral-900/30 border border-neutral-800 p-6 md:p-8 rounded-4xl hover:border-emerald-500/40 transition-all hover:bg-neutral-900/60 relative overflow-hidden'>
							<div className='absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20 pointer-events-none'></div>
							<div>
								<div className='w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-5 md:mb-6 border border-emerald-500/20'>
									<LayersIcon size={24} />
								</div>
								<h3 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>
									Flashcard App
								</h3>
								<p className='text-sm md:text-base text-neutral-400 mb-6 leading-relaxed'>
									A full-stack learning platform designed for
									self-study. Implemented user auth, deck
									management, and a spaced repetition logic
									(FSRS-inspired) with clean UI/UX.
								</p>
							</div>
							<div>
								<div className='flex flex-wrap gap-2 mb-6 md:mb-8'>
									{['Next.js', 'Firebase', 'RESTful API'].map(
										(tech) => (
											<span
												key={tech}
												className='px-2.5 py-1 bg-[#0a0a0a] border border-neutral-800 rounded-full text-[10px] md:text-xs text-neutral-300'>
												{tech}
											</span>
										),
									)}
								</div>
								<a
									href='https://hnfc.vercel.app'
									target='_blank'
									rel='noreferrer'
									className='inline-flex items-center gap-1.5 text-sm md:text-base text-white font-semibold hover:text-emerald-400 transition-colors group/link'>
									Visit App{' '}
									<ExternalLinkIcon
										size={14}
										className='group-hover/link:translate-x-1 transition-transform'
									/>
								</a>
							</div>
						</motion.div>
					</motion.div>
				</section>

				{/* Skills Section */}
				<section
					id='skills'
					className='py-16 md:py-24 border-t border-neutral-800/50'>
					<motion.h2
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInUp}
						className='text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 flex items-center gap-3'>
						<LayoutTemplateIcon
							className='text-blue-500'
							size={24}
						/>{' '}
						Tech Arsenal
					</motion.h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
						{[
							{
								title: 'Frontend',
								skills: [
									'HTML/CSS',
									'JS (ES6+)',
									'React',
									'Next.js',
								],
							},
							{
								title: 'Backend',
								skills: [
									'Golang (Gin)',
									'NestJS',
									'ExpressJS',
									'REST',
								],
							},
							{
								title: 'Databases',
								skills: [
									'MySQL',
									'PostgreSQL',
									'MongoDB',
									'Firestore',
								],
							},
							{
								title: 'Tools',
								skills: ['Git', 'Docker', 'AWS', 'Linux'],
							},
						].map((category, i) => (
							<motion.div
								key={category.title}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true, margin: '-50px' }}
								variants={fadeInUp}
								transition={{ delay: i * 0.1 }}
								className='bg-neutral-900/40 border border-neutral-800 p-5 md:p-6 rounded-2xl'>
								<h3 className='text-white font-semibold mb-3 md:mb-4 border-b border-neutral-800 pb-2'>
									{category.title}
								</h3>
								<motion.div
									variants={staggerContainer}
									className='flex flex-wrap gap-2'>
									{category.skills.map((s) => (
										<motion.span
											key={s}
											variants={popIn}
											className='px-2.5 py-1 bg-[#050505] border border-neutral-800 rounded-lg text-xs md:text-sm text-neutral-400'>
											{s}
										</motion.span>
									))}
								</motion.div>
							</motion.div>
						))}
					</div>
				</section>
			</main>

			{/* Footer */}
			<motion.footer
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				className='relative z-10 border-t border-neutral-800/50 pt-10 md:pt-12 pb-8 text-center text-neutral-500 bg-[#020202] px-4'>
				<h3 className='text-white font-bold text-xl md:text-2xl mb-6 tracking-tight'>
					hnam<span className='text-blue-500'>hocit</span>
				</h3>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 text-sm'>
					<a
						href='mailto:hnamhocit@gmail.com'
						className='flex items-center gap-2 hover:text-white transition-colors'>
						<MailIcon size={16} /> hnamhocit@gmail.com
					</a>
					<a
						href='tel:+84335574737'
						className='flex items-center gap-2 hover:text-white transition-colors'>
						<PhoneIcon size={16} /> +84 335574737
					</a>
					<a
						href='https://github.com/hnamhocit'
						target='_blank'
						className='flex items-center gap-2 hover:text-white transition-colors'>
						<GithubIcon size={16} /> github.com/hnamhocit
					</a>
				</div>
				<p className='text-xs md:text-sm'>
					© {new Date().getFullYear()} Nguyen Hoang Nam. All rights
					reserved.
				</p>
			</motion.footer>
		</div>
	)
}
