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

export const video = async ({ videoId }: { videoId: string }) => {
	try {
		const data = await axiosAPI({
			method: 'GET',
			url: '/videos',
			params: {
				part: 'snippet,contentDetails,statistics',
				id: videoId,
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

export const playlists = async ({
	playlistId,
}: {
	playlistId: string | undefined
}) => {
	try {
		const data = await axiosAPI({
			method: 'GET',
			url: '/playlists',
			params: {
				part: 'contentDetails,snippet',
				id: playlistId,
			},
		})
		return data.data
	} catch (error) {
		console.log(error)
	}
}

export const playlistItems = async ({
	playlistId,
	pageParam,
}: {
	playlistId: string | undefined
	pageParam: string | undefined
}) => {
	try {
		const data = await axiosAPI({
			method: 'GET',
			url: '/playlistItems',
			params: {
				part: 'contentDetails,snippet',
				playlistId: playlistId,
				pageToken: pageParam,
			},
		})
		return data.data
	} catch (error) {
		console.log(error)
	}
}

export const searchVideoForChannel = async ({
	channelId,
	pageParam
}: {
	channelId: string
	pageParam: string | undefined
}) => {
	try {
		const data = await axiosAPI({
			method: 'GET',
			url: '/search',
			params: {
				part: 'snippet',
				type: 'video',
				channelId: channelId,
				pageToken: pageParam,
			},
		})
		return data.data
	} catch (error) {
		console.log(error)
	}
}