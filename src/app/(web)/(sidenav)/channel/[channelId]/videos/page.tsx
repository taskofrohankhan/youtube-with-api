'use client'

import { VideoById } from '@/components/Video/VideoById'
import { CHANNELS_KEYS } from '@/constants/queryKeys'
import { searchVideoForChannel } from '@/functions/fetchers'
import { Spinner } from '@/libs/spinner.react-spinners'
import { ItemsEntity, ResChannelVideos } from '@/types/ResChannelVideos'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface ChannelVideosProps {
	params: {
		channelId: string
	}
}

export default function ChannelVideos({ params }: ChannelVideosProps) {
	const { ref, inView } = useInView()

	const {
		isLoading,
		data: resChannelVideos,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery({
		queryKey: [CHANNELS_KEYS.CHANNEL_VIDEOS, params.channelId],
		queryFn: ({ pageParam }) =>
			searchVideoForChannel({
				channelId: params.channelId,
				pageParam: pageParam,
			}),
		initialPageParam: undefined,
		getPreviousPageParam: (firstPage) => firstPage.prevPageToken ?? undefined,
		getNextPageParam: (lastPage) => lastPage.nextPageToken ?? undefined,
	})

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

	return (
		<div className='w-full flex flex-wrap gap-x-3 gap-y-4 mt-6'>
			{!isLoading ? (
				<>
					{resChannelVideos?.pages.map((data: ResChannelVideos) =>
						data.items?.map((item: ItemsEntity) => (
							<VideoById key={item.id.videoId} videoId={item.id.videoId} />
						)),
					)}
				</>
			) : (
				<div
					ref={ref}
					className={`${
						(isFetchingNextPage || hasNextPage) && 'w-10 h-10'
					} mx-auto`}>
					<Spinner loadingState={isFetchingNextPage || hasNextPage} />
				</div>
			)}
		</div>
	)
}
