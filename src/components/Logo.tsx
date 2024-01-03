import Image from 'next/image'

interface LogoProps {}

export const Logo: React.FunctionComponent<LogoProps> = () => {
	return (
		<div className='w-[110px] h-[24px]'>
			<Image src={'/logo.svg'} width={90} height={20} alt='YouTube logo' priority={true} />
		</div>
	)
}
