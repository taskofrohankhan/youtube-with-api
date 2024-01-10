'use client'

import { CHANNEL_KEYS } from '@/constants/queryKeys'
import { channel } from '@/functions/fetchers'
import { Spinner } from '@/libs/spinner.react-spinners'
import { ItemsEntity } from '@/types/ResChannel'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

interface ChannelProps {
	params: {
		channelId: string
	}
}

export default function Channel({ params }: ChannelProps) {
	const { channelId } = params
	const { isLoading, data: resChannel } = useQuery({
		queryKey: [CHANNEL_KEYS.CHANNEL_INFO, channelId],
		queryFn: () =>
			channel({ part: 'brandingSettings, snippet, statistics', channelId }),
	})

	return (
		<div className='md:ml-60 w-full flex flex-col justify-center'>
			{!isLoading ? (
				<>
					{resChannel?.items.map((item: ItemsEntity) => (
						<div
							key={item.id}
							className='border-2 border-red-500 w-full flex flex-col pl-3 pr-6'>
							{/* <div className='w-full h-44 relative rounded-xl overflow-hidden'>
								<Image
									className='object-cover'
									src={item.brandingSettings.image.bannerExternalUrl}
									fill={true}
									alt={'Coverart'}
									priority={true}
								/>
							</div> */}
						</div>
					))}
				</>
			) : (
				<div className={`${isLoading && 'w-10 h-10'} mx-auto`}>
					<Spinner loadingState={isLoading} />
				</div>
			)}
		</div>
	)
}
