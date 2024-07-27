// src/components/RecommendationCard.js
import React from "react";
import { Box, Text, Image, Stack, Avatar } from "@chakra-ui/react";

const RecommendationCard = ({ recommendation }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      overflow="hidden"
      boxShadow="md"
      p={4}
      m={2}
      bg="white"
    >
      <Box mb={2}>
        {[...Array(recommendation.Rating)].map((_, index) => (
          <Box as="span" color="yellow.400" key={index}>
            &#9733;
          </Box>
        ))}
      </Box>
      <Text fontWeight="bold" fontSize="lg">
        {recommendation.Heading}
      </Text>
      <Text mt={2}>{recommendation.Description}</Text>
      <Stack mt={4} direction="row" align="center">
        <Avatar size="xl" src={recommendation.photo} />
        <Stack direction="column" spacing={0} fontSize="sm">
          <Text fontWeight="bold">{recommendation.name}</Text>
          <Text color="gray.500">{recommendation.designation}</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RecommendationCard;
