import React, { ReactNode } from 'react'

export interface SectionProps {
	title: string
	id: string
	children: ReactNode
}

const Section = ({ id, title, children }: SectionProps) => {
	return (
		<section id={id} className='section'>
			<div className='section-head'>{title}</div>
			{children}
		</section>
	)
}

export default Section
