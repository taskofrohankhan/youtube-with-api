import { SideBar } from '@/interfaces/SideBar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-full flex absolute z-0'>
			<SideBar />
			{children}
		</div>
	)
}
