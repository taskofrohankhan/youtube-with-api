import { Header } from '@/interfaces/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='w-full'>
			<Header />
			<div className='pt-14'>{children}</div>
		</main>
	)
}
