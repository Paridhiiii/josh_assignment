import { Box, Heading, Text, Container, Center } from "@chakra-ui/react";
import CustomSlider from "../components/CustomSlider";
import useFetch from "../hooks/useFetch";

const Recommendations = () => {
  const { data: recommendations, loading, error } = useFetch("recommendations");

  if (loading)
    return (
      <Text textAlign="center" mt={8}>
        Loading...
      </Text>
    );
  if (error)
    return (
      <Text textAlign="center" mt={8}>
        Error loading recommendations
      </Text>
    );

  return (
    <Container
      maxW="container.2xl"
      mt={8}
      p={4}
      borderRadius="md"
      boxShadow="md"
    >
      <Center mb={6}>
        <Heading size="xl">Recommendations</Heading>
      </Center>
      <Text textAlign="center" mb={8} fontSize="lg" color="gray.700">
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
        Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
      </Text>
      <Box>
        <CustomSlider recommendations={recommendations} />
      </Box>
    </Container>
  );
};

export default Recommendations;
