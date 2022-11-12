import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
	const projects = [
		{
			href: 'https://hnamhocit.github.io/hnslider/',
			name: 'hnslider',
			description: 'Simple slider using JS with Animation',
			photoURL: '/images/hnslider.png',
		},
		{
			href: 'https://hnamhocit.vercel.app',
			name: 'portfolio',
			description: 'My portfolio Website 🎆',
			photoURL: '/images/portfolio.png',
		},
		{
			href: '#',
			name: 'hnchat',
			description: 'Realtime Chat App 😎',
			photoURL: '/images/coming-soon.webp',
		},
	]

	return (
		<div className='grid md:grid-cols-3 items-center justify-items-center gap-5'>
			{projects.map((project) => (
				<Link href={project.href} key={project.href}>
					<div className='relative w-[300px] h-[160px]'>
						<Image
							src={project.photoURL}
							alt={project.name}
							fill
							className='object-cover rounded-md border'
						/>
					</div>
					<div className='text-center mt-3'>
						<h4 className='text-xl font-semibold capitalize'>
							{project.name}
						</h4>
						<p>{project.description}</p>
					</div>
				</Link>
			))}
		</div>
	)
}
