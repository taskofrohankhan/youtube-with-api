import { axiosAPI } from '@/utils/api.axios'

export const homeVideos = async ({
	pageToken,
	pageParam,
}: {
	pageToken: string | undefined
	pageParam?: number
}) => {
	const data = await axiosAPI({
		method: 'GET',
		url: '/videos',
		params: {
			part: 'snippet,contentDetails,statistics',
			chart: 'mostPopular',
			regionCode: 'BD',
			videoCategoryId: '10',
			maxResults: '6',
			pageParam: pageToken,
			page: pageParam,
		},
	})
	return data.data
}
