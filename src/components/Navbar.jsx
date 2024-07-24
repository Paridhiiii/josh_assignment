import { Box, Flex, Link, ButtonGroup, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <Box
      bg="white"
      px={4}
      py={8}
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={10}
      w="100vw"
    >
      <Flex h={16} alignItems="center" w="100%" maxW="none" mx="auto">
        <Box p={4}>
          <Image src={logo} alt="Logo" boxSize="150px" />
        </Box>
        <Spacer />
        <ButtonGroup spacing={4}>
          {[
            "Home",
            "Skills",
            "Education",
            "Projects",
            "Recommendations",
            "Contact",
          ].map((link) => (
            <Link
              key={link}
              px={3}
              py={2}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "gray.200" }}
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </Link>
          ))}
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;
