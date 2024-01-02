import Link from 'next/link'

interface NavlinkProps {
	path: string
	icon: React.ReactNode
  text: string
  pathname: string
}

export const Navlink: React.FunctionComponent<NavlinkProps> = ({
	path,
	icon,
  text,
  pathname,
}) => {
	return (
		<Link
			className={`${
				pathname === path && 'bg-gray-100 font-bold'
			} px-1 h-10 flex items-center gap-4 hover:bg-gray-200 rounded-xl text-sm`}
			href={path}>
			<i className='p-2'>{icon}</i>
			{text}
		</Link>
	)
}
