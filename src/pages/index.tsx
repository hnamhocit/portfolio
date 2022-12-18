import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Support from '../components/Support'

export default function Home() {
	return (
		<>
			<Header />

			<div className='container'>
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Support />
			</div>
		</>
	)
}
