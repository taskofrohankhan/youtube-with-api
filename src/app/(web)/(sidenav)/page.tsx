'use client'

import { VideoCard } from '@/components/Video/VideoCard'
import { VIDEOS_KEYS } from '@/constants/queryKeys'
import { videos } from '@/functions/fetchers'
import { Spinner } from '@/libs/spinner.react-spinners'
import { ItemsEntity, ResVideos } from '@/types/ResVideos'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Home() {
	const { ref, inView } = useInView()
	const {
		data: resVideos,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery({
		queryKey: [VIDEOS_KEYS.HOME_VIDEOS],
		queryFn: videos,
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
		<div className='md:pl-60 6xl:pl-0 w-full flex flex-col justify-center'>
			<div className='5xl:max-w-[2880px] mx-auto flex flex-wrap gap-x-3 gap-y-4 pl-3 pr-6 py-3'>
				{resVideos?.pages.map((data: ResVideos) =>
					data.items?.map((item: ItemsEntity) => (
						<VideoCard
							key={item.id}
							videoId={item.id}
							videoTitle={item.snippet.title}
							videoDuration={item.contentDetails.duration}
							videoThumbnail={item.snippet.thumbnails.maxres?.url}
							videoPublishtionDate={item.snippet.publishedAt}
							videoViews={item.statistics.viewCount}
							channelId={item.snippet.channelId}
							channelTitle={item.snippet.channelTitle}
							showAvatar={true}
						/>
					)),
				)}
			</div>
			<div className='flex flex-col justify-center'>
				<div
					ref={ref}
					className={`${
						(isFetchingNextPage || hasNextPage) && 'w-10 h-10'
					} mx-auto`}>
					<Spinner loadingState={isFetchingNextPage || hasNextPage} />
				</div>
			</div>
		</div>
	)
}
