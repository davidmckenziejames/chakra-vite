import { Box, Flex, Heading, Text, Highlight } from "@chakra-ui/react";
import Avatars from "./Avatars";
import SignUpCard from "../Forms/SignUpCard";

export default function Hero() {
  return (
    <Box
      w="100%"
      backgroundImage="url(https://djfan.ams3.cdn.digitaloceanspaces.com/2023/07/bg-dj.jpg)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: "0px", md: "20px" }}
      px={{ base: "10px", md: "20px" }}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        maxW={{ base: "100%", md: "1200px" }}
        flex={1}
        pt="30px"
        pb="50px"
        justifyContent="space-evenly"
      >
        <Flex
          id="left"
          flexDirection="column"
          w={{ base: "100%", lg: "50%" }}
          mr={{ base: "0", lg: "50px" }}
          gap="20px"
          px={{ base: "10px", lg: "20px" }}
          mt="20px"
          mb="20px"
        >
          <Heading
            pr={{ base: "0", md: "20px" }}
            color="white"
            fontSize={{ base: "30px", md: "40px" }}
            lineHeight="1.1em"
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
          >
            Everything from your favourute DJs in one place. All mixes, tracks,
            and videos ready to stream. Unlock their hidden playlists, receive
            exclusive invites, and even chat directly.
          </Text>

          <Avatars />
        </Flex>
        <Box mx={{ base: "10px", md: "0" }}>
          <SignUpCard />
        </Box>
      </Flex>
    </Box>
  );
}
