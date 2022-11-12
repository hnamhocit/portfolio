import { useCallback, useState, memo } from 'react'
import ActiveLink from './ActiveLink'

export interface Page {
	id: string
	title: string
	component: JSX.Element
}

export interface HeaderProps {
	pages: Page[]
}

function Header({ pages }: HeaderProps) {
	const [left, setLeft] = useState(0)
	const [width, setWidth] = useState(0)

	const handleActive = useCallback((left: number, width: number) => {
		setLeft(left)
		setWidth(width)
	}, [])

	return (
		<header className='fixed top-0 inset-x-0 py-3 bg-[rgba(255,255,255,0.7)] z-20'>
			<div className='relative flex items-center justify-center gap-5'>
				<ActiveLink
					key='introduction'
					href={'#' + 'introduction'}
					title='Introduction'
					onActive={handleActive}
				/>

				{pages.map((page) => (
					<ActiveLink
						key={page.id}
						href={'#' + page.id}
						title={page.title}
						onActive={handleActive}
					/>
				))}

				<div
					className='absolute bottom-0 rounded-md h-1 bg-orange-500 shadow shadow-orange-500/50 transition-all'
					style={{ left, width }}></div>
			</div>
		</header>
	)
}

export default memo(Header)
