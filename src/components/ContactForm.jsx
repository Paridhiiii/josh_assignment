import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { postUser } from "../api/backendApi";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      console.error("All fields are required.");
      return;
    }

    const userData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    try {
      await postUser(userData);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <Box w="full" maxW="xl" mx="auto" p={6}>
      <Heading as="h3" size="lg" mb={4} textAlign="left">
        Leave Your Info
      </Heading>
      <Box p={6} borderWidth={1} boxShadow="md" bg="white" boxSize="xl">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg="gray.200"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="gray.200"
              />
            </FormControl>
            <FormControl id="subject" isRequired>
              <FormLabel>Subject</FormLabel>
              <Input
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                bg="gray.200"
              />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                bg="gray.200"
              />
            </FormControl>
            <Button type="submit" colorScheme="yellow" alignSelf="flex-start">
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
