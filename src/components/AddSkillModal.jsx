import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { postSkill } from "../api/backendApi";

const AddSkillModal = ({ isOpen, onClose, onSkillAdded }) => {
  const [domain, setDomain] = useState("");
  const [skills, setSkills] = useState(Array(4).fill(""));
  const [proficiencies, setProficiencies] = useState(Array(4).fill(""));

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleProficiencyChange = (index, value) => {
    const newProficiencies = [...proficiencies];
    newProficiencies[index] = value;
    setProficiencies(newProficiencies);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Filter out empty values and create the skill data object
    const filteredSkills = skills.filter((skill) => skill.trim() !== "");
    const filteredProficiencies = proficiencies.filter(
      (proficiency) => proficiency.trim() !== ""
    );

    // Ensure skills and proficiencies are the same length
    if (
      domain.trim() === "" ||
      filteredSkills.length === 0 ||
      filteredSkills.length !== filteredProficiencies.length
    ) {
      console.error(
        "Domain is required and skills/proficiencies must be of equal length."
      );
      return; // Prevent form submission
    }

    const skillData = {
      id: Date.now(), // Assuming unique ID generation
      domain: domain.trim(),
      tech: filteredSkills,
      levels: filteredProficiencies,
    };

    try {
      await postSkill(skillData);
      onSkillAdded(); // Trigger the parent to refresh skills
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent bg="white">
        <ModalHeader
          fontWeight="bold"
          textAlign="center"
          fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
        >
          Add Skill
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl id="domain" mb={4} isRequired>
              <FormLabel>Domain</FormLabel>
              <Input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Front End Developer"
                bg="gray.100"
              />
            </FormControl>
            <Box mb={4}>
              <Grid templateColumns="1fr 1fr" gap={4}>
                <Box>
                  <FormLabel mb={2}>Skill</FormLabel>
                  {skills.map((skill, index) => (
                    <Input
                      key={index}
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      mb={2}
                      bg="gray.100"
                    />
                  ))}
                </Box>
                <Box>
                  <FormLabel mb={2}>Proficiency</FormLabel>
                  {proficiencies.map((proficiency, index) => (
                    <Input
                      key={index}
                      value={proficiency}
                      onChange={(e) =>
                        handleProficiencyChange(index, e.target.value)
                      }
                      mb={2}
                      bg="gray.100"
                    />
                  ))}
                </Box>
              </Grid>
            </Box>
            <Box textAlign="right">
              <Button type="submit" colorScheme="yellow" color="black" mr={3}>
                Add Skill
              </Button>
              <Button variant="outline" colorScheme="red" onClick={onClose}>
                Cancel
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddSkillModal;
