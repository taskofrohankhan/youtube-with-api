import ChannelInfo from '@/components/Channel/ChannelInfo'

export default function Layout({
	params,
	children,
}: {
	params: { channelId: string }
	children: React.ReactNode
}) {
	return (
		<div className='md:ml-60 w-full flex flex-col justify-center'>
			<ChannelInfo channelId={params.channelId} />
			{children}
		</div>
	)
}
