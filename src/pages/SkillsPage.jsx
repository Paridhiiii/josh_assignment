// src/pages/SkillsPage.js
import React from "react";
import { Box, Container, Grid, Heading, Text, Button } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import SkillCard from "../components/SkillCard";

const SkillsPage = () => {
  const { data: skills, loading, error } = useFetch("skills");

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading skills</Text>;

  return (
    <Container maxW="container.xl" py={8}>
      <Box textAlign="center" mb={8}>
        <Heading>Skills & Languages</Heading>
        <Text mt={4}>
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
          Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </Text>
      </Box>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {skills.map(({ id, domain, tech, levels }) => (
          <SkillCard key={id} domain={domain} tech={tech} levels={levels} />
        ))}
      </Grid>
      <Box textAlign="center" mt={8}>
        <Button colorScheme="yellow">Add Skill</Button>
      </Box>
    </Container>
  );
};

export default SkillsPage;
