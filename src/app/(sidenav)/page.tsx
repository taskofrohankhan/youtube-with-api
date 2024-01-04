'use client'

import { VideoThumb } from '@/components/VideoThumb'
import { HOME_VIDEOS } from '@/constants/queryKeys'
import { useQuery } from '@tanstack/react-query'

export default function Home() {
	const homeVideos = useQuery({ queryKey: [HOME_VIDEOS], queryFn: () => {} })
	return (
		<main className='md:ml-60 flex flex-wrap gap-3 pl-3 pr-6 py-3'>
			<VideoThumb
				thumbnail='/imagethumb.jpg'
				duration='21:50'
				avatar='/wafilifeprofile.jpg'
				title='Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial'
				videoPath='/video'
				channel='Channel Name'
				channelPath='/channel'
				views='45K views.'
				date='6 days ago'
			/>
			<VideoThumb
				thumbnail='/imagethumb.jpg'
				duration='21:50'
				avatar='/wafilifeprofile.jpg'
				title='Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial'
				videoPath='/video'
				channel='Channel Name'
				channelPath='/channel'
				views='45K views.'
				date='6 days ago'
			/>
			<VideoThumb
				thumbnail='/imagethumb.jpg'
				duration='21:50'
				avatar='/wafilifeprofile.jpg'
				title='Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial'
				videoPath='/video'
				channel='Channel Name'
				channelPath='/channel'
				views='45K views.'
				date='6 days ago'
			/>
			<VideoThumb
				thumbnail='/imagethumb.jpg'
				duration='21:50'
				avatar='/wafilifeprofile.jpg'
				title='Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial'
				videoPath='/video'
				channel='Channel Name'
				channelPath='/channel'
				views='45K views.'
				date='6 days ago'
			/>
			<VideoThumb
				thumbnail='/imagethumb.jpg'
				duration='21:50'
				avatar='/wafilifeprofile.jpg'
				title='Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial'
				videoPath='/video'
				channel='Channel Name'
				channelPath='/channel'
				views='45K views.'
				date='6 days ago'
			/>
			<VideoThumb
				thumbnail='/imagethumb.jpg'
				duration='21:50'
				avatar='/wafilifeprofile.jpg'
				title='Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial'
				videoPath='/video'
				channel='Channel Name'
				channelPath='/channel'
				views='45K views.'
				date='6 days ago'
			/>
			<VideoThumb
				thumbnail='/imagethumb.jpg'
				duration='21:50'
				avatar='/wafilifeprofile.jpg'
				title='Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial'
				videoPath='/video'
				channel='Channel Name'
				channelPath='/channel'
				views='45K views.'
				date='6 days ago'
			/>
		</main>
	)
}
