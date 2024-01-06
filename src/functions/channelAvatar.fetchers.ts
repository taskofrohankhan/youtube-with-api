import { axiosAPI } from '@/utils/api.axios'

export const channelAvatar = async (channelId: string) => {
	return axiosAPI({
		method: 'GET',
		url: `/channels`,
		params: {
			part: 'snippet',
			id: channelId,
		},
	})
}
