import Image from 'next/image'

interface LogoProps {}

export const Logo: React.FunctionComponent<LogoProps> = () => {
	return (
		<div className='w-[100px] h-[24px] flex items-center'>
			<Image src={'/logo.svg'} width={90} height={20} alt='YouTube logo' priority={true} />
		</div>
	)
}
