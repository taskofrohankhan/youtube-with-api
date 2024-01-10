import { durationConvertor } from '@/functions/convertors'

interface DurationConvertorProps {
	duration: string
}

export const DurationConvertor: React.FunctionComponent<
	DurationConvertorProps
> = ({ duration }) => {
	const durationConverted = durationConvertor(duration)
	return <>{durationConverted}</>
}
