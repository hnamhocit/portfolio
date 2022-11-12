import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Section from '../components/Section'
import Contacts from '../components/Contacts'

export default function Home() {
	const pages = [
		{
			id: 'skills',
			title: 'Skills',
			component: <Skills />,
		},
		{
			id: 'projects',
			title: 'Projects',
			component: <Projects />,
		},
		{
			id: 'contacts',
			title: 'Contacts',
			component: <Contacts />,
		},
	]

	return (
		<div className='w-screen md:max-w-5xl mx-auto px-4'>
			<Header pages={pages} />
			<Introduction />

			{pages.map((page) => (
				<Section key={page.title} id={page.id} title={page.title}>
					{page.component}
				</Section>
			))}
		</div>
	)
}
