import { publishedDateConvertor } from '@/functions/convertors'

interface DateDifferenceProps {
	date: string
}

export const DateDifference: React.FunctionComponent<DateDifferenceProps> = ({
	date,
}) => {
	const dateDifference = publishedDateConvertor(date)
	return <span>{dateDifference} ago.</span>
}
