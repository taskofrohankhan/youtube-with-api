'use client'

import { VideoThumb } from '@/components/VideoThumb'
import { baseURL } from '@/constants/baseURL'
import { HOME_VIDEOS } from '@/constants/queryKeys'
import { homeVideos } from '@/functions/homeVideos.fetchers'
import { ItemsEntity, ResVideos } from '@/types/ResVideos.types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'

export default function Home() {
	const [pageToken, setPageToken] = useState<string | undefined>()
	const [pageTokenIndex, setPageTokenIndex] = useState<number>(0)

	console.log({ pageToken, pageTokenIndex })

	const { data: videos, fetchNextPage } = useInfiniteQuery({
		queryKey: [HOME_VIDEOS],
		queryFn: () => homeVideos({ pageToken: pageToken }),
		initialPageParam: 1,
		getNextPageParam: (_lastPage, page) => {
			return page.length + 1
		},
	})

	console.log(videos?.pages)

	useEffect(() => {
		setPageToken(videos?.pages[pageTokenIndex].nextPageToken)
	}, [videos?.pages, pageTokenIndex])

	return (
		<main className='md:ml-60 flex flex-wrap gap-3 pl-3 pr-6 py-3'>
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
			<button
				title='Load More'
				type='button'
				onClick={async () => {
					await fetchNextPage()
					setPageTokenIndex(pageTokenIndex + 1)
					setPageToken(videos?.pages[pageTokenIndex].nextPageToken)
				}}>
				Load More
			</button>
		</main>
	)
}
