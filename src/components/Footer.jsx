import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import companyLogo from "../assets/company.svg";
import facebookLogo from "../assets/Facebook.svg";
import instagramLogo from "../assets/Instagram.svg";
import linkedinLogo from "../assets/Linkedin.svg";
import loren from "../assets/loren.svg";
import lspm from "../assets/lspm.svg";
import dorel from "../assets/dorel.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <Box py={10} position="relative">
      <Container maxW="container.xl">
        <Stack spacing={6} align="center" position="relative">
          {/* Company and Logo */}
          <Image src={companyLogo} alt="Company Logo" />
          <Box position="relative" left="-650">
            <Image src={logo} alt="Logo" />
          </Box>
        </Stack>

        <Grid templateColumns="repeat(4, 1fr)" gap={60} mt={6}>
          {/* Ratings */}
          <GridItem>
            <Stack spacing={6}>
              <Box textAlign="center">
                <Image src={loren} alt="Rating Logo" />
                <Text>4.5/5 On Lorem</Text>
              </Box>
              <Box textAlign="center">
                <Image src={lspm} alt="Rating Logo" />
                <Text>9/10 On Ipsum</Text>
              </Box>
              <Box textAlign="center">
                <Image src={dorel} alt="Rating Logo" />
                <Text>4.5/5 On Dorel</Text>
              </Box>
            </Stack>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <VStack align="start">
              <Heading size="md" mb={2}>
                Quick Links
              </Heading>
              <Link href="#">Home</Link>
              <Link href="#">Skills</Link>
              <Link href="#">Education</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Recommendations</Link>
            </VStack>
          </GridItem>

          {/* Portfolio */}
          <GridItem>
            <VStack align="start">
              <Heading size="md" mb={2}>
                Portfolio
              </Heading>
              <Link href="#">Frontend Development</Link>
              <Link href="#">Backend Development</Link>
              <Link href="#">Website Design</Link>
              <Link href="#">Machine Learning</Link>
              <Link href="#">Problem Solving & DSA</Link>
            </VStack>
          </GridItem>

          {/* Connect */}
          <GridItem>
            <VStack align="start">
              <Heading size="md" mb={2}>
                Connect
              </Heading>
              <Link href="#">
                <Image src={linkedinLogo} alt="LinkedIn" />
              </Link>
              <Link href="#">
                <Image src={instagramLogo} alt="Instagram" />
              </Link>
              <Link href="#">
                <Image src={facebookLogo} alt="Facebook" />
              </Link>
            </VStack>
          </GridItem>
        </Grid>

        <Flex mt={10} justify="center">
          <Text>© 2024 Copyright, All Right Reserved</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
