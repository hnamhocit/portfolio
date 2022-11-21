import Link from 'next/link'
import { FaFacebookMessenger, FaFacebook, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Contacts() {
	const socials = [
		{
			href: 'https://facebook.com/hnamhocit',
			icon: <FaFacebook fontSize={24} />,
		},
		{
			href: 'https://m.me/hnamhocit',
			icon: <FaFacebookMessenger fontSize={24} />,
		},

		{
			href: 'https://github.com/hnamhocit',
			icon: <FaGithub fontSize={24} />,
		},
		{
			href: 'mailto:hnamhocit@gmail.com',
			icon: <SiGmail fontSize={24} />,
		},
	]

	return (
		<div className='flex items-center justify-evenly flex-wrap'>
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
	)
}
