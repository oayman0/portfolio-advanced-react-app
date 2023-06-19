import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const greeting = "Hello, I am Pete!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    // marginTop="65px"
  >
    <VStack >
<Avatar size='3xl' name='Segun Adebayo' src='https://i.pravatar.cc/150?img=7' p="20px" />
<Heading size='1x1'> {greeting}</Heading>
<Heading size='2xl' p="20px">{bio1}</Heading> 
<Heading >{bio2}</Heading> 
    </VStack>

  </FullScreenSection>
); 

export default LandingSection;
