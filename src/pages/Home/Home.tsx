import { Box } from "@chakra-ui/react";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Posts from "./Sections/Posts";
import Footer from "./Sections/Footer";

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <Features />
      <Posts />
      <Footer />
    </Box>
  );
}
