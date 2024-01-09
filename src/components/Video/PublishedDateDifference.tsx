import { publishedDateConvertor } from '@/functions/convertors'

interface PublishedDateDifferenceProps {
	date: string
}

export const PublishedDateDifference: React.FunctionComponent<PublishedDateDifferenceProps> = ({
	date,
}) => {
	const dateDifference = publishedDateConvertor(date)
	return <span>{dateDifference} ago.</span>
}
