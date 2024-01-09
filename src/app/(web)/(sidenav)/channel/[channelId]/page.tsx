'use client'

import { CHANNEL_KEYS } from '@/constants/queryKeys'
import { channel } from '@/functions/fetchers'
import { Spinner } from '@/libs/spinner.react-spinners'
import { ItemsEntity } from '@/types/ResVideos'
import { useQuery } from '@tanstack/react-query'

interface ChannelProps {
	params: {
		channelId: string
	}
}

export default function Channel({ params }: ChannelProps) {
	const { isLoading, data: resChannel } = useQuery({
		queryKey: [CHANNEL_KEYS.CHANNEL_INFO, params.channelId],
		queryFn: () => channel(params.channelId),
	})

	console.log(resChannel)

	return (
		<div className='md:ml-60 w-full flex flex-col justify-center'>
			{resChannel?.items.map((item: ItemsEntity) => (
				<div key={item.id}>TEXT: {item.snippet.channelId}</div>
			))}
			<div className={`${isLoading && 'w-10 h-10'} mx-auto`}>
				<Spinner loadingState={isLoading} />
			</div>
		</div>
	)
}
