import { axiosAPI } from '@/utils/api.axios'

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
