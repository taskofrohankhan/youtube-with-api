import { Header } from '@/interfaces/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
