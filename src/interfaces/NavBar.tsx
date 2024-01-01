import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'
import { Logo } from '@/components/Logo'

interface NavBarProps {}

export const NavBar: React.FunctionComponent<NavBarProps> = () => {
	return (
		<nav className='border-2 border-green-500'>
			<div className='flex items-center gap-4'>
				<div>
					<HiMenu size={24} />
				</div>
				<Link href={'/'}>
					<Logo />
				</Link>
			</div>
      <div>
        
      </div>
			<div>Notification</div>
			<div>Profile</div>
		</nav>
	)
}
