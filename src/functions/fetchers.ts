import { axiosAPI } from '@/libs/api.axios'

export const videos = async ({
	pageParam,
}: {
	pageParam: string | undefined
}) => {
	try {
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
	} catch (error) {
		console.error(error)
	}
}

export const channels = async ({
	part,
	channelId,
}: {
	part: string
	channelId: string
}) => {
	try {
		const data = await axiosAPI({
			method: 'GET',
			url: `/channels`,
			params: {
				part: part,
				id: channelId,
			},
		})

		return data.data
	} catch (error) {
		console.log(error)
	}
}

export const channelSections = async ({ channelId }: { channelId: string }) => {
	try {
		const data = await axiosAPI({
			method: 'GET',
			url: '/channelSections',
			params: {
				part: 'contentDetails,id,snippet',
				channelId: channelId,
			},
		})
		return data.data
	} catch (error) {
		console.log(error)
	}
}

export const channelSectionPlaylists = async ({
	channelId,
	playlistId,
}: {
	channelId: string
	playlistId: string[] | null | undefined
}) => {
	try {
		const data = await axiosAPI({
			method: 'GET',
			url: '/playlists',
			params: {
				part: 'contentDetails,id,snippet',
				channelId: channelId,
				id: playlistId,
			},
		})
		return data.data
	} catch (error) {
		console.log(error)
	}
}

export const channelSectionPlaylistItems = async ({
	channelId,
	playlistId,
}: {
	channelId: string
	playlistId: string[] | null | undefined
}) => {
	try {
		const data = await axiosAPI({
			method: 'GET',
			url: '/playlistItems',
			params: {
				part: 'contentDetails,id,snippet',
				channelId: channelId,
				id: playlistId,
			},
		})
		return data.data
	} catch (error) {
		console.log(error)
	}
}