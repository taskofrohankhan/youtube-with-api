import Link from 'next/link'
import {
	MdMenu,
	MdMic,
	MdVideoCall,
	MdNotificationsNone,
	MdPersonOutline,
} from 'react-icons/md'
import { Logo } from '@/components/Logo'
import { SearchBar } from '@/components/SearchBar'
import { NavButton } from '@/components/NavButton'

interface NavBarProps {}

export const NavBar: React.FunctionComponent<NavBarProps> = () => {
	return (
		<nav className='h-14 px-4 flex items-center justify-between bg-white'>
			<div className='flex items-center gap-4'>
				<NavButton>
					<MdMenu size={24} />
				</NavButton>
				<Link href={'/'}>
					<Logo />
				</Link>
			</div>
			<div className='w-full flex gap-2 justify-end md:justify-center'>
				<SearchBar />
				<NavButton bg={true}>
					<MdMic size={24} />
				</NavButton>
			</div>
			<div className='flex items-center gap-2 ml-2 md:ml-0'>
				<NavButton>
					<MdVideoCall size={24} />
				</NavButton>
				<NavButton>
					<MdNotificationsNone size={24} />
				</NavButton>
				<NavButton>
					<MdPersonOutline size={24} />
				</NavButton>
			</div>
		</nav>
	)
}
