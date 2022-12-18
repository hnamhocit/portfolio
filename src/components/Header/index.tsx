import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
	const pages = [
		{
			href: '#about',
			title: '💁‍♂️ About',
		},
		{
			href: '#projects',
			title: '🗂️ Projects',
		},
		{
			href: '#contact',
			title: '🤙 Contact',
		},
		{
			href: '#support',
			title: '🙏 Support me',
		},
	]

	return (
		<div className='sticky top-0 z-[9999] navbar container bg-base-100 animate__animated animate__fadeInDown'>
			<div className='flex-1'>
				<Image
					src='/images/logo.jpg'
					alt='App Logo'
					width={36}
					height={36}
					className='object-cover rounded-full'
				/>
			</div>

			<div className='flex-none'>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost m-1'>
						<AiOutlineMenu />
					</label>

					<ul
						tabIndex={0}
						className='dropdown-content menu w-52 bg-base-100 shadow-xl rounded-box'>
						{pages.map((page) => (
							<li key={page.href}>
								<Link href={page.href}>{page.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header
