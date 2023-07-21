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
import { BiSolidAddToQueue, BiSolidCrown } from "react-icons/bi";

export default function Home() {
  return (
    <Box overflow="hidden">
      <Header />
      <Hero />
      <Box py="30px" bg="black">
        <Flex flexDirection="column" gap="10px" px="20px" height="50%">
          <Heading color="white" fontSize="16px" fontWeight="600">
            My Subscriptions
          </Heading>
          <Flex
            direction="column"
            gap="10px"
            w="full"
            maxH="250px"
            overflowY="auto"
          >
            <Link to="/profile">
              <HStack mt="5px" gap="10px">
                <Avatar
                  height="30px"
                  width="30px"
                  border="1px solid cyan"
                  src="https://djfan.app/wp-content/uploads/2023/05/6443a7b449572-1.jpeg"
                >
                  <AvatarBadge bg="#69CCA4" borderColor="#69CCA4" />
                </Avatar>

                <Heading color="white" fontSize="14px" fontWeight="600">
                  Richy Ahmed
                </Heading>
                <Badge
                  variant="solid"
                  color="#58faea"
                  bg="unset"
                  border="1px solid #58faea"
                  fontSize="10px"
                >
                  GOLD
                </Badge>
              </HStack>
            </Link>
            <Link to="/profile">
              <HStack mt="5px" gap="10px">
                <Avatar
                  height="30px"
                  width="30px"
                  border="1px solid cyan"
                  src="https://djfan.app/wp-content/uploads/2023/05/6443a7b449572-1.jpeg"
                >
                  <AvatarBadge bg="#69CCA4" borderColor="#69CCA4" />
                </Avatar>

                <Heading color="white" fontSize="14px" fontWeight="600">
                  Richy Ahmed
                </Heading>
                <Badge
                  variant="solid"
                  color="#58faea"
                  bg="unset"
                  border="1px solid #58faea"
                  fontSize="12px"
                  display="flex"
                  alignItems="center"
                  gap="2px"
                >
                  <BiSolidCrown />
                  VIP
                </Badge>
              </HStack>
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Features />
      <Posts />
      <About />
      <Footer />
    </Box>
  );
}
