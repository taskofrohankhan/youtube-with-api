'use client'

import { CHANNELS_KEYS } from '@/constants/queryKeys'
import { playlistItems, playlists } from '@/functions/fetchers'
import { ItemsEntity as ItemsEntityTitle } from '@/types/ResPlaylists'
import {
	ItemsEntity as ItemsEntityItems,
	ResPlaylistItems,
} from '@/types/ResPlaylistItems'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { ChannelSectionPlaylistItem } from './ChannelSectionPlaylistItem'
import { Button } from '../Base/Button'
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md'

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
		queryKey: [CHANNELS_KEYS.CHANNEL_SECTION_PLAYLISTS, playlistId],
		queryFn: () => playlists({ playlistId: playlistId }),
	})

	const {
		isLoading: isLoadingItems,
		data: resChannelSectionSinglePlaylist,
		hasPreviousPage,
		fetchPreviousPage,
		fetchNextPage,
		hasNextPage,
	} = useInfiniteQuery({
		queryKey: [CHANNELS_KEYS.CHANNEL_SECTION_SINGLE_PLAYLIST, playlistId],
		queryFn: ({ pageParam }) =>
			playlistItems({ playlistId: playlistId, pageParam: pageParam }),
		initialPageParam: undefined,
		getPreviousPageParam: (firstPage) => firstPage.prevPageToken ?? undefined,
		getNextPageParam: (lastPage) => lastPage.nextPageToken ?? undefined,
	})

	return (
		<div className='w-full flex flex-col gap-y-3 mt-6'>
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
			<div className='relative'>
				<div
					onClick={() => {
						fetchPreviousPage()
					}}
					className={`${
						hasPreviousPage ? 'block' : 'hidden'
					} absolute left-0 z-10 top-1/4 bg-transparent  p-1 h-full flex items-start`}>
					<Button className='p-2 bg-white md:bg-white hover:bg-gray-200'>
						<MdOutlineKeyboardArrowLeft size={24} />
					</Button>
				</div>
				{!isLoadingItems && (
					<div className={`overflow-x-auto scrollbar-x-none flex gap-x-3`}>
						{resChannelSectionSinglePlaylist?.pages.map(
							(data: ResPlaylistItems) =>
								data.items?.map((item: ItemsEntityItems) => (
									<ChannelSectionPlaylistItem
										key={item.contentDetails.videoId}
										videoId={item.contentDetails.videoId}
									/>
								)),
						)}
					</div>
				)}
				<div
					onClick={() => fetchNextPage()}
					className={`${
						hasNextPage ? 'block' : 'hidden'
					} absolute right-0 z-10 top-1/4 bg-transparent  p-1 h-full flex items-start`}>
					<Button className='p-2 bg-white md:bg-white hover:bg-gray-200'>
						<MdOutlineKeyboardArrowRight size={24} />
					</Button>
				</div>
			</div>
		</div>
	)
}
