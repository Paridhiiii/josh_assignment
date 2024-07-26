// src/components/CustomSlider.js
import React, { useState } from "react";
import { Box, Flex, HStack, Circle, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import RecommendationCard from "./RecommendationCard";

const CustomSlider = ({ recommendations }) => {
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(recommendations.length / itemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getVisibleRecommendations = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return recommendations.slice(startIndex, startIndex + itemsPerSlide);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <Box
      width="full"
      overflow="hidden"
      position="relative"
      _hover={{
        ".arrow-left, .arrow-right, .dots-container": {
          opacity: 1,
          visibility: "visible",
        },
      }}
    >
      <IconButton
        aria-label="Previous Slide"
        icon={<ArrowLeftIcon />}
        className="arrow-left"
        onClick={prevSlide}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex="1"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        size="lg"
        opacity={0}
        visibility="hidden"
        transition="opacity 0.3s ease, visibility 0.3s ease"
        _hover={{ bg: "gray.100" }}
      />
      <Flex
        direction="row"
        align="center"
        justify="center"
        width="full"
        overflow="hidden"
        position="relative"
      >
        {getVisibleRecommendations().map((recommendation, index) => (
          <RecommendationCard key={index} recommendation={recommendation} />
        ))}
      </Flex>
      <IconButton
        aria-label="Next Slide"
        icon={<ArrowRightIcon />}
        className="arrow-right"
        onClick={nextSlide}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex="1"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        size="lg"
        opacity={0}
        visibility="hidden"
        transition="opacity 0.3s ease, visibility 0.3s ease"
        _hover={{ bg: "gray.100" }}
      />
      <Flex
        className="dots-container"
        justify="center"
        mt={4}
        mb={2}
        opacity={0}
        visibility="hidden"
        transition="opacity 0.3s ease, visibility 0.3s ease"
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
      >
        <HStack spacing={2}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <Circle
              key={index}
              size="10px"
              bg={index === currentSlide ? "orange.400" : "gray.400"}
              onClick={() => setCurrentSlide(index)}
              cursor="pointer"
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default CustomSlider;
