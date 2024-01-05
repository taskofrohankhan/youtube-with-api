export interface ResVideos {
	kind: string
	etag: string
	items?: ItemsEntity[] | null
	nextPageToken: string
	pageInfo: PageInfo
}
export interface ItemsEntity {
	kind: string
	etag: string
	id: string
	snippet: Snippet
}
export interface Snippet {
	publishedAt: string
	channelId: string
	title: string
	description: string
	thumbnails: Thumbnails
	channelTitle: string
	tags?: string[] | null
	categoryId: string
	liveBroadcastContent: string
	localized: Localized
}
export interface Thumbnails {
	default: DefaultOrMediumOrHighOrStandardOrMaxres
	medium: DefaultOrMediumOrHighOrStandardOrMaxres
	high: DefaultOrMediumOrHighOrStandardOrMaxres
	standard: DefaultOrMediumOrHighOrStandardOrMaxres
	maxres: DefaultOrMediumOrHighOrStandardOrMaxres
}
export interface DefaultOrMediumOrHighOrStandardOrMaxres {
	url: string
	width: number
	height: number
}
export interface Localized {
	title: string
	description: string
}
export interface PageInfo {
	totalResults: number
	resultsPerPage: number
}
