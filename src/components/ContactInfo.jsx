// src/components/ContactInfo.js
import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const ContactInfo = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box
        p={4}
        boxSize=""
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        bg="white"
      >
        <Heading as="h4" size="md" mb={2}>
          Country
        </Heading>
        <Text>United States</Text>
      </Box>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
        <Heading as="h4" size="md" mb={2}>
          Email
        </Heading>
        <Text>support@example.com</Text>
      </Box>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
        <Heading as="h4" size="md" mb={2}>
          Support Services
        </Heading>
        <Text>24/7 Support</Text>
      </Box>
    </VStack>
  );
};

export default ContactInfo;
