import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>

      <Box bg='white' borderRadius="20px" color={"black"}>

        <Image
          src={imageSrc}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <VStack
          padding={10}
        >
          <Heading
          textAlign="left"
          >
            {title}
          </Heading>
          <Text>{description}</Text>
        </VStack>
        <HStack 
        paddingLeft={10} 
        paddingBottom={10} 
        >
          <Heading size="1x1">
            See More
          </Heading>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </HStack>

      </Box>

    </>
  )



};

export default Card;
