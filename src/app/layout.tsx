import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/interfaces/Header'
import { ReactQuery } from '@/contexts/ReactQuery'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'YouTube | Made with official YouTube API',
	description:
		'Making YouTube web application to practice official YouTube API',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReactQuery>{children}</ReactQuery>
			</body>
		</html>
	)
}
