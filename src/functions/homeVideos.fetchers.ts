import { axiosAPI } from '@/utils/api.axios'

export const homeVideos = async () => {
	return axiosAPI({
		method: 'GET',
		url: '/videos',
		params: {
			part: 'snippet,contentDetails',
			chart: 'mostPopular',
			regionCode: 'BD',
			videoCategoryId: '28',
			maxResults: '20'
		},
	})
}
