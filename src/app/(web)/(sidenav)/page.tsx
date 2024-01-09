'use client'

import { VideoCard } from '@/components/Video/VideoCard'
import { HOME_VIDEOS } from '@/constants/queryKeys'
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
		queryKey: [HOME_VIDEOS],
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
		<main className='md:ml-60 w-full flex flex-col justify-center'>
			<div className='max-w-[3840px] mx-auto flex flex-wrap gap-x-3 gap-y-4 pl-3 pr-6 py-3'>
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
					<Spinner />
				</div>
			</div>
		</main>
	)
}
