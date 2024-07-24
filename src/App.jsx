// src/App.js
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
    </ChakraProvider>
  );
};

export default App;
