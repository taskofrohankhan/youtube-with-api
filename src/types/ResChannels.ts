export interface ResChannels {
	kind: string
	etag: string
	pageInfo: PageInfo
	items?: ItemsEntity[] | null
}
export interface PageInfo {
	totalResults: number
	resultsPerPage: number
}
export interface ItemsEntity {
	kind: string
	etag: string
	id: string
	snippet: Snippet
}
export interface Snippet {
	title: string
	description: string
	customUrl: string
	publishedAt: string
	thumbnails: Thumbnails
	localized: Localized
	country: string
}
export interface Thumbnails {
	default: DefaultOrMediumOrHigh
	medium: DefaultOrMediumOrHigh
	high: DefaultOrMediumOrHigh
}
export interface DefaultOrMediumOrHigh {
	url: string
	width: number
	height: number
}
export interface Localized {
	title: string
	description: string
}
