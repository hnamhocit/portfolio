import Link from 'next/link'
import { FaFacebookMessenger, FaFacebook, FaGithub } from 'react-icons/fa'
import { SiZalo, SiGmail } from 'react-icons/si'

export default function Contacts() {
	const socials = [
		{
			href: 'https://facebook.com/hnamhocit',
			icon: <FaFacebook fontSize={32} />,
		},
		{
			href: 'https://m.me/hnamhocit',
			icon: <FaFacebookMessenger fontSize={32} />,
		},
		{
			href: 'https://zalo.me/335574737',
			icon: <SiZalo fontSize={32} />,
		},
		{
			href: 'https://github.com/hnamhocit',
			icon: <FaGithub fontSize={32} />,
		},
		{
			href: 'mailto:hnamhocit@gmail.com',
			icon: <SiGmail fontSize={24} />,
		},
	]

	return (
		<div>
			<div className='flex items-center justify-center gap-5 flex-wrap'>
				{socials.map((social) => (
					<Link
						target='_blank'
						key={social.href}
						href={social.href}
						className='block p-2 rounded-full hover:bg-orange-500 hover:shadow-xl hover:text-white transition'>
						{social.icon}
					</Link>
				))}
			</div>

			<p className='text-center'>
				Thanks for you reading 🤧! If you like, don&apos;t forget share
				to your friends 😆.
			</p>
		</div>
	)
}
