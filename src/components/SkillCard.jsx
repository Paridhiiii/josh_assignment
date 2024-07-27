// src/components/SkillCard.js
import React from "react";
import { Box, Heading, Progress, Text, VStack, Flex } from "@chakra-ui/react";

const SkillCard = ({ domain, tech, levels }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={6}
      bg="white"
    >
      <Heading size="md" mb={4} fontWeight="bold" fontFamily={"interbold"}>
        {domain}
      </Heading>
      <VStack spacing={4} align="stretch">
        {tech.map((technology, index) => (
          <Box key={technology}>
            <Flex align="center" justify="space-between">
              <Text>{technology}</Text>
              <Text>{levels[index]}%</Text>
            </Flex>
            <Progress value={levels[index]} colorScheme="yellow" size="xs" />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default SkillCard;
