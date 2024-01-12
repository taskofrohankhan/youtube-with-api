export interface ResPlaylistItems {
	kind: string
	etag: string
	nextPageToken: string
	items?: ItemsEntity[] | null
	pageInfo: PageInfo
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
	playlistId: string
	position: number
	resourceId: ResourceId
	videoOwnerChannelTitle: string
	videoOwnerChannelId: string
}
export interface Thumbnails {
	default: DefaultOrMediumOrHighOrStandardOrMaxres
	medium: DefaultOrMediumOrHighOrStandardOrMaxres
	high: DefaultOrMediumOrHighOrStandardOrMaxres
	standard: DefaultOrMediumOrHighOrStandardOrMaxres
	maxres?: DefaultOrMediumOrHighOrStandardOrMaxres1 | null
}
export interface DefaultOrMediumOrHighOrStandardOrMaxres {
	url: string
	width: number
	height: number
}
export interface DefaultOrMediumOrHighOrStandardOrMaxres1 {
	url: string
	width: number
	height: number
}
export interface ResourceId {
	kind: string
	videoId: string
}
export interface ContentDetails {
	videoId: string
	videoPublishedAt: string
}
export interface PageInfo {
	totalResults: number
	resultsPerPage: number
}
