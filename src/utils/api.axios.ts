import axios from 'axios'
import { YOUTUBE_API_KEY_ONE } from '@/constants/apiKeys'

export const axiosAPI = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	timeout: 1000,
	params: {
		key: YOUTUBE_API_KEY_ONE,
	},
})
