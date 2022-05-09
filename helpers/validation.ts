import * as Yup from "yup";

export const ActivitySchemaValidation = Yup.object({
  title: Yup.string().required("Title is required."),
  // location: Yup.string().required('Location is required.'),
  image: Yup.string().required("Image is required."),
  date: Yup.date().nullable().required("Please select a valid due date"),
  reporter: Yup.string().required("Reporter name is required."),
});
