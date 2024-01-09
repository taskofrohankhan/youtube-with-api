export const durationConvertor = (duration: string) => {
	/*
	Expected all duration formats

	'PT10H51M52S'

	'PT10H51M5S'
	'PT10H5M52S'
	'PT1H51M52S'

	'PT1H1M5S'

	'PT1M5S'
	'PT1H5S'
	'PT1H5M'

	'PT1M54S'
	'PT1H54S'
	'PT1H54M'

	'PT10M5S'
	'PT10H5S'
	'PT10H5M'

	'PT10M54S'
	'PT10H54S'
	'PT10H54M'

	'PT1H'
	'PT1M'
	'PT1S'
	*/

	let convertedDuration = duration

	if (/[H]/g.test(convertedDuration)) {
		if (!/[M]/g.test(convertedDuration)) {
			convertedDuration =
				convertedDuration.slice(0, convertedDuration.search(/[H]/g) + 1) +
				'00M' +
				convertedDuration.slice(convertedDuration.search(/[H]/g) + 1)
		}
		if (/\D\d([M])/g.test(convertedDuration)) {
			convertedDuration =
				convertedDuration.slice(0, convertedDuration.search(/\D\d([M])/g) + 1) +
				'0' +
				convertedDuration.slice(convertedDuration.search(/\D\d([M])/g) + 1)
		}
	}

	if (!/[S]/g.test(convertedDuration)) {
		convertedDuration = convertedDuration + '00S'
	}

	if (/\D\d[S]/g.test(convertedDuration)) {
		convertedDuration =
			convertedDuration.slice(0, convertedDuration.search(/\D\d[S]/g) + 1) +
			'0' +
			convertedDuration.slice(convertedDuration.search(/\D\d[S]/g) + 1)
	}

	if (!/[H]/g.test(convertedDuration) && !/[M]/g.test(convertedDuration)) {
		convertedDuration = convertedDuration.replace('PT', '0M')
	}

	return convertedDuration.replace(/[PTS]/g, '').replace(/([H]|[M])/g, ':')
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
