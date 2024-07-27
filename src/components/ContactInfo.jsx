import {
  Box,
  Text,
  Heading,
  VStack,
  Center,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaGlobe, FaEnvelope, FaMobile } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Box w="full" maxW="xl" mx="auto" p={6}>
      <Heading as="h3" size="lg" mb={4} textAlign="left">
        Contact Information
      </Heading>
      <VStack spacing={4} align="stretch">
        <Box p={6} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
          <Center>
            <Box
              borderRadius="full"
              bg="yellow.300"
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <Icon as={FaGlobe} color="yellow.250" />
            </Box>
          </Center>
          <VStack spacing={1} align="stretch">
            <HStack w="full" justify="space-between">
              <Text fontWeight="bold">Country:</Text>
              <Text>Bangladesh</Text>
            </HStack>
            <HStack w="full" justify="space-between">
              <Text fontWeight="bold">City:</Text>
              <Text>Dhaka</Text>
            </HStack>
            <HStack w="full" justify="space-between">
              <Text fontWeight="bold">Street:</Text>
              <Text>Some Street</Text>
            </HStack>
          </VStack>
        </Box>
        <Box p={6} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
          <Center>
            <Box
              borderRadius="full"
              bg="yellow.300"
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <Icon as={FaEnvelope} color="yellow.250" />
            </Box>
          </Center>
          <VStack spacing={1} align="stretch">
            <HStack w="full" justify="space-between">
              <Text fontWeight="bold">Email:</Text>
              <Text>contact@example.com</Text>
            </HStack>
            <HStack w="full" justify="space-between">
              <Text fontWeight="bold">Skype:</Text>
              <Text>paridhi</Text>
            </HStack>
            <HStack w="full" justify="space-between">
              <Text fontWeight="bold">Telegram:</Text>
              <Text>Paradhi</Text>
            </HStack>
          </VStack>
        </Box>
        <Box p={6} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
          <Center>
            <Box
              borderRadius="full"
              bg="yellow.300"
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <Icon as={FaMobile} color="yellow.250" />
            </Box>
          </Center>
          <VStack spacing={1} align="stretch">
            <HStack w="full" justify="space-between">
              <Text fontWeight="bold">Support Services:</Text>
              <Text>55545</Text>
            </HStack>
            <HStack w="full" justify="space-between">
              <Text fontWeight="bold">Other:</Text>
              <Text>225511</Text>
            </HStack>
            <HStack w="full" justify="space-between">
              <Text fontWeight="bold">Personal:</Text>
              <Text>124568</Text>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactInfo;
