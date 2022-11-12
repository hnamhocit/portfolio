import Image from 'next/image'
import Link from 'next/link'

export default function Skills() {
	const skills = [
		{
			href: 'https://getbootstrap.com',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
			alt: 'bootstrap',
		},
		{
			href: 'https://www.w3schools.com/css/',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
			alt: 'css3',
		},
		{
			href: 'https://expressjs.com',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
			alt: 'express',
		},
		{
			href: 'https://firebase.google.com/',
			src: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
			alt: 'firebase',
		},
		{
			href: 'https://git-scm.com/',
			src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
			alt: 'git',
		},
		{
			href: 'https://graphql.org',
			src: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
			alt: 'graphql',
		},
		{
			href: 'https://www.w3.org/html/',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
			alt: 'html5',
		},
		{
			href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
			alt: 'javascript',
		},
		{
			href: 'https://nextjs.org/',
			src: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
			alt: 'nextjs',
		},
		{
			href: 'https://nodejs.org',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
			alt: 'nodejs',
		},
		{
			href: 'https://www.postgresql.org',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
			alt: 'postgresql',
		},
		{
			href: 'https://reactjs.org/',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
			alt: 'reactjs',
		},
		{
			href: 'https://redux.js.org',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
			alt: 'reduxjs',
		},
		{
			href: 'https://sass-lang.com',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
			alt: 'sass',
		},
		{
			href: 'https://tailwindcss.com/',
			src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
			alt: 'tailwindcss',
		},
		{
			href: 'https://www.typescriptlang.org/',
			src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
			alt: 'typescript',
		},
	]

	return (
		<div className='grid grid-cols-4 md:grid-cols-5 items-center justify-items-center gap-5'>
			{skills.map((skill) => (
				<Link
					key={skill.href}
					href={skill.href}
					target='_blank'
					rel='noreferrer'
					className='block p-3 border-2 hover:shadow-xl hover:border-orange-500 hover:scale-125 rounded-md transition'>
					<Image
						src={skill.src}
						alt={skill.alt}
						width={60}
						height={60}
					/>
				</Link>
			))}
		</div>
	)
}
