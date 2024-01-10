import { statisticConvertor } from '@/functions/convertors'

interface StatisticConvertorProps {
	statistic: string
}

export const StatisticConvertor: React.FunctionComponent<
	StatisticConvertorProps
> = ({ statistic }) => {
	const statisticConverted = statisticConvertor(statistic)
	return <>{statisticConverted}</>
}
