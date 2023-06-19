
import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}



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
      type: '',
      comment: '',
    },
    onSubmit: (values) => {
    submit("#",values)

  }
  ,
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      type: Yup.string().required("Type of enquiry is required"),
      comment: Yup.string().required("Comment is required"),

    }),
  });

return (
  <FullScreenSection
    isDarkBackground
    backgroundColor="#512DA8"
    py={16}
    spacing={8}
    id="contactme-section"
  >
    <VStack w="1024px" p={12} alignItems="flex-start">
      <Heading as="h1" >
        Contact me
      </Heading>
      <Box p={6} rounded="md" w="100%">
        <form
        //omar
        onSubmit={formik.handleSubmit}
        >
          <VStack spacing={4}>
            <FormControl isInvalid={false}>
              <FormLabel htmlFor="firstName">Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                color='black' 
                bg="white"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                color='black'
                 bg="white"
                 onChange={formik.handleChange}
                 value={formik.values.email}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="type">Type of enquiry</FormLabel>
              <Select id="type" name="type" color='black' bg="white"
               onChange={formik.handleChange}
               value={formik.values.type}
               >
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">
                  Open source consultancy session
                </option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel htmlFor="comment">Your message</FormLabel>
              <Textarea
                id="comment"
                name="comment"
                height={250}
                color='black' 
                bg="white"
                onChange={formik.handleChange}
                value={formik.values.comment}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <Button
             type="submit"
              colorScheme="purple"
               width="full"
               
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





