'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ChannelNavProps {
	channelId: string
}

export const ChannelNav: React.FunctionComponent<ChannelNavProps> = ({
	channelId,
}) => {
	const pathname = usePathname()
	return (
		<div className='w-full mt-8'>
			<ul className='w-full flex gap-x-4 text-base font-medium text-gray-500 border-b border-b-gray-200'>
				<li
					className={`${
						pathname === `/channel/${channelId}` &&
						'border-b-2 border-b-youtube-black'
					} text-youtube-black`}>
					<Link href={`/channel/${channelId}`}>Home</Link>
				</li>
				<li
					className={`${
						pathname === `/channel/${channelId}/videos` &&
						'border-b-2 border-b-youtube-black'
					} text-youtube-black`}>
					<Link href={`/channel/${channelId}/videos`}>Videos</Link>
				</li>
				<li
					className={`${
						pathname === `/channel/${channelId}/playlists` &&
						'border-b-2 border-b-youtube-black'
					} text-youtube-black`}>
					<Link href={`/channel/${channelId}/playlists`}>Playlists</Link>
				</li>
			</ul>
		</div>
	)
}

