interface NavButtonProps {
	children: React.ReactNode
	bg: boolean
	className: string
}

export const NavButton: React.FunctionComponent<NavButtonProps> = ({
	children,
	bg,
	className,
}) => {
	return (
		<div
			className={`${
				bg && 'bg-gray-100 border-2 border-gray-200 hidden md:block'
			} rounded-full hover:bg-gray-200 duration-100 ${className}`}>
			{children}
		</div>
	)
}
