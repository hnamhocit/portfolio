import { memo, ReactNode } from 'react'

export interface SectionTitleProps {
	children: ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
	return (
		<div className='section-head'>
			<div className='section-head-title'>{children}</div>
			<div className='section-divider'></div>
		</div>
	)
}

export default memo(SectionTitle)
