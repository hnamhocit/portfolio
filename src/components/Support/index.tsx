import Section from '../Section'
import Phone from './Phone'

const Support = () => {
	return (
		<Section
			id='support'
			title='🙏 Support me'
			className='grid md:grid-cols-2 gap-5'>
			<Phone src='/images/momo.jpg' />
			<Phone src='/images/mb.jpg' />
		</Section>
	)
}

export default Support
