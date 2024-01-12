export interface ResPlaylists {
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
	contentDetails: ContentDetails
}
export interface Snippet {
	publishedAt: string
	channelId: string
	title: string
	description: string
	thumbnails: Thumbnails
	channelTitle: string
	localized: Localized
}
export interface Thumbnails {
	default: DefaultOrMediumOrHighOrStandard
	medium: DefaultOrMediumOrHighOrStandard
	high: DefaultOrMediumOrHighOrStandard
	standard: DefaultOrMediumOrHighOrStandard
}
export interface DefaultOrMediumOrHighOrStandard {
	url: string
	width: number
	height: number
}
export interface Localized {
	title: string
	description: string
}
export interface ContentDetails {
	itemCount: number
}
