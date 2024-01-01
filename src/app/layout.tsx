import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/interfaces/Header'
import { NavBar } from '@/interfaces/NavBar'

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
			<body className={`${inter.className} w-screen px-4 lg:px-6`}>
				<Header>
					<NavBar />
				</Header>
				{children}
			</body>
		</html>
	)
}
