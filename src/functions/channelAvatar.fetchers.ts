import { axiosAPI } from '@/utils/api.axios'

export const channelAvatar = async (channelId: string) => {
	return axiosAPI({
		method: 'GET',
		url: `/c/${channelId}`,
		params: {
			part: 'snippet',
			chart: 'mostPopular',
		},
	})
}
