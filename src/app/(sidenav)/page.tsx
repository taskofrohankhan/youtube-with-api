'use client'

import { VideoThumb } from '@/components/VideoThumb'
import { baseURL } from '@/constants/baseURL'
import { HOME_VIDEOS } from '@/constants/queryKeys'
import { homeVideos } from '@/functions/homeVideos.fetchers'
import { ItemsEntity, ResVideos } from '@/types/ResVideos.types'
import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query'

export default function Home() {
	const { data: videos } = useQuery({
		queryKey: [HOME_VIDEOS],
		queryFn: homeVideos,
	})

	if (!videos) return <main>404</main>

	return (
		<main className='md:ml-60 flex flex-wrap gap-3 pl-3 pr-6 py-3'>
			{videos.data.items.map((item: ItemsEntity) => (
				<VideoThumb
					key={item.id}
					thumbnail={item.snippet.thumbnails.maxres.url}
					duration={item.contentDetails.duration}
					channelId={item.snippet.channelId}
					title={item.snippet.title}
					videoPath={`${baseURL}/watch?v=${item.id}`}
					channel={item.snippet.channelTitle}
					channelPath={`${baseURL}/c/${item.snippet.channelId}`}
					views={item.statistics.viewCount}
					date='6 days ago'
				/>
			))}
		</main>
	)
}
