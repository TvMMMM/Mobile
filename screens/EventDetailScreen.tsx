import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Box,
  Text,
  Image,
  View,
  Input,
  IconButton,
  FlatList,
  Spinner,
  Button,
  Modal,
  Icon,
  ScrollView,
} from "native-base";
import React, { useEffect, useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { negativeToast, positiveToast } from "../helpers/toaster";

import {
  AllEventsDocument,
  useDeleteEventMutation,
  useEventDetailQuery,
} from "../generated/hooks";
import { formatDate } from "../helpers/formatDate";

const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { id }: any = route.params;
  const [showModal, setShowModal] = useState(false);

  const { data, loading } = useEventDetailQuery({
    variables: {
      id,
    },
    fetchPolicy: "network-only",
  });

  const [deleteEvent] = useDeleteEventMutation({
    variables: {
      id,
    },
    refetchQueries: [
      {
        query: AllEventsDocument,
        variables: {
          createdAt: { _is_null: false },
        },
      },
    ],
    fetchPolicy: "no-cache",
  });

  useEffect(() => {}), [data];

  const handleDelete = async () => {
    try {
      await deleteEvent();
      positiveToast("Removed");
      navigation.goBack();
    } catch (err) {
      negativeToast("Removed fail");
      console.error(err);
    }
  };

  const event = data?.event[0];

  if (loading)
    return (
      <Box>
        <Spinner color="primary.500" />
      </Box>
    );
  return (
    <ScrollView h="100%" flex={1}>
      <Image
        w="100%"
        h="40%"
        source={{ uri: event?.image || "https://via.placeholder.com/150" }}
        alt="event pic"
      />
      <View mx={8} my={2}>
        <View flexDirection="row" justifyContent="flex-end" w="100%">
          <Text fontSize="md" fontWeight={400}>
            posted by {event?.reporter}
          </Text>
        </View>
        <View
          mt={2}
          flexDirection="row"
          justifyContent="space-between"
          w="100%"
        >
          <View flexDirection="row" alignItems="center">
            <Text fontSize="xl" fontWeight="bold">
              {event?.title}
            </Text>
            <IconButton
              onPress={() =>
                navigation.navigate("UpdateEventScreen", { id: event.id })
              }
              icon={
                <Icon as={AntDesign} color={"blue.500"} name="edit" size={5} />
              }
            />
          </View>
          <Text fontSize="lg" fontWeight={400}>
            {formatDate(event?.date)}
          </Text>
        </View>
        <View mt={5} flexDirection="row" alignItems="center">
          <MaterialCommunityIcons
            ml={5}
            name="map-marker"
            size={20}
            color="#0995E7"
          />
          <Text fontSize="lg" fontWeight={500}>
            {event?.location}
          </Text>
        </View>
        <View mt={5}>
          <Text fontSize="lg" fontWeight={600}>
            Describe
          </Text>
          <Text fontSize="md" fontWeight={400} textAlign="justify">
            {event?.describe}
          </Text>
        </View>
        <View mt={5} flexDirection="row" justifyContent="flex-end">
          {/* <Button bg="info.600">Update</Button> */}

          <Button onPress={() => setShowModal(true)} bg="red.600">
            Delete post
          </Button>
        </View>
      </View>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>Are you sure want to delete ?</Modal.Header>
          {/* <Modal.Body>
            <Text fontWeight="medium">Sub Total</Text>
          </Modal.Body> */}
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="primary"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                borderColor="red.500"
                variant="outline"
                colorScheme="red"
                // text="red.600"
                // bg="red.600"
                onPress={handleDelete}
              >
                Delete
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </ScrollView>
  );
};

export default EventDetailScreen;
