import { memo } from 'react'

export interface PhoneProps {
	src: string
}

const Phone = ({ src }: PhoneProps) => {
	return (
		<div className='mockup-phone w-full'>
			<div className='camera'></div>

			<div className='display '>
				<div
					className='artboard phone-1 !w-full bg-center bg-no-repeat bg-cover'
					style={{
						backgroundImage: `url(${src})`,
					}}></div>
			</div>
		</div>
	)
}

export default memo(Phone)
