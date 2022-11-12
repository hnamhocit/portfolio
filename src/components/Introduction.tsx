import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export default function Introduction() {
	return (
		<section
			id='introduction'
			className='flex items-center justify-center h-screen'>
			<div className='flex flex-col md:flex-row md:items-center gap-5'>
				<div>
					<div className='relative w-20 h-20 md:hidden'>
						<Image
							src='/images/logo.jpg'
							alt='Logo'
							fill
							className='object-cover border-2 border-orange-500 rounded-full'
						/>
					</div>

					<div className='mt-3'>
						<h1 className='text-3xl font-bold'>
							Hi, I&apos;m Nguyễn Hoàng Nam 👋
						</h1>

						<p className='my-1 md:text-xl font-medium'>
							I am a passionate Software Engineer, specialised in
							Front End development using Next.js and TypeScript.
							As an advocate for web performance and accessibility
							and an evangelist for the Jamstack, I create amazing
							web applications to make the internet a better
							place.
						</p>

						<Link href='#contacts' className='primary-btn'>
							Contacts
						</Link>
					</div>
				</div>

				<div className='hidden md:block relative shrink-0'>
					<div className='absolute top-0 left-0 w-20 h-20 border-2 border-r-transparent border-b-transparent border-orange-500 -z-10'></div>

					<div className={clsx('p-3 hover:scale-110 transition')}>
						<Image
							src='/images/logo.jpg'
							alt='Logo'
							width={240}
							height={360}
							className='object-cover rounded-md'
						/>
					</div>

					<div className='absolute bottom-0 right-0 w-20 h-20 border-2 border-orange-500 border-t-transparent border-l-transparent -z-10'></div>
				</div>
			</div>
		</section>
	)
}
