import clsx from 'clsx'
import { memo, ReactNode } from 'react'

import SectionHead from './SectionHead'

export interface SectionProps {
	title: string
	id: string
	children: ReactNode
	className?: string
}

const Section = ({ title, children, className, id }: SectionProps) => {
	return (
		<section className='mt-16 animate__animated animate__fadeInUp' id={id}>
			<SectionHead>{title}</SectionHead>
			<div className={clsx('mt-7', className)}>{children}</div>
		</section>
	)
}

export default memo(Section)
