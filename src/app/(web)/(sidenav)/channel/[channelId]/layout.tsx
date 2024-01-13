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
		<div className='w-full 4xl:pl-3 px-3 md:pl-[252px] md:pr-6'>
			<div className='3xl:max-w-[1920px] 3xl:pl-0 3xl:pr-0 mx-auto'>
				<ChannelInfo channelId={params.channelId} />
				<ChannelNav channelId={params.channelId} />
				{children}
			</div>
		</div>
	)
}
