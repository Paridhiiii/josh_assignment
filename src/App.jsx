import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsPage from "./pages/ProjectsPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage"; // Ensure you have this page component
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ChakraProvider>
      <Navbar onPageChange={handlePageChange} />
      <Hero />
      <Box bg="gray.100" minHeight="100vh" p={4}>
        {currentPage === "home" && (
          <>
            <ProjectsPage />
            <RecommendationsPage />
            <ContactPage />
          </>
        )}
        {currentPage === "skills" && <SkillsPage />}
        {currentPage === "education" && <EducationPage />}
        {currentPage === "projects" && <ProjectsPage />}
        {currentPage === "recommendations" && <RecommendationsPage />}
        {currentPage === "contact" && <ContactPage />}
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;
