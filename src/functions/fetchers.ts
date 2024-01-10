import { axiosAPI } from '@/libs/api.axios'

export const videos = async ({
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
			videoCategoryId: '28',
			maxResults: '6',
			pageToken: pageParam,
		},
	})
	return data.data
}

export const channel = async ({
	part,
	channelId,
}: {
	part: string
	channelId: string
}) => {
	const data = await axiosAPI({
		method: 'GET',
		url: `/channels`,
		params: {
			part: part,
			id: channelId,
		},
	})

	return data.data
}
