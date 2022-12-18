import { useEffect, useState } from 'react'

import { Repo } from '../../types/repo'
import Section from '../Section'
import Project from './Project'

const Projects = () => {
	const [projects, setProjects] = useState<Repo[]>([])

	useEffect(() => {
		const fetchApi = async () => {
			const res = await fetch(
				'https://api.github.com/users/hnamhocit/repos'
			)
			const data = (await res.json()) as Repo[]

			setProjects(data)
		}

		fetchApi()
	}, [])

	return (
		<Section
			id='projects'
			title='🗂️ Projects'
			className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
			{projects.map((repo) => (
				<Project key={repo.id} {...repo} />
			))}
		</Section>
	)
}

export default Projects
