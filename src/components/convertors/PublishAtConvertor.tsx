import { publishedAtConvertor } from '@/functions/convertors'

interface PublishedAtConvertorProps {
	date: string
}

export const PublishedAtConvertor: React.FunctionComponent<
	PublishedAtConvertorProps
	> = ({ date }) => {
	const publishedAtConverted = publishedAtConvertor(date)
	return <>{publishedAtConverted}</>
}
