import { CHANNELS_KEYS } from "@/constants/queryKeys";
import { channels } from "@/functions/fetchers";
import { ItemsEntity, ResChannel } from "@/types/ResChannel";
import { useQuery } from "@tanstack/react-query";
import { StatisticConvertor } from "../convertors/StatisticConvertor";

interface WatchSubscribersProps {
  channelId: string
}
 
export const WatchSubscribers: React.FunctionComponent<WatchSubscribersProps> = ({channelId}) => {
  const { isLoading, data: resChannel } = useQuery<ResChannel>({
		queryKey: [CHANNELS_KEYS.CHANNEL_SUBSCRIBERS, channelId],
		queryFn: () => channels({ part: 'statistics', channelId }),
	})
  return (
		<>
			{!isLoading && (
				<>
					{resChannel?.items?.map((item: ItemsEntity) => (
						<h6 key={item.id}>
							<StatisticConvertor statistic={item.statistics.subscriberCount} />{' '}
							subscribers
						</h6>
					))}
				</>
			)}
		</>
	)
}