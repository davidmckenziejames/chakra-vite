import { Flex } from "@chakra-ui/react";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Posts from "./Sections/Posts";
import Footer from "./Sections/Footer";
import FeatureCards from "./Sections/FeatureCards";
import CTA from "./Sections/CTA";

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Hero />
      <FeatureCards />
      <CTA />
      <Posts />
      <Features />

      <Footer />
    </Flex>
  );
}
