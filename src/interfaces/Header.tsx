import { NavBar } from './NavBar'

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
	return (
		<header className='w-screen absolute z-10'>
			<NavBar />
		</header>
	)
}
