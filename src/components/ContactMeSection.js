import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {


  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    onSubmit: (values) => {
    submit("",values)

  }
  ,
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      type: Yup.string().required("Type of enquiry is required"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Comment is required"),

    }),
  });

    // Show an alert when the form is submitted successfully
    useEffect(() => {
      if (response) {
        onOpen(response.type, response.message);
        // Reset the form if the response is successful
        if (response.type === "success")
          formik.resetForm();
      }
    }, [response]);
  

return (
  <FullScreenSection
    isDarkBackground
    backgroundColor="#512DA8"
    py={16}
    spacing={8}
    id="contactme-section"
  >
    <VStack w="1024px" p={12} alignItems="flex-start">
      {/* <Heading as="h1" id="contactme-section"> */}
      <Heading as="h1" >
        Contact me
      </Heading>
      <Box p={6} rounded="md" w="100%">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            {/* Show the error messages for each field when the field is touched and the validation fails */}
            {/* <FormControl isInvalid={false}> */}
            <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
              <FormLabel htmlFor="firstName">Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                color='black' 
                bg="white"

                {...formik.getFieldProps("firstName")} // Make the Input components from Chakra UI controlled components

                // onChange={formik.handleChange}
                // value={formik.values.firstName}
              />
               {/* Show the error messages for each field when the field is touched and the validation fails */}
              {/* <FormErrorMessage></FormErrorMessage> */}
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            {/* <FormControl isInvalid={false}> */}
            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                color='black'
                 bg="white"
                 {...formik.getFieldProps("email")} // Make the Input components from Chakra UI controlled components
                //  onChange={formik.handleChange}
                //  value={formik.values.email}
              />
               {/* Show the error messages for each field when the field is touched and the validation fails */}
               <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              {/* <FormErrorMessage></FormErrorMessage> */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="type">Type of enquiry</FormLabel>
              <Select id="type" name="type" color='black' bg="white"
                  {...formik.getFieldProps("type")} // Make the Input components from Chakra UI controlled components
               
              //  onChange={formik.handleChange}
              //  value={formik.values.type}
               >
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">
                  Open source consultancy session
                </option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
             {/* Show the error messages for each field when the field is touched and the validation fails */}
             <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
            {/* <FormControl isInvalid={false}> */}
              <FormLabel htmlFor="comment">Your message</FormLabel>
              <Textarea
                id="comment"
                name="comment"
                height={250}
                color='black' 
                bg="white"
                {...formik.getFieldProps("comment")}
                // onChange={formik.handleChange}
                // value={formik.values.comment}
              />
               {/* Show the error messages for each field when the field is touched and the validation fails */}
               <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              {/* <FormErrorMessage></FormErrorMessage> */}
            </FormControl>
                    {/* Show a loading indicator */}
            <Button type="submit" colorScheme="purple" width="full"
            isLoading={isLoading}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  </FullScreenSection>
);
};
export default LandingSection;
