import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import PostCardImage from "../Posts/PostCardImage";

export default function Posts() {
  return (
    <Box w="100%" justifyContent="center">
      <Center bg="white" py="50px">
        <Flex
          flexDir="column"
          w={{ base: "90%", md: "500px" }}
          align="center"
          gap="30px"
        >
          <Heading pb="10px">Latest Featured Posts</Heading>
          <PostCardImage />
          <PostCardImage />
          <PostCardImage />
        </Flex>
      </Center>
    </Box>
  );
}
