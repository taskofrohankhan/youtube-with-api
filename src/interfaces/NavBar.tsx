import Link from 'next/link'
import {
	HiBars3,
	HiOutlineMicrophone,
	HiOutlineBell,
	HiOutlineUser,
} from 'react-icons/hi2'
import { TbVideoPlus } from 'react-icons/tb'
import { Logo } from '@/components/Logo'
import { SearchBar } from '@/components/SearchBar'
import { NavButton } from '@/components/NavButton'

interface NavBarProps {}

export const NavBar: React.FunctionComponent<NavBarProps> = () => {
	return (
		<nav className='wrapper h-14 flex items-center justify-between bg-white'>
			<div className='flex items-center gap-4'>
				<NavButton>
					<HiBars3 size={24} />
				</NavButton>
				<Link href={'/'}>
					<Logo />
				</Link>
			</div>
			<div className='w-full flex gap-2 justify-end md:justify-center'>
				<SearchBar />
				<NavButton bg={true}>
					<HiOutlineMicrophone size={24} />
				</NavButton>
			</div>
			<div className='flex items-center gap-2 ml-2 md:ml-0'>
				<NavButton>
					<TbVideoPlus size={24} />
				</NavButton>
				<NavButton>
					<HiOutlineBell size={24} />
				</NavButton>
				<NavButton>
					<HiOutlineUser size={24} />
				</NavButton>
			</div>
		</nav>
	)
}
