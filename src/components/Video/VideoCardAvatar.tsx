'use client'

import { BASE_URL } from '@/constants/urls'
import { CHANNEL_KEYS } from '@/constants/queryKeys'
import { channel } from '@/functions/fetchers'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { ItemsEntity } from '@/types/ResChannel'

interface VideoCardAvatarProps {
	channelId: string
}

export const VideoCardAvatar: React.FunctionComponent<VideoCardAvatarProps> = ({
	channelId,
}) => {
	const { data: resChannel } = useQuery({
		queryKey: [CHANNEL_KEYS.VIDEO_CARD_AVATAR, channelId],
		queryFn: () => channel({ part: 'snippet', channelId }),
		select: (resChannel) => {
			return resChannel.items.map(
				(item: ItemsEntity) => item.snippet.thumbnails.high.url,
			)
		},
	})
	return (
		<div>
			<Link href={`${BASE_URL}/channel/${channelId}`}>
				<div className='rounded-full overflow-clip w-9 h-9 relative'>
					{resChannel?.map((url: string) => (
						<Image
							key={url}
							src={url}
							alt={'Profile picture'}
							fill={true}
							sizes={'36'}
						/>
					))}
				</div>
			</Link>
		</div>
	)
}
