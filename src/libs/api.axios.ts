import axios from 'axios'
import { YOUTUBE_API_KEY_ONE } from '@/constants/apiKeys'
import { API_BASE_URL } from '@/constants/urls'

export const axiosAPI = axios.create({
	baseURL: API_BASE_URL,
	timeout: 1000,
	params: {
		key: YOUTUBE_API_KEY_ONE,
	},
	responseType: 'json',
})
