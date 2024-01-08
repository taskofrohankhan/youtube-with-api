'use client'

import { VideoThumb } from '@/components/VideoThumb'
import { baseURL } from '@/constants/baseURL'
import { HOME_VIDEOS } from '@/constants/queryKeys'
import { homeVideos } from '@/functions/fetchers'
import { ItemsEntity, ResVideos } from '@/types/ResVideos'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Home() {
	const { ref, inView } = useInView()

	const {
		data: videos,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery({
		queryKey: [HOME_VIDEOS],
		queryFn: homeVideos,
		initialPageParam: undefined,
		getPreviousPageParam: (firstPage) => firstPage.prevPageToken ?? undefined,
		getNextPageParam: (lastPage) => lastPage.nextPageToken ?? undefined,
	})

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView, fetchNextPage])

	return (
		<main className='md:ml-60 w-full flex flex-col justify-center'>
			<div className='max-w-[3840px] mx-auto flex flex-wrap gap-3 pl-3 pr-6 py-3'>
				{videos?.pages.map((data: ResVideos) =>
					data.items?.map((item: ItemsEntity) => (
						<VideoThumb
							key={item.id}
							thumbnail={item.snippet.thumbnails.maxres?.url}
							duration={item.contentDetails.duration}
							channelId={item.snippet.channelId}
							title={item.snippet.title}
							videoPath={`${baseURL}/watch?v=${item.id}`}
							channel={item.snippet.channelTitle}
							channelPath={`${baseURL}/c/${item.snippet.channelId}`}
							views={item.statistics.viewCount}
							date='6 days ago'
						/>
					)),
				)}
			</div>
			<div className='flex flex-col justify-center'>
				<button
					ref={ref}
					title='Load More'
					type='button'
					onClick={() => {
						fetchNextPage()
					}}>
					{isFetchingNextPage
						? 'Loading More'
						: hasNextPage
						? 'Load Newer'
						: 'Nothing to load'}
				</button>
			</div>
		</main>
	)
}
