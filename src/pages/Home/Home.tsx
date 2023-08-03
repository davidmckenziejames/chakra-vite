import {
  Box,
  Flex,
  Link,
  Heading,
  Avatar,
  AvatarBadge,
  HStack,
  Badge,
} from "@chakra-ui/react";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Posts from "./Sections/Posts";
import About from "./Sections/About";
import Footer from "./Sections/Footer";
import MySubscriptions from "./MySubscriptions";
import { BiSolidAddToQueue, BiSolidCrown } from "react-icons/bi";

export default function Home() {
  return (
    <Box overflow="hidden">
      <Header />
      <Hero />
      <MySubscriptions />
      <Features />
      <Posts />
      <About />
      <Footer />
    </Box>
  );
}
