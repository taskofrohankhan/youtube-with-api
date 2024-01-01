interface SideBarProps {
	children: React.ReactNode
}

export const SideBar: React.FunctionComponent<SideBarProps> = ({
	children,
}) => {
	return <aside>{children}</aside>
}
