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

export const statisticsConvertor = (statistics: string) => {
	return Number(statistics).toLocaleString('en-US')
}

export const publishedDateConvertor = (date: string) => {
	const timePublished = Date.parse(date)
	const timeNow = Date.now()
	const timeGone = timeNow - timePublished

	const forYear = 365 * 86400 * 1000
	const forMonth = 30 * 86400 * 1000
	const forWeek = 7 * 86400 * 1000
	const forDay = 86400 * 1000
	const forHour = 3600 * 1000
	const forMinute = 60 * 1000
	const forSecond = 10000

	if (timeGone / forYear >= 1) {
		return `${Math.floor(timeGone / forYear)} ${
			timeGone / forYear > 1 ? 'years' : 'year'
		}`
	} else if (timeGone / forMonth >= 1) {
		return `${Math.floor(timeGone / forMonth)} ${
			timeGone / forMonth > 1 ? 'months' : 'month'
		}`
	} else if (timeGone / forWeek >= 1) {
		return `${Math.floor(timeGone / forWeek)} ${
			timeGone / forWeek > 1 ? 'weeks' : 'week'
		}`
	} else if (timeGone / forDay >= 1) {
		return `${Math.floor(timeGone / forDay)} ${
			timeGone / forDay > 1 ? 'days' : 'day'
		}`
	} else if (timeGone / forHour >= 1) {
		return `${Math.floor(timeGone / forHour)} ${
			timeGone / forHour > 1 ? 'hours' : 'hour'
		}`
	} else if (timeGone / forMinute >= 1) {
		return `${Math.floor(timeGone / forMinute)} ${
			timeGone / forMinute > 1 ? 'minutes' : 'minute'
		}`
	} else {
		return `${Math.floor(timeGone / forSecond)} ${
			timeGone / forSecond > 1 ? 'seconds' : 'second'
		}`
	}
}