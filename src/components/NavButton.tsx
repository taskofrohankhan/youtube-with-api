interface NavButtonProps {
	children: React.ReactNode
	bg?: boolean
}

export const NavButton: React.FunctionComponent<NavButtonProps> = ({
	children,
	bg,
}) => {
	return (
		<button
			className={`${
				bg && 'bg-gray-100 p-[6px] border-2 border-gray-200 hidden md:block'
			} p-2 rounded-full hover:bg-gray-200 duration-100`}
			type='button'>
			{children}
		</button>
	)
}
