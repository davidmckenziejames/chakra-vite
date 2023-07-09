import { Box, Flex, Heading, Text, Highlight } from "@chakra-ui/react";
import Avatars from "./Avatars";
import SignUpCard from "../Forms/SignUpCard";

export default function Hero() {
  return (
    <Box
      w="100%"
      backgroundImage="url(https://djfan.app/wp-content/uploads/2023/07/bg-dj-1.jpg)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: "0px", md: "20px" }}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        maxW={{ base: "100%", md: "1024px" }}
        pt="30px"
        pb="50px"
        justifyContent="space-between"
        px={{ base: "10px", md: "10px" }}
      >
        <Flex
          id="left"
          flexDirection="column"
          w={{ base: "100%", md: "65%" }}
          gap="20px"
          px={{ base: "10px", md: "0px" }}
          mt="10px"
          mb="20px"
        >
          <Heading
            color="white"
            fontSize={{ base: "30px", md: "48px" }}
            lineHeight="1.1em"
            maxW={{ base: "100%", md: "90%" }}
          >
            We bring creators and fans closer
            <Highlight
              query="together"
              styles={{ pl: "8px", color: "#69f2eb" }}
            >
              together
            </Highlight>
            .
          </Heading>

          <Text
            color="white"
            fontWeight="500"
            fontSize={{ base: "16px", md: "19px" }}
            maxW={{ base: "100%", md: "80%" }}
          >
            Everything from your favourute DJs in one place. All mixes, tracks,
            and videos ready to stream. Unlock their hidden playlists, receive
            exclusive invites, and even chat directly.
          </Text>

          <Avatars />
        </Flex>
        <Flex
          flexDirection="column"
          h="100%"
          w={{ base: "100%", md: "35%" }}
          align="center"
        >
          <SignUpCard />
        </Flex>
      </Flex>
    </Box>
  );
}
