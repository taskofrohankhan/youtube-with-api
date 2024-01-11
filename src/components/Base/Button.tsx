interface ButtonProps {
	children: React.ReactNode
	className: string
}

export const Button: React.FunctionComponent<ButtonProps> = ({
	children,
	className,
}) => {
	return (
		<button
			type='button'
			title='button'
			className={`rounded-full duration-100 ${className}`}>
			{children}
		</button>
	)
}
