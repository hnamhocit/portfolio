import clsx from 'clsx'
import Link from 'next/link'
import { memo, useState } from 'react'
import { AiOutlineFolder } from 'react-icons/ai'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

import { Repo } from '../../../types/repo'

const Project = ({ name, description, topics, html_url, homepage }: Repo) => {
	const [isHover, setIsHover] = useState(false)

	return (
		<div
			className='flex flex-col justify-between gap-5 p-5 rounded-xl bg-base-200 hover:-translate-y-2 transition'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			<div className='flex items-center justify-between'>
				<AiOutlineFolder
					size={48}
					className={clsx('transition', {
						'text-indigo-400': isHover,
					})}
				/>

				<div className='flex items-center gap-5'>
					<Link href={html_url} target='_blank'>
						<FiGithub size={24} />
					</Link>

					<Link href={homepage} target='_blank'>
						<FiExternalLink size={24} />
					</Link>
				</div>
			</div>

			<div>
				<Link
					href={homepage}
					className={clsx(
						'text-3xl font-medium text-white transition',
						{
							'!text-indigo-400': isHover,
						}
					)}>
					{name}
				</Link>

				<div className='text-lg mt-1'>{description}</div>
			</div>

			<div className='flex items-center gap-3 flex-wrap'>
				{topics.map((topic) => (
					<div key={topic} className='text-sm'>
						{topic}
					</div>
				))}
			</div>
		</div>
	)
}

export default memo(Project)
