import '../sass/globals.scss'
import 'animate.css'

import { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextSeo
				title='hnamhocit'
				titleTemplate='hnamhocit'
				defaultTitle='hnamhocit'
				description='I am a passionate Software Engineer, specialised in Front End development using Next.js and TypeScript. As an advocate for web performance and accessibility and an evangelist for the Jamstack, I create amazing web applications to make the internet a better place.'
				canonical='https://hnamhocit.vercel.app/'
				openGraph={{
					url: 'https://hnamhocit.vercel.app/',
					title: 'hnamhocit',
					description:
						'I am a passionate Software Engineer, specialised in Front End development using Next.js and TypeScript. As an advocate for web performance and accessibility and an evangelist for the Jamstack, I create amazing web applications to make the internet a better place.',
					images: [
						{
							url: '/images/logo.jpg',
							width: 800,
							height: 420,
							alt: 'hnamhocit',
						},
					],
				}}
				twitter={{
					handle: '@hnamhocit',
					site: '@hnamhocit',
					cardType: 'summary_large_image',
				}}
			/>

			<Component {...pageProps} />
		</>
	)
}
