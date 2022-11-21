import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'
import Contacts from './Contacts'

export default function Introduction() {
	return (
		<section
			id='introduction'
			className='flex items-center justify-center h-screen'>
			<Card className='p-3 min-w-[240px]'>
				<Link
					target='_blank'
					href='https://zalo.me/335574737'
					className='relative block w-32 h-32 border-2 border-orange-500 rounded-full mx-auto hover:opacity-30 transition'>
					<Image
						src='/images/logo.jpg'
						alt='Logo'
						fill
						className='object-cover rounded-full'
					/>
				</Link>

				<div className='my-2 text-center'>
					<h1 className='text-lg font-bold'>Nguyễn Hoàng Nam</h1>
					<p className='text-gray-600'>Front End Developer</p>
				</div>

				<Contacts />
			</Card>
		</section>
	)
}
