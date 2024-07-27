import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Heading, Text, Button } from "@chakra-ui/react";
import SkillCard from "../components/SkillCard";
import AddSkillModal from "../components/AddSkillModal";
import { fetchSkills } from "../api/backendApi";

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const loadSkills = async () => {
    try {
      const data = await fetchSkills();
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    loadSkills(); // Fetch skills on component mount
  }, []);

  const handleAddSkill = async () => {
    await loadSkills(); // Re-fetch skills after adding a new one
  };

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
        <Button colorScheme="yellow" onClick={() => setModalOpen(true)}>
          Add Skill
        </Button>
      </Box>

      <AddSkillModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSkillAdded={handleAddSkill} // Pass function to handle adding skill
      />
    </Container>
  );
};

export default SkillsPage;
