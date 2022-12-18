import Link from 'next/link'
import { AiFillGithub, AiFillMessage } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaFacebookMessenger } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import Section from '../Section'

const Contact = () => {
	const contacts = [
		{
			href: 'https://facebook.com/hnamhocit',
			icon: <BsFacebook size={24} />,
			title: 'Facebook',
		},
		{
			href: 'https://m.me/hnamhocit',
			icon: <FaFacebookMessenger size={24} />,
			title: 'Messenger',
		},
		{
			href: 'https://zalo.me/0335574737',
			icon: <AiFillMessage size={24} />,
			title: 'Zalo',
		},
		{
			href: 'mailto:hnamhocit@gmail.com',
			icon: <SiGmail size={24} />,
			title: 'Email',
		},
		{
			href: 'https://github.com/hnamhocit',
			icon: <AiFillGithub size={24} />,
			title: 'Github',
		},
	]

	return (
		<Section
			id='contact'
			title='🤙 Contact'
			className='flex items-center flex-wrap gap-7'>
			{contacts.map((contact) => (
				<Link
					key={contact.href}
					href={contact.href}
					className='flex items-center gap-3'>
					{contact.icon}
					<span className='text-lg font-medium'>{contact.title}</span>
				</Link>
			))}
		</Section>
	)
}

export default Contact
