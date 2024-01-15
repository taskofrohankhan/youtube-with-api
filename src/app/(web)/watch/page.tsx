'use client'

import { VideoCard } from '@/components/Video/VideoCard'
import { Avatar } from '@/components/Base/Avatar'
import { VIDEOS_KEYS } from '@/constants/queryKeys'
import { video, videos } from '@/functions/fetchers'
import { Spinner } from '@/libs/spinner.react-spinners'
import {
	ItemsEntity as ItemsEntityVideoById,
	ResVideoById,
} from '@/types/ResVideoById'
import { ItemsEntity as ItemsEntityVideos, ResVideos } from '@/types/ResVideos'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { WatchSubscribers } from '@/components/Watch/WatchSubscribers'
import { Button } from '@/components/Base/Button'
import {
	MdThumbUpOffAlt,
	MdOutlineShare,
	MdOutlineArrowDownward,
	MdOutlineMoreHoriz,
} from 'react-icons/md'
import { StatisticConvertor } from '@/components/convertors/StatisticConvertor'
import { PublishedAtConvertor } from '@/components/convertors/PublishAtConvertor'

export default function Watch() {
	const searchParams = useSearchParams()
	const v = searchParams.get('v')

	const { isLoading, data: resVideo } = useQuery<ResVideoById>({
		queryKey: [VIDEOS_KEYS.VIDEO_PLAY, v],
		queryFn: () => video({ videoId: v!, part: 'player' }),
	})

	const [collapse, setCollapse] = useState<boolean>(true)

	const { ref, inView } = useInView()
	const {
		data: resVideos,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery({
		queryKey: [VIDEOS_KEYS.HOME_VIDEOS],
		queryFn: videos,
		initialPageParam: undefined,
		getPreviousPageParam: (firstPage) => firstPage.prevPageToken ?? undefined,
		getNextPageParam: (lastPage) => lastPage.nextPageToken ?? undefined,
	})

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView, fetchNextPage, hasNextPage])

	return (
		<div className='w-full px-4 md:px-6 md:pt-3'>
			<div className='w-fit mx-auto flex gap-x-6'>
				<div className='flex flex-col gap-y-4'>
					<div className='rounded-2xl overflow-clip'>
						<iframe
							width='912'
							height='513'
							src={`//www.youtube.com/embed/${v}`}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
					</div>
					<div className='flex flex-col'>
						{!isLoading && (
							<>
								{resVideo?.items?.map((item: ItemsEntityVideoById) => (
									<div key={item.id} className='flex flex-col gap-y-3'>
										<div className=''>
											<h4 className='line-clamp-2'>{item.snippet.title}</h4>
										</div>
										<div className='flex justify-between'>
											<div className='flex gap-x-2'>
												<Avatar channelId={item.snippet.channelId} size={48} />
												<div className='flex gap-2'>
													<div>
														<Link
															className='text-base font-bold'
															href={`/channel/${item.snippet.channelId}`}>
															{item.snippet.channelTitle}
														</Link>
														<WatchSubscribers
															channelId={item.snippet.channelId}
														/>
													</div>
													<div className='flex items-center'>
														<Button className='bg-youtube-black hover:bg-gray-800 flex justify-center items-center rounded-full px-4 py-2'>
															<span className='text-sm font-semibold text-white whitespace-nowrap'>
																Subscribe
															</span>
														</Button>
													</div>
												</div>
											</div>
											<div className='flex gap-x-2'>
												<div>
													<Button className='bg-gray-200 hover:bg-gray-300 flex justify-center items-center rounded-full px-4 py-2'>
														<span className='text-sm font-semibold text-youtube-black whitespace-nowrap flex gap-x-1'>
															<i>
																<MdThumbUpOffAlt size={20} />
															</i>
															<span>
																<StatisticConvertor
																	statistic={item.statistics.likeCount}
																/>
															</span>
														</span>
													</Button>
												</div>
												<div>
													<Button className='bg-gray-200 hover:bg-gray-300 flex justify-center items-center rounded-full px-4 py-2'>
														<span className='text-sm font-semibold text-youtube-black whitespace-nowrap flex gap-x-1'>
															<i>
																<MdOutlineShare size={20} />
															</i>
															Share
														</span>
													</Button>
												</div>
												<div>
													<Button className='bg-gray-200 hover:bg-gray-300 flex justify-center items-center rounded-full px-4 py-2'>
														<span className='text-sm font-semibold text-youtube-black whitespace-nowrap flex gap-x-1'>
															<i>
																<MdOutlineArrowDownward size={20} />
															</i>
															Download
														</span>
													</Button>
												</div>
												<div>
													<Button className='bg-gray-200 hover:bg-gray-300 flex justify-center items-center rounded-full px-2 py-2'>
														<span className='text-sm font-semibold text-youtube-black whitespace-nowrap flex gap-x-1'>
															<i>
																<MdOutlineMoreHoriz size={20} />
															</i>
														</span>
													</Button>
												</div>
											</div>
										</div>
										<div className='bg-gray-100 w-full p-3 rounded-xl'>
											<div className='flex gap-x-2'>
												<span>
													<StatisticConvertor
														statistic={item.statistics.viewCount}
													/>
												</span>
												<span>‧</span>
												<span>
													<PublishedAtConvertor
														date={item.snippet.publishedAt}
													/>{' '}
													ago
												</span>
											</div>
											<div className='py-1'>
												<p
													className={`text-sm whitespace-pre ${
														collapse ? 'line-clamp-4' : ''
													}`}>
													{item.snippet.description}
												</p>
											</div>
											<button
                        onClick={() => setCollapse(!collapse)}
                        className='text-base'
												type='button'
												title='Show more'>
												{collapse ? 'Show more' : 'Show less'}
											</button>
										</div>
									</div>
								))}
							</>
						)}
					</div>
				</div>
				<div className='flex flex-col justify-start'>
					<h5>Most Popular</h5>
					<div className='flex flex-col gap-y-3 mt-4'>
						{resVideos?.pages.map((data: ResVideos) =>
							data.items?.map((item: ItemsEntityVideos) => (
								<VideoCard
									key={item.id}
									videoId={item.id}
									videoTitle={item.snippet.title}
									videoDuration={item.contentDetails.duration}
									videoThumbnail={item.snippet.thumbnails.maxres?.url}
									videoPublishtionDate={item.snippet.publishedAt}
									videoViews={item.statistics.viewCount}
									channelId={item.snippet.channelId}
									channelTitle={item.snippet.channelTitle}
									showAvatar={false}
									showHorizontal={true}
								/>
							)),
						)}
					</div>
					<div
						ref={ref}
						className={`${
							(isFetchingNextPage || hasNextPage) && 'w-10 h-10'
						} mx-auto`}>
						<Spinner loadingState={isFetchingNextPage || hasNextPage} />
					</div>
				</div>
			</div>
		</div>
	)
}
