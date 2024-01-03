'use client'

import { Navlink } from '@/components/Navlink'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
	MdHome,
	MdOutlineHome,
	MdSubscriptions,
	MdOutlineSubscriptions,
	MdHistory,
	MdOutlineHistory,
	MdPersonOutline,
} from 'react-icons/md'

interface SideBarProps {}

export const SideBar: React.FunctionComponent<SideBarProps> = () => {
	const pathname = usePathname()
	return (
		<aside className='h-full w-60 py-3 pl-3 pr-6 divide-y flex-col gap-3 fixed z-10 bg-white hidden md:flex'>
			<div>
				<Navlink
					path='/'
					pathname={pathname}
					icon={
						pathname === '/' ? (
							<MdHome size={24} />
						) : (
							<MdOutlineHome size={24} />
						)
					}
					text='Home'
				/>
				<Navlink
					path='/subscriptions'
					pathname={pathname}
					icon={
						pathname === '/subscriptions' ? (
							<MdSubscriptions size={24} />
						) : (
							<MdOutlineSubscriptions size={24} />
						)
					}
					text='Subscriptions'
				/>
				<Navlink
					path='/history'
					pathname={pathname}
					icon={
						pathname === '/history' ? (
							<MdHistory size={24} />
						) : (
							<MdOutlineHistory size={24} />
						)
					}
					text='History'
				/>
			</div>
			<div>
				<h3 className='py-3 text-sm font-bold'>Subscriptions</h3>
				<Navlink
					path='/channel'
					pathname={pathname}
					icon={
						<Image
							className='rounded-full'
							src={'/wafilifeprofile.jpg'}
							width={24}
							height={24}
							alt='Profile picture'
						/>
					}
					text='Wafilife'
				/>
			</div>
		</aside>
	)
}
