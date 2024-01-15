'use client'

import { CHANNELS_KEYS } from '@/constants/queryKeys'
import { channels } from '@/functions/fetchers'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { ItemsEntity } from '@/types/ResChannel'

interface AvatarProps {
	channelId: string
	size: number
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({
	channelId,
	size,
}) => {
	const { data: resChannel } = useQuery({
		queryKey: [CHANNELS_KEYS.VIDEO_CARD_AVATAR, channelId],
		queryFn: () => channels({ part: 'snippet', channelId }),
		select: (resChannel) => {
			return resChannel.items.map(
				(item: ItemsEntity) => item.snippet.thumbnails.high.url,
			)
		},
	})
	return (
		<div>
			<Link href={`/channel/${channelId}`}>
				<div
					className={`rounded-full overflow-clip w-[${size}px] h-[${size}px] relative`}>
					{resChannel?.map((url: string) => (
						<Image
							key={url}
							src={url}
							alt={'Profile picture'}
							fill={true}
							sizes={`${size}`}
						/>
					))}
				</div>
			</Link>
		</div>
	)
}
