'use client'

import { BASE_URL } from '@/constants/urls'
import { VIDEO_CARD_AVATAR } from '@/constants/queryKeys'
import { channel } from '@/functions/fetchers'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

interface VideoCardAvatarProps {
	channelId: string
}

export const VideoCardAvatar: React.FunctionComponent<VideoCardAvatarProps> = ({
	channelId,
}) => {
	const { data: resChannel } = useQuery({
		queryKey: [VIDEO_CARD_AVATAR, channelId],
		queryFn: () => channel(channelId),
	})

	return (
		<div>
			<Link href={`${BASE_URL}/channel/${channelId}`}>
				<div className='rounded-full overflow-clip w-9 h-9 relative'>
					<Image
						src={resChannel?.data.items[0].snippet.thumbnails.high.url}
						alt={'Profile picture'}
						fill={true}
						sizes={'36'}
					/>
				</div>
			</Link>
		</div>
	)
}