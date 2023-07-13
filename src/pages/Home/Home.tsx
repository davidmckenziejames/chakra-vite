import { Box } from "@chakra-ui/react";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Posts from "./Sections/Posts";
import About from "./Sections/About";
import Footer from "./Sections/Footer";

export default function Home() {
  return (
    <Box overflow="hidden">
      <Header />
      <Hero />
      <Features />
      <Posts />
      <About />
      <Footer />
    </Box>
  );
}
