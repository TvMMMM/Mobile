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
} from "native-base";
import React from "react";
import { Formik } from "formik";

import { ActivitySchemaValidation } from "../helpers/validation";
import Colors from "../constants/Colors";
import { negativeToast, positiveToast } from "../helpers/toaster";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AllEventsDocument, usePostEventMutation } from "../generated/hooks";

const UploadScreen = () => {
  const [postEvent] = usePostEventMutation();

  const handleSubmit = async (values: any, resetForm: any) => {
    try {
      await postEvent({
        variables: {
          object: {
            title: values.title,
            image: values.image,
            location: values.location,
            describe: values.describe,
            reporter: values.reporter,
            date: values.date.toISOString(),
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
            Upload ⚡️
          </Text>
        </Box>
        <Box>
          <Formik
            initialValues={{
              title: "",
              describe: "",
              image: "",
              date: new Date(),
              location: "",
              reporter: "",
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
                      value={values.date}
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
                      value={values.date}
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
                />

                <Button
                  mt={5}
                  color="#3740FE"
                  onPress={() => handleSubmit(values, resetForm)}
                  isDisabled={!isValid} 
                >
                  Create
                </Button>
              </View>
            )}
          </Formik>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default UploadScreen;
