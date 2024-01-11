import Link from 'next/link'
import {
	MdMenu,
	MdMic,
	MdVideoCall,
	MdNotificationsNone,
} from 'react-icons/md'
import { Logo } from '@/components/Header/Logo'
import { SearchBar } from '@/components/Header/SearchBar'
import { Button } from '@/components/Base/Button'

interface NavBarProps {}

export const NavBar: React.FunctionComponent<NavBarProps> = () => {
	return (
		<nav className='h-14 pl-4 pr-6 flex items-center justify-between bg-white'>
			<div className='flex items-center'>
				<Button className='p-2 bg-transparent hover:bg-gray-200'>
					<MdMenu size={24} />
				</Button>
				<Link href={'/'}>
					<Logo />
				</Link>
			</div>
			<div className='w-full flex gap-2 justify-end md:justify-center'>
				<SearchBar />
				<Button className='p-2 bg-transparent md:bg-gray-200 hover:bg-gray-300'>
					<MdMic size={24} />
				</Button>
			</div>
			<div className='flex items-center gap-2 ml-2 md:ml-0'>
				<Button className='p-2 bg-transparent hover:bg-gray-200'>
					<MdVideoCall size={24} />
				</Button>
				<Button className='p-2 bg-transparent hover:bg-gray-200'>
					<MdNotificationsNone size={24} />
				</Button>
				<Button className='bg-gray-950 hover:bg-gray-800'>
					<Link
						href='/signin'
						className='flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-white whitespace-nowrap'>
						Sign In
					</Link>
				</Button>
			</div>
		</nav>
	)
}
