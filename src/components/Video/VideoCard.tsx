import Image from 'next/image'
import Link from 'next/link'
import { VideoCardAvatar } from './VideoCardAvatar'
import { DurationConvertor } from '../convertors/DurationConvertor'
import { PublishedAtConvertor } from '../convertors/PublishAtConvertor'
import { StatisticConvertor } from '../convertors/StatisticConvertor'

interface VideoCardProps {
	videoId: string
	videoTitle: string
	videoDuration: string
	videoThumbnail: string
	videoPublishtionDate: string
	videoViews: string
	channelId: string
	channelTitle: string
	showAvatar: boolean
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
	showAvatar,
}) => {
	return (
		<div className='flex flex-col flex-1 w-full md:min-w-80 md:max-w-[380px] h-auto gap-2 overflow-hidden'>
			<div className='relative'>
				<Link href={`/watch?v=${videoId}`}>
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
					<DurationConvertor duration={videoDuration} />
				</div>
			</div>

			<div className='flex gap-2 px-2'>
				{showAvatar && <VideoCardAvatar channelId={channelId} />}
				<div className='flex flex-col text-gray-500'>
					<div>
						<Link
							href={`/watch?v=${channelId}`}
							className={`text-base font-bold line-clamp-2 whitespace-normal text-youtube-black w-full ${
								showAvatar
									? 'md:w-[260px] md:max-w-80'
									: 'md:w-[304px] md:max-w-[364px]'
							}`}>
							{videoTitle}
						</Link>
					</div>

					<div className='flex flex-col'>
						<div>
							<Link href={`/channel/${channelId}`}>{channelTitle}</Link>
						</div>

						<div className='flex gap-2'>
							<span>
								<StatisticConvertor statistic={videoViews} /> Views
							</span>
							<span>‧</span>
							<span>
								<PublishedAtConvertor date={videoPublishtionDate} /> ago
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
