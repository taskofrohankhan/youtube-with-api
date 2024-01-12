'use client'

import { CHANNELS_KEYS } from '@/constants/queryKeys'
import { playlistItems, playlists } from '@/functions/fetchers'
import { ItemsEntity as ItemsEntityTitle } from '@/types/ResPlaylists'
import { ItemsEntity as ItemsEntityItems } from '@/types/ResPlaylistItems'
import { useQuery } from '@tanstack/react-query'
import { ChannelSectionPlaylistItem } from './ChannelSectionPlaylistItem'

interface ChannelSectionSinglePlaylistProps {
	playlistId: string | undefined
}

export const ChannelSectionSinglePlaylist: React.FunctionComponent<
	ChannelSectionSinglePlaylistProps
> = ({ playlistId }) => {
	const {
		isLoading: isLoadingTitle,
		data: resChannelSectionSinglePlaylistTitle,
	} = useQuery({
		queryKey: [
			CHANNELS_KEYS.CHANNEL_SECTION_PLAYLISTS,
			{ playlistId: playlistId },
		],
		queryFn: () => playlists({ playlistId: playlistId }),
	})

	const { isLoading: isLoadingItems, data: resChannelSectionSinglePlaylist } =
		useQuery({
			queryKey: [
				CHANNELS_KEYS.CHANNEL_SECTION_SINGLE_PLAYLIST,
				{
					playlistId: playlistId,
				},
			],
			queryFn: () =>
				playlistItems({
					playlistId: playlistId,
				}),
		})


	return (
		<div className='w-full flex flex-col gap-y-4 mt-6'>
			{!isLoadingTitle && (
				<>
					{resChannelSectionSinglePlaylistTitle.items.map(
						(item: ItemsEntityTitle) => (
							<div className='flex flex-col' key={item.id}>
								<h4>{item.snippet.title}</h4>
								{item.snippet.description !== '' && (
									<p>{item.snippet.description}</p>
								)}
							</div>
						),
					)}
				</>
			)}
			<div className='flex flex-nowrap overflow-clip gap-x-3'>
				{!isLoadingItems && (
					<>
						{resChannelSectionSinglePlaylist.items.map(
							(item: ItemsEntityItems) => (
								<ChannelSectionPlaylistItem
									key={item.contentDetails.videoId}
									videoId={item.contentDetails.videoId}
								/>
							),
						)}
					</>
				)}
			</div>
		</div>
	)
}
