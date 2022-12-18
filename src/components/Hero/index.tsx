import clsx from 'clsx'
import Link from 'next/link'

const Hero = () => {
	const animatedClass = 'animate__animated animate__fadeInUp'

	return (
		<div className='hero h-[calc(100vh-64px)]'>
			<div className='flex flex-col gap-7'>
				<div
					className={clsx(
						'text-lg sm:text-xl font-medium text-indigo-400',
						animatedClass
					)}>
					Hi, my name is
				</div>

				<div className='text-3xl sm:text-5xl font-bold'>
					<div className={clsx('text-white', animatedClass)}>
						Nguyễn Hoàng Nam 👋
					</div>

					<div className={clsx('mt-4', animatedClass)}>
						I build things for the web.
					</div>
				</div>

				<p className={clsx('sm:text-lg', animatedClass)}>
					I&apos;m a passionate Software Engineer, specialised in
					Front End development using Next.js and TypeScript. As an
					advocate for web performance and accessibility and an
					evangelist for the Jamstack, I create amazing web
					applications to make the internet a better place.
				</p>

				<div className={animatedClass}>
					<Link href='#about' className='btn btn-primary'>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
