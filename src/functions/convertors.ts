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

export const statisticConvertor = (statistics: string) => {
	const number = Number(statistics)
	let formattedNumber
	const units = [
		{ suffix: 'T', startOfSuffix: 1e12 },
		{ suffix: 'B', startOfSuffix: 1e9 },
		{ suffix: 'M', startOfSuffix: 1e6 },
		{ suffix: 'K', startOfSuffix: 1e3 },
		{ suffix: '', startOfSuffix: 1 },
	]

	const unitFound = units.find((unit) => number >= unit.startOfSuffix)

	if (unitFound) {
		formattedNumber =
			(!(unitFound.suffix === 'K' || unitFound.suffix === '')
				? (number / unitFound.startOfSuffix).toFixed(2)
				: (number / unitFound.startOfSuffix).toFixed(0)) + unitFound.suffix
	}

	return formattedNumber
}

export const publishedAtConvertor = (date: string) => {
	const timePublished = Date.parse(date)
	const timeNow = Date.now()
	const timeGone = timeNow - timePublished
	let formattedTimeGone

	const units = [
		{
			suffixPlural: 'years',
			suffixSingular: 'year',
			startOfSuffix: 365 * 86400 * 1000,
		},
		{
			suffixPlural: 'months',
			suffixSingular: 'month',
			startOfSuffix: 30 * 86400 * 1000,
		},
		{
			suffixPlural: 'weeks',
			suffixSingular: 'week',
			startOfSuffix: 7 * 86400 * 1000,
		},
		{
			suffixPlural: 'days',
			suffixSingular: 'day',
			startOfSuffix: 86400 * 1000,
		},
		{
			suffixPlural: 'hours',
			suffixSingular: 'hour',
			startOfSuffix: 3600 * 1000,
		},
		{
			suffixPlural: 'minutes',
			suffixSingular: 'minute',
			startOfSuffix: 60 * 1000,
		},
		{
			suffixPlural: 'seconds',
			suffixSingular: 'second',
			startOfSuffix: 1000,
		},
	]

	const unitFound = units.find((unit) => timeGone >= unit.startOfSuffix)

	if (unitFound) {
		const divTimeGone = (timeGone / unitFound.startOfSuffix).toFixed(0)
		formattedTimeGone =
			Number(divTimeGone) > 1
				? `${divTimeGone} ${unitFound.suffixPlural}`
				: `${divTimeGone} ${unitFound.suffixSingular}`
	}

	return formattedTimeGone
}
