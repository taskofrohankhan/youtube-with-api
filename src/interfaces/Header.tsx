import { NavBar } from './NavBar'

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
	return (
		<header className='w-full fixed z-20'>
			<NavBar />
		</header>
	)
}
