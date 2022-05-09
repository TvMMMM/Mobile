import {
  Box,
  Text,
  VStack,
  Button,
  View,
  Input,
  ScrollView,
  Flex,
  TextArea,
  Spinner,
} from "native-base";
import React from "react";
import { Formik } from "formik";

import { ActivitySchemaValidation } from "../helpers/validation";
import Colors from "../constants/Colors";
import { negativeToast, positiveToast } from "../helpers/toaster";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  AllEventsDocument,
  useEventDetailQuery,
  useUpdateEventMutation,
} from "../generated/hooks";
import { useRoute } from "@react-navigation/native";

const UpdateScreen = () => {
  const route = useRoute();
  const { id }: any = route.params;
  const { data, loading } = useEventDetailQuery({
    variables: {
      id,
    },
    fetchPolicy: "network-only",
  });

  const event = data?.event[0];

  const [updateEvent] = useUpdateEventMutation();

  const handleSubmit = async (values: any, resetForm: any) => {
    try {
      await updateEvent({
        variables: {
          id,
          object: {
            title: values.title,
            image: values.image,
            location: values.location,
            describe: values.describe,
            reporter: values.reporter,
            date: values.date,
          },
        },
        refetchQueries: [{ query: AllEventsDocument }],
        fetchPolicy: "no-cache",
      });
      resetForm();

      positiveToast("Post Successful");
    } catch (error) {
      negativeToast("Fail");
      console.error(error);
    }
  };

  if (loading)
    return (
      <Box>
        <Spinner color="primary.500" />
      </Box>
    );
  return (
    <ScrollView>
      <VStack flex={1} mt={20} mx={10}>
        <Box>
          <Text
            mb={5}
            fontSize="3xl"
            fontWeight="bold"
            color={Colors.primary.text}
          >
            Update event ⚡️
          </Text>
        </Box>
        <Box>
          <Formik
            initialValues={{
              title: event?.title ? event.title : "",
              describe: event?.describe ? event.describe : "",
              image: event?.image ? event.image : "",
              date: event?.date ? event.date : new Date(),
              location: event?.location ? event.location : "",
              reporter: event?.reporter ? event.reporter : "",
            }}
            onSubmit={(values) => {
              console.log("values", values);
            }}
            validationSchema={ActivitySchemaValidation}
          >
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              resetForm,
              isValid, 
              setFieldValue,
            }) => (
              <View>
                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.title}
                  onChangeText={handleChange("title")}
                  onBlur={() => setFieldTouched("title")}
                  placeholder="Title"
                  isInvalid={touched.title && !!errors.title}
                />
                {touched.title && errors.title && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.title}
                  </Text>
                )}

                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.location}
                  onChangeText={handleChange("location")}
                  onBlur={() => setFieldTouched("location")}
                  placeholder="Location"
                  isInvalid={touched.location && !!errors.location}
                />

                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.image}
                  onChangeText={handleChange("image")}
                  onBlur={() => setFieldTouched("image")}
                  placeholder="Image"
                  isInvalid={touched.image && !!errors.image}
                />
                {touched.image && errors.image && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.image}
                  </Text>
                )}

                <Input
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.reporter}
                  onChangeText={handleChange("reporter")}
                  onBlur={() => setFieldTouched("reporter")}
                  placeholder="Reporter's name"
                  isInvalid={touched.reporter && !!errors.reporter}
                />
                {touched.reporter && errors.reporter && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.reporter}
                  </Text>
                )}

                <Flex>
                  <View mt={5}>
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date(values.date)}
                      mode="date"
                      is24Hour={true}
                      onChange={(event: any, selectedDate: any) =>
                        setFieldValue("date", selectedDate)
                      }
                    />
                  </View>
                  <View mt={5}>
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date(values.date)}
                      mode="time"
                      is24Hour={true}
                      onChange={(event: any, selectedDate: any) =>
                        setFieldValue("date", selectedDate)
                      }
                    />
                  </View>
                </Flex>
                <TextArea
                  mt={5}
                  size="xl"
                  _focus={{ borderColor: Colors.primary.text }}
                  value={values.describe}
                  onChangeText={handleChange("describe")}
                  onBlur={() => setFieldTouched("describe")}
                  placeholder="Describe"
                  isInvalid={touched.describe && !!errors.describe}
                />

                <Button
                  mt={5}
                  color="#3740FE"
                  onPress={() => handleSubmit(values, resetForm)}
                  isDisabled={!isValid}
                >
                  Update
                </Button>
              </View>
            )}
          </Formik>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default UpdateScreen;
