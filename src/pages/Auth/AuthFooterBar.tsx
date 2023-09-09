import { Box, Flex, Heading, Stack, HStack } from "@chakra-ui/react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { keyframes } from "@emotion/react"; // or 'styled-components'
const moveUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
export default function AuthFooterBar() {
  return (
    <Flex
      width={{ base: "100%", md: "350px" }}
      animation={`${moveUp} 1.5s ease-out`}
      position="fixed"
      bottom="0px"
      right={{ base: "unset", md: "0px" }}
      p="0"
      py={{ base: "15px", md: "40px" }}
      bgImage="https://media.djfan.app/images/dj-over.jpg"
      bgSize="cover"
      bgPosition="center"
      textAlign="center"
      borderTop={{ base: "2px solid white", md: "3px solid cyan" }}
      borderRadius={{ base: "10px 10px 0px 0px", md: "10px 0px 0px 0px" }}
      borderLeft={{ base: "2px solid white", md: "3px solid cyan" }}
      borderRight={{ base: "2px solid white", md: "unset" }}
    >
      <Flex
        gap={{ base: "10px", md: "15px" }}
        w="100%"
        justifyContent={{ base: "space-evenly", md: "center" }}
        px="20px"
        alignItems="center"
        flexDirection={{ base: "row", md: "column" }}
      >
        <Box position="absolute" left="8px" top="8px">
          <FaTimes color="#fff" />
        </Box>
        <Heading
          fontSize={{ base: "22px", md: "28px" }}
          color="#fff"
          lineHeight="1em"
        >
          Are you a DJ?
        </Heading>
        <Box
          bg="white"
          borderRadius="5px"
          as="a"
          href="https://creatos.djfan.app/signin"
          target="_blank"
          fontSize="14px"
          lineHeight="1em"
          fontWeight="800"
          color="#111111"
          transition="all 0.3s ease"
          border="2px solid black"
          px="10px"
          display="flex"
          gap="5px"
          alignItems="center"
          alignSelf={"center"}
          height="35px"
          boxShadow=".15rem .15rem 0 #69f2eb"
          _hover={{
            boxShadow: `.15rem .15rem 0 #00ff87`,
            fontWeight: "800",
            border: "2px solid black",
          }}
        >
          SIGN IN HERE <FaArrowRight fontSize="12px" />
        </Box>
      </Flex>
    </Flex>
  );
}
