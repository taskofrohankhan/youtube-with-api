interface FooterProps {
	children: React.ReactNode
}

export const Footer: React.FunctionComponent<FooterProps> = ({ children }) => {
	return <footer>{children}</footer>
}
