import { axiosAPI } from '@/utils/api.axios'

export const homeVideos = async () => {
	return axiosAPI({
		method: 'GET',
		url: '/videos',
    params: {
			part: 'snippet',
			chart: 'mostPopular',
		},
	})
}
