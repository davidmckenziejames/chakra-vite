import {
  Button,
  Image,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaApple, FaArrowRight, FaFacebookF, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <Flex
      w="100%"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      bg="#111111"
    >
      <Stack spacing="4" color="white">
        <Stack
          spacing={{ base: "4", md: "4" }}
          textAlign="center"
          align="center"
          mb="10px"
        >
          <Image
            src="https://djfan.app/wp-content/uploads/2023/07/djfan-logo-white-web.png"
            width="120px"
          />
          <Heading
            px="20px"
            fontSize={useBreakpointValue({ base: "20px", md: "20px" })}
          >
            Log in to your account
          </Heading>
        </Stack>
        <Stack spacing="2">
          <Button
            color="white"
            bg="black"
            _hover={{ color: "#ffffff", bg: "#000000" }}
            border="1px solid #ffffff"
            leftIcon={<FaGoogle />}
            iconSpacing="3"
          >
            Sign in with Google
          </Button>
          <Button
            color="white"
            bg="black"
            _hover={{ color: "#ffffff", bg: "#000000" }}
            border="1px solid #ffffff"
            leftIcon={<FaApple />}
            iconSpacing="3"
          >
            Sign in with Apple
          </Button>
          <Button
            color="white"
            bg="black"
            _hover={{ color: "#ffffff", bg: "#000000" }}
            border="1px solid #ffffff"
            leftIcon={<FaFacebookF />}
            iconSpacing="3"
          >
            Sign in with Facebook
          </Button>
        </Stack>
        <Stack spacing="4">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Sign in with email</FormLabel>
              <Input
                id="email"
                placeholder="e.g. daftpunk@gmail.com"
                type="email"
                fontSize="18px"
                lineHeight="2em"
                _focus={{ border: "2px solid #00f5d4" }}
              />
            </FormControl>
          </Stack>

          <Stack spacing="4">
            <Button
              rightIcon={<FaArrowRight />}
              color="white"
              bg="#be04f1"
              _hover={{ color: "#be04f1", bg: "#ffffff" }}
            >
              Sign in
            </Button>
            <HStack spacing="1" justify="center">
              <Text fontSize="sm" color="muted">
                Don't have an account?
              </Text>
              <Button variant="link" color="#00f5d4" size="sm">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}
