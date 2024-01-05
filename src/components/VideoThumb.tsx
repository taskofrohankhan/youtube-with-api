import Image from 'next/image'
import Link from 'next/link'
import ChannelAvatar from './ChannelAvatar'
import { durationConvertor } from '@/functions/duration.convertor'

interface VideoThumbProps {
	thumbnail: string
	duration: string
	channelId: string
	title: string
	videoPath: string
	channel: string
	channelPath: string
	views: string
	date: string
}

export const VideoThumb: React.FunctionComponent<VideoThumbProps> = ({
	thumbnail,
	duration,
	channelId,
	title,
	videoPath,
	channel,
	channelPath,
	views,
	date,
}) => {
	const convertedDuration = durationConvertor(duration)
	return (
		<div className='flex flex-col flex-1 basis-auto md:basis-80 gap-2'>
			<div className='relative'>
				<Link href={videoPath}>
					<div className='rounded-xl overflow-clip'>
						<Image
							src={thumbnail}
							width={1280}
							height={720}
							alt={'Thumbnail'}
						/>
					</div>
				</Link>
				<div className='absolute right-2 bottom-2 bg-slate-950 text-white text-xs px-1 rounded'>
					{convertedDuration}
				</div>
			</div>

			<div className='flex gap-2'>
				<ChannelAvatar channelId={channelId} />

				<div className='flex flex-col text-gray-500'>
					<div>
						<Link
							href={videoPath}
							className='text-base font-bold line-clamp-2 text-slate-800'>
							{title}
						</Link>
					</div>

					<div className='flex flex-col'>
						<div>
							<Link href={channelPath}>{channel}</Link>
						</div>

						<div className='flex gap-2'>
							<span>{views}</span>
							<span>{date}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
