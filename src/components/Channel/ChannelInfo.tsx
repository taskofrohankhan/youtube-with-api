'use client'

import { Button } from '@/components/Base/Button'
import { StatisticConvertor } from '@/components/convertors/StatisticConvertor'
import { CHANNELS_KEYS } from '@/constants/queryKeys'
import { channels } from '@/functions/fetchers'
import { Spinner } from '@/libs/spinner.react-spinners'
import { ItemsEntity } from '@/types/ResChannel'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

interface ChannelInfoProps {
	channelId: string
}

export const ChannelInfo: React.FunctionComponent<ChannelInfoProps> = ({
	channelId,
}) => {
	const { isLoading, data: resChannel } = useQuery({
		queryKey: [
			CHANNELS_KEYS.CHANNEL_INFO,
			CHANNELS_KEYS.VIDEO_CARD_AVATAR,
			channelId,
		],
		queryFn: () =>
			channels({ part: 'brandingSettings, snippet, statistics', channelId }),
	})
	return (
		<>
			{!isLoading ? (
				<>
					{resChannel?.items.map((item: ItemsEntity) => (
						<div key={item.id} className='w-full flex flex-col'>
							{item.brandingSettings.image?.bannerExternalUrl && (
								<div className='w-full h-44 relative rounded-xl overflow-clip'>
									<Image
										className='object-cover'
										src={item.brandingSettings.image.bannerExternalUrl}
										fill={true}
										alt={'Coverart'}
										priority={true}
									/>
								</div>
							)}
							<div className='w-full flex gap-x-6 mt-8'>
								<div>
									<div className='w-20 h-20 md:w-40 md:h-40 relative rounded-full overflow-clip'>
										<Image
											className={'object-cover'}
											src={item.snippet.thumbnails.high.url}
											fill={true}
											sizes={'80'}
											alt={'Profile picture'}
										/>
									</div>
								</div>
								<div className='flex flex-col justify-start gap-y-3'>
									<div>
										<h2>{item.snippet.title}</h2>
									</div>
									<div className='flex gap-x-2 text-gray-500'>
										<h6>{item.snippet.customUrl}</h6>
										<span>‧</span>
										<h6>
											<StatisticConvertor
												statistic={item.statistics.subscriberCount}
											/>{' '}
											subscribers
										</h6>
										<span>‧</span>
										<h6>
											<StatisticConvertor
												statistic={item.statistics.videoCount}
											/>{' '}
											videos
										</h6>
									</div>
									<div className='flex gap-x-1 items-center text-gray-500'>
										<p className='text-sm text-wrap line-clamp-1 w-[400px]'>
											{item.snippet.description}
										</p>
										<span>
											<MdOutlineKeyboardArrowRight size={16} />
										</span>
									</div>
									<div>
										<Button className='bg-youtube-black hover:bg-gray-800 flex justify-center items-center rounded-full px-4 py-2'>
											<span className='text-sm font-semibold text-white whitespace-nowrap'>
												Subscribe
											</span>
										</Button>
									</div>
								</div>
							</div>
						</div>
					))}
				</>
			) : (
				<div className={`${isLoading && 'w-10 h-10'} mx-auto`}>
					<Spinner loadingState={isLoading} />
				</div>
			)}
		</>
	)
}
