import Image from 'next/image'
import Link from 'next/link'

interface VideoThumbProps {
	thumbnail: string
	duration: string
	avatar: string
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
	avatar,
  title,
  videoPath,
  channel,
  channelPath,
	views,
	date,
}) => {
	return (
		<div className='flex flex-col gap-2 w-full md:w-64 md:max-w-auto'>
			<div className='relative'>
				<Link href={videoPath}>
					<div className='rounded-xl overflow-clip'>
						<Image src={thumbnail} width={1920} height={1080} alt='Thumbnail' />
					</div>
				</Link>
				<div className='absolute right-2 bottom-2 bg-slate-950 text-white text-xs px-1 rounded'>
					{duration}
				</div>
			</div>

			<div className='flex flex-col gap-1'>
				<div className='flex gap-2'>
					<Link href={channelPath}>
						<div className='rounded-full overflow-clip w-9 h-9 relative'>
							<Image src={avatar} alt='Profile picture' fill={true} />
						</div>
					</Link>

					<div>
						<Link href={videoPath} className='text-base font-bold line-clamp-2'>
							{title}
						</Link>
					</div>
				</div>

				<div className='flex flex-col text-gray-500'>
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
	)
}
