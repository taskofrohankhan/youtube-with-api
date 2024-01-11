import Image from 'next/image'

interface LogoProps {}

export const Logo: React.FunctionComponent<LogoProps> = () => {
	return (
		<div className='w-[124px] h-14 flex justify-start items-center px-[16px] py-[14px]'>
			<Image
				src={'/logo.svg'}
				width={126}
				height={28}
				alt={'YouTube logo'}
				priority={true}
			/>
		</div>
	)
}
