import Image from 'next/image'
import Link from 'next/link'
import { VideoCardAvatar } from './VideoCardAvatar'
import { durationConvertor } from '@/functions/convertors'
import { statisticsConvertor } from '@/functions/convertors'
import { PublishedDateDifference } from './PublishedDateDifference'
import { BASE_URL } from '@/constants/urls'

interface VideoCardProps {
	videoId: string
	videoTitle: string
	videoDuration: string
	videoThumbnail: string
	videoPublishtionDate: string
	videoViews: string
	channelId: string
	channelTitle: string
}

export const VideoCard: React.FunctionComponent<VideoCardProps> = ({
	videoId,
	videoTitle,
	videoDuration,
	videoThumbnail,
	videoPublishtionDate,
	videoViews,
	channelId,
	channelTitle,
}) => {
	const convertedDuration = durationConvertor(videoDuration)
	const convertedViews = statisticsConvertor(videoViews)
	return (
		<div className='flex flex-col flex-1 basis-auto md:basis-80 md:max-w-[380px] h-auto gap-2 overflow-hidden'>
			<div className='relative'>
				<Link href={`${BASE_URL}/watch?v=${videoId}`}>
					<div className='rounded-xl overflow-clip'>
						<Image
							src={videoThumbnail}
							width={1280}
							height={720}
							alt={'Thumbnail'}
							priority={true}
							placeholder={'empty'}
						/>
					</div>
				</Link>

				<div className='absolute right-2 bottom-2 bg-slate-950 text-white text-xs px-1 rounded'>
					{convertedDuration}
				</div>
			</div>

			<div className='flex gap-2'>
				<VideoCardAvatar channelId={channelId} />

				<div className='flex flex-col text-gray-500'>
					<div>
						<Link
							href={`${BASE_URL}/watch?v=${channelId}`}
							className='text-base font-bold line-clamp-2 whitespace-normal text-slate-800'>
							{videoTitle}
						</Link>
					</div>

					<div className='flex flex-col'>
						<div>
							<Link href={`${BASE_URL}/channel/${channelId}`}>
								{channelTitle}
							</Link>
						</div>

						<div className='flex gap-2'>
							<span>{convertedViews} Views.</span>
							<PublishedDateDifference date={videoPublishtionDate} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
