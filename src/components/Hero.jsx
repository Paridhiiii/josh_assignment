import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import hero from "../assets/hero.svg";

const Hero = () => {
  return (
    <Box bg="white.100" p={8} w="100vw">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        <Box flex="1" pr={{ base: 0, md: 8 }}>
          <Text fontSize="5xl" fontWeight="bold" mb={4}>
            I’m Paridhi Goyal <br />
            <Text as="span" color="yellow.400">
              Frontend Developer
            </Text>
          </Text>
          <Text mb={4}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Et,
            Volutpat Feugiat Placerat Lobortis. Natoque Rutrum Semper Sed
            Suspendisse Nunc Lectus.
          </Text>
          <Button colorScheme="yellow">Hire Me</Button>
        </Box>
        <Image src={hero} alt="Hero Image" boxSize="50vw" />
      </Flex>
    </Box>
  );
};

export default Hero;
