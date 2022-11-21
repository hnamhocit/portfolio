import { ReactNode } from 'react'
import Tilt from 'react-parallax-tilt'
import Styles from './Card.module.scss'
import clsx from 'clsx'

export interface CardProps {
	children: ReactNode
	className?: string
}

const Card = ({ children, className }: CardProps) => {
	return (
		<Tilt>
			<div
				className={clsx(
					Styles.Card,
					'hover:scale-110 transition',
					className
				)}>
				{children}
			</div>
		</Tilt>
	)
}

export default Card
