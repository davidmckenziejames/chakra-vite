import {
    Button,
    Box,
    Flex,
    Heading,
    Text,
   Stack,
  } from "@chakra-ui/react";
  import {
    FaArrowRight,
    FaGoogle,
    FaMagic,
    FaEye,
    FaEyeSlash,
  } from "react-icons/fa";
  import { useState } from "react";
  
  export default function AuthFooterBar() {
  
    return (
        <Box
          position="absolute"
          bottom="0"
          width="100%"
          bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
          py="20px"
          borderTop="1px solid white
          "
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Heading color="#fff">Are you a DJ?</Heading>
            <Text>You're in the wrong place...</Text>
            <Button
              color="white"
              bg="#be04f1"
              _hover={{ color: "#be04f1", bg: "#ffffff" }}
            >
              SIGN IN HERE
            </Button>
          </Stack>
        </Box>
    );
  }
  