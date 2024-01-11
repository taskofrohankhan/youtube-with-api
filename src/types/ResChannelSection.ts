export interface ResChannelSection {
	kind: string
	etag: string
	items?: ItemsEntity[] | null
}
export interface ItemsEntity {
	kind: string
	etag: string
	id: string
	snippet: Snippet
	contentDetails?: ContentDetails | null
}
export interface Snippet {
	type: string
	channelId: string
	position: number
}
export interface ContentDetails {
	playlists?: string[] | null
}
