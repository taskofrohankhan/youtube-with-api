'use client'

import { baseURL } from '@/constants/baseURL'
import { CHANNEL_AVATAR } from '@/constants/queryKeys'
import { channelAvatar } from '@/functions/channelAvatar.fetchers'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

interface ChannelAvatarProps {
	channelId: string
}

const ChannelAvatar: React.FunctionComponent<ChannelAvatarProps> = ({
	channelId,
}) => {
	const { data: channel } = useQuery({
		queryKey: [CHANNEL_AVATAR, channelId],
		queryFn: () => channelAvatar(channelId),
	})

	if (!channel) return <main>404</main>

	return (
		<div>
			<Link href={baseURL + `/c/${channelId}`}>
				<div className='rounded-full overflow-clip w-9 h-9 relative'>
					<Image
						src={channel?.data.items[0].snippet.thumbnails.high.url}
						alt={'Profile picture'}
						fill={true}
						sizes={'36'}
					/>
				</div>
			</Link>
		</div>
	)
}

export default ChannelAvatar
