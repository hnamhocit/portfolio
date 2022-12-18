import { HiCode } from 'react-icons/hi'
import Section from '../Section'

const About = () => {
	const technologies = [
		'JavaScript (ES6+)',
		'React',
		'Node.js',
		'Next.js',
		'TypeScript',
		'Tailwindcss',
		'Redux',
		'GraphQL',
	]

	return (
		<Section id='about' title='💁‍♂️ About' className='flex flex-col gap-7'>
			<p>
				Hello! My name is Nam and I enjoy creating things that live on
				the internet. I am interested in web development since 2020
				trying to create a useful website on the internet on my own it
				has taught me a lot about HTML and CSS.
			</p>

			<p>
				My main focus right now is on learning more about new
				technologies, developing my expertise, and building
				comprehensive, accessible products and user experiences.
			</p>

			<p>Here are a few technologies I’ve been working with recently:</p>

			<div className='grid grid-cols-2 gap-3'>
				{technologies.map((tech) => (
					<div key={tech} className='flex items-center gap-3'>
						<HiCode size={20} className='text-indigo-400' />
						<span className='font-medium'>{tech}</span>
					</div>
				))}
			</div>
		</Section>
	)
}

export default About
