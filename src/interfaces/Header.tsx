import { NavBar } from './NavBar'

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
	return (
		<header className='w-screen fixed z-20'>
			<NavBar />
		</header>
	)
}
