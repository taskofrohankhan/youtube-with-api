import { axiosAPI } from '@/libs/api.axios'

export const homeVideos = async ({
	pageParam,
}: {
	pageParam: string | undefined
}) => {
	const data = await axiosAPI({
		method: 'GET',
		url: '/videos',
		params: {
			part: 'snippet,contentDetails,statistics',
			chart: 'mostPopular',
			regionCode: 'BD',
			videoCategoryId: '10',
			maxResults: '24',
			pageToken: pageParam,
		},
	})
	return data.data
}

export const channelAvatar = async (channelId: string) => {
	const data = await axiosAPI({
		method: 'GET',
		url: `/channels`,
		params: {
			part: 'snippet',
			id: channelId,
		},
	})

	return data
}
