import { Box, SimpleGrid, Heading, Text, Stack } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const { data: projects, loading, error } = useFetch("projects");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box p={5}>
      <Stack spacing={4} align="center" mb={8}>
        <Heading as="h1" size="2xl">
          Projects
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
          Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsPage;
