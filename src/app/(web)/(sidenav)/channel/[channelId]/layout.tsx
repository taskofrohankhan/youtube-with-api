import { ChannelInfo } from '@/components/Channel/ChannelInfo'
import { ChannelNav } from '@/components/Channel/ChannelNav'

export default function Layout({
	params,
	children,
}: {
	params: { channelId: string }
	children: React.ReactNode
}) {
	return (
		<div className='md:ml-60 w-full pl-3 pr-6 flex flex-col justify-center'>
			<ChannelInfo channelId={params.channelId} />
			<ChannelNav channelId={params.channelId} />
			{children}
		</div>
	)
}
