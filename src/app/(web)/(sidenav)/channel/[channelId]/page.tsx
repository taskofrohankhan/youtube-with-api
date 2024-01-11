'use client'

import { CHANNELS_KEYS } from '@/constants/queryKeys'
import { channelSections } from '@/functions/fetchers'
import { Spinner } from '@/libs/spinner.react-spinners'
import { useQuery } from '@tanstack/react-query'

interface ChannelProps {
	params: {
		channelId: string
	}
}

export default function Channel({ params }: ChannelProps) {
	const { isLoading, data: resChannelSection } = useQuery({
		queryKey: [CHANNELS_KEYS.CHANNEL_SECTION, params.channelId],
		queryFn: () => channelSections({ channelId: params.channelId }),
	})

	// console.log(resChannelSection)

	return (
		<div className='mt-5'>
			{!isLoading ? (
				<div></div>
			) : (
				<div className={`${isLoading && 'w-10 h-10'} mx-auto`}>
					<Spinner loadingState={isLoading} />
				</div>
			)}
		</div>
	)
}
