'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

interface ReactQueryProps {
	children: React.ReactNode
}

export const ReactQuery: React.FunctionComponent<ReactQueryProps> = ({
	children,
}) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
		</QueryClientProvider>
	)
}
