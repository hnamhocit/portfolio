import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo, useEffect, useRef } from 'react'

export interface ActiveLinkProps {
	href: string
	title: string
	onActive: (left: number, width: number) => void
}

const ActiveLink = ({ href, title, onActive }: ActiveLinkProps) => {
	const router = useRouter()
	const linkRef = useRef<HTMLAnchorElement>(null)

	useEffect(() => {
		const hash = router.asPath.split('#')[1]

		if (href.includes(hash)) {
			const obj = linkRef.current?.getBoundingClientRect()
			const left = obj?.left as number
			const width = obj?.width as number
			linkRef.current?.classList.add('text-orange-500')
			onActive(left, width)
		} else {
			linkRef.current?.classList.remove('text-orange-500')
		}
	}, [router, href, onActive])

	return (
		<Link
			ref={linkRef}
			href={href}
			className='block p-3 font-semibold capitalize hover:text-orange-500 transition'>
			{title}
		</Link>
	)
}

export default memo(ActiveLink)
