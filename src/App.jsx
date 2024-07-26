// src/App.js
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsPage from "./pages/ProjectsPage";
import RecommendationsPage from "./pages/RecommendationsPage";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Box bg="gray.100" minHeight="100vh" p={4}>
        <ProjectsPage />
        <RecommendationsPage />
      </Box>
    </ChakraProvider>
  );
};

export default App;
