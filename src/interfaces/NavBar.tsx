import Link from 'next/link'
import {
	MdMenu,
	MdMic,
	MdVideoCall,
	MdNotificationsNone,
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
				<NavButton
					bg={true}
					className='bg-slate-800 border-slate-800 hover:bg-slate-950 p-0'>
					<Link
						href='/signin'
						className='flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-white whitespace-nowrap'>
						Sign In
					</Link>
				</NavButton>
			</div>
		</nav>
	)
}
