import * as React from "react";
import { FlatList, Text, View } from "native-base";

import { useAllEventsQuery } from "../generated/hooks";
import EventComponent from "./shared/EventComponent";
import StyledSkeleton from "./shared/Skeleton";
import { RefreshControl } from "react-native";

interface Props {
  searchTerm: string;
}

const EventList: React.FC<Props> = ({ searchTerm }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const { data, loading, error, refetch } = useAllEventsQuery({
    variables: {
      where: {
        _and: [
          {
            _or: [
              {
                title: {
                  _ilike: `%${searchTerm}%`,
                },
              },
              {
                location: {
                  _ilike: `%${searchTerm}%`,
                },
              },
            ],
          },
        ],
      },
    },
    fetchPolicy: "network-only",
  });
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    refetch();
  }, []);

  const event = data?.event || [];
  if (loading) {
    return <StyledSkeleton />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      {event.length !== 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={event}
          renderItem={({ item }) => <EventComponent event={item} canSave />}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <Text>Can found event</Text>
      )}
    </View>
  );
};

export default EventList;
