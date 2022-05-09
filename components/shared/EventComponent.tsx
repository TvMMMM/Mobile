import { Box, Text, Image, IconButton, Icon } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../../helpers/formatDate";

interface Props {
  event: any;
  editable?: boolean;
  isSaved?: boolean;
  canSave?: boolean;
}

const EventComponent: React.FC<Props> = ({ event, editable, canSave }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EventDetailScreen", { id: event.id })}
    >
      <Box
        my={2}
        rounded="lg"
        borderColor="coolGray.200"
        borderWidth="1"
        bg="blueGray.50"
        flexDirection="row"
        w="100%"
        p={3}
        // alignItems="center"
      >
        <Image
          source={{
            uri: event.image,
          }}
          alt="Alternate Text"
          size="lg"
          rounded="lg"
          mr={5}
        />
        <Box width="65%">
          <Text fontSize="xl" fontWeight={500} mb={1}>
            {event.title}
          </Text>
          <Box flexDirection="row" alignItems="center">
            <MaterialCommunityIcons
              name="map-marker"
              size={20}
              color="#0995E7"
            />
            <Text ml={2}>{event.location}</Text>
          </Box>
          <Box mt={2} flexDirection="row" alignItems="center">
            <Entypo name="calendar" size={20} color="#0995E7" />

            <Text ml={2}>{formatDate(event.date)}</Text>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default EventComponent;
