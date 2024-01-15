import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from '../Base/Avatar'
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
	showHorizontal: boolean
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
	showHorizontal,
}) => {
	return (
		<div
			className={`flex ${
				showHorizontal ? 'flex-row' : 'flex-col md:min-w-80 md:max-w-[380px]'
			} flex-1 w-full  h-auto gap-2 overflow-hidden`}>
			<div className='relative'>
				<Link href={`/watch?v=${videoId}`}>
					<div
						className={`${
							showHorizontal && 'w-40 h-auto'
						} rounded-xl overflow-clip`}>
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

			<div className='w-full flex gap-2 px-2'>
				{showAvatar && <Avatar channelId={channelId} size={36} />}
				<div className='flex flex-col text-gray-500'>
					<div>
						<Link
							href={`/watch?v=${channelId}`}
							className={`text-base font-bold line-clamp-2 whitespace-normal text-youtube-black w-full ${
								showHorizontal
									? 'md:w-[200px] md:max-w-[260px]'
									: showAvatar
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

						<div
							className={`flex ${showHorizontal ? 'gap-1 text-sm' : 'gap-2'}`}>
							<span>
								<StatisticConvertor statistic={videoViews} /> views
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
