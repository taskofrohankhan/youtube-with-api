export const durationConvertor = (duration: string) => {
	const convertedDuration = duration?.toLowerCase()

	if (!convertedDuration?.includes('m')) {
		return convertedDuration?.replace('pt', '')
	}

	return convertedDuration
		?.replace('pt', '')
		?.replace('h', ':')
		?.replace('m', ':')
		?.replace('s', '')
}
