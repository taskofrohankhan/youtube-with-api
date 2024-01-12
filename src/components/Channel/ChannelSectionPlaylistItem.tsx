'use client'

import { VIDEOS_KEYS } from '@/constants/queryKeys'
import { video } from '@/functions/fetchers'
import { ItemsEntity } from '@/types/ResVideos'
import { useQuery } from '@tanstack/react-query'
import { VideoCard } from '../Video/VideoCard'

interface ChannelSectionPlaylistItemProps {
	videoId: string
}

export const ChannelSectionPlaylistItem: React.FunctionComponent<
	ChannelSectionPlaylistItemProps
> = ({ videoId }) => {
	const { isLoading, data: resVideo } = useQuery({
		queryKey: [VIDEOS_KEYS.VIDEO_BY_ID, { videoId: videoId }],
		queryFn: () => video({ videoId }),
	})

	return (
		<>
			{!isLoading &&
				resVideo.items.map((item: ItemsEntity) => (
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
						showAvatar={false}
					/>
				))}
		</>
	)
}
