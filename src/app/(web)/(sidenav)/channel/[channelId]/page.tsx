'use client'

import { ChannelSectionSinglePlaylist } from '@/components/Channel/ChannelSectionSinglePlaylist'
import { CHANNELS_KEYS } from '@/constants/queryKeys'
import { channelSections } from '@/functions/fetchers'
import { Spinner } from '@/libs/spinner.react-spinners'
import { ItemsEntity } from '@/types/ResChannelSection'
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

	return (
		<>
			{!isLoading ? (
				<>
					{resChannelSection.items.map((item: ItemsEntity) => (
						<div key={item.id} className='w-full'>
							{item.snippet.type === 'singleplaylist' && (
								<ChannelSectionSinglePlaylist
									playlistId={item.contentDetails?.playlists?.[0]}
								/>
							)}
						</div>
					))}
				</>
			) : (
				<div className={`${isLoading && 'w-10 h-10'} mx-auto`}>
					<Spinner loadingState={isLoading} />
				</div>
			)}
		</>
	)
}
