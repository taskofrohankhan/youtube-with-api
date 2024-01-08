'use client'

import { VideoThumb } from '@/components/VideoThumb'
import { baseURL } from '@/constants/baseURL'
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
							date={item.snippet.publishedAt}
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
