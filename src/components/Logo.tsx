import Image from 'next/image'

interface LogoProps {}

export const Logo: React.FunctionComponent<LogoProps> = () => {
	return (
		<div>
			<Image src={'/logo.svg'} width={116} height={25} alt='YouTube logo' />
		</div>
	)
}
