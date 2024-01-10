'use client'

import { useEffect, useState } from 'react'
import { MoonLoader } from 'react-spinners'

interface SpinnerProps {
	loadingState: boolean
}

export const Spinner: React.FunctionComponent<SpinnerProps> = ({
	loadingState,
}) => {
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
		}, 5000)
		
	}, [loadingState])

	return (
		<>
			{loading && <MoonLoader color={'#FF0000'} loading={loading} size={40} />}
		</>
	)
}
