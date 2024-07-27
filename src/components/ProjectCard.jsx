import "@fontsource/inter"; // Defaults to weight 400
import { Box, Image, Text, Badge, Flex } from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
    >
      <Image src={project.image} alt={project.name} />

      <Box p="6">
        <Box
          mt="2"
          fontWeight="bold"
          as="h4"
          color="black.500"
          fontSize="xl"
          lineHeight="tight"
          isTruncated
          fontFamily="Interbold"
        >
          {project.name}
        </Box>
        <Text mt="2" fontSize="sm" color="gray.600" fontFamily="Inter">
          {project.description}
        </Text>
        <Flex wrap="wrap" mt={2}>
          {project.skills.map((skill) => (
            <Badge
              key={skill}
              borderRadius="full"
              px="2"
              colorScheme="gray"
              mr={2}
              mt={1}
              fontFamily="Inter"
            >
              {skill}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectCard;
