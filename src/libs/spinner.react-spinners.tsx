'use client'

import { useEffect, useState } from 'react'
import { MoonLoader } from 'react-spinners'

export const Spinner: React.FunctionComponent = () => {
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 5000)
	}, [])

	return (
		<>
			{loading && <MoonLoader color={'#FF0000'} loading={loading} size={40} />}
		</>
	)
}
