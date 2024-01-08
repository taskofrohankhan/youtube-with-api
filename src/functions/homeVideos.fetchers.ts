import { axiosAPI } from '@/utils/api.axios'

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
			maxResults: '6',
			pageToken: pageParam,
		},
	})
	return data.data
}
