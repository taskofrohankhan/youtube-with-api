interface HeaderProps {
	children: React.ReactNode
}

export const Header: React.FunctionComponent<HeaderProps> = ({ children }) => {
	return <header>{children}</header>
}
