import {
  Button,
  Box,
  AbsoluteCenter,
  Image,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaGoogle,
  FaMagic,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [emailCreds, setEmailCreds] = useState("");
  const [passwordCreds, setPasswordCreds] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      w="100%"
      minH="100vh"
      pt={{ base: "120px", md: "180px" }}
      justifyContent="center"
      bg="#111111"
      position="relative"
    >
      <Flex
        w="full"
        maxW="1200px"
        gap="10px"
        py={{ base: "20px", md: "30px" }}
        px={{ base: "20px", md: "30px" }}
        pos="absolute"
        justifyContent="flex-end"
        alignItems="center"
        top="0px"
      >
        <Text fontSize="14px" color="#fff">
          New to DJfan?
        </Text>
        <Button
          bg="white"
          borderRadius="5px"
          as="a"
          href="https://auth.djfan.app/api/auth/signup"
          target="_blank"
          fontSize="14px"
          lineHeight="1em"
          fontWeight="800"
          color="#111111"
          transition="all 0.3s ease"
          px="10px"
          height="30px"
          _hover={{
            bg: "#be04f1",
            color: "#fff",
          }}
        >
          SIGN UP
        </Button>
      </Flex>
      <Stack spacing="6" color="white" w={{ base: "80%", md: "unset" }}>
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
            Sign in to your account
          </Heading>
        </Stack>

        <Stack spacing="2">
          <Button
            color="white"
            bg="black"
            _hover={{ color: "#111", bg: "#fff" }}
            border="1px solid #ffffff"
            leftIcon={<FaGoogle />}
            iconSpacing="3"
          >
            Sign in with Google
          </Button>
        </Stack>
        <Box position="relative" mt="5px">
          <Divider />
          <AbsoluteCenter
            fontSize="14px"
            bg="#111111"
            w="60%"
            textAlign={"center"}
          >
            or continue with email
          </AbsoluteCenter>
        </Box>

        <Stack w={{ base: "100%", md: "300px" }}>
          {showPasswordInput ? (
            <Stack spacing="10px">
              <FormControl>
                <FormLabel htmlFor="email-cred" fontSize="14px">
                  Email Address
                </FormLabel>
                <Input
                  mt="0px"
                  name="email-cred"
                  placeholder="e.g. daftpunk@gmail.com"
                  type="email"
                  fontSize="16px"
                  lineHeight="1em"
                  _focus={{ border: "2px solid #00f5d4" }}
                  value={emailCreds}
                  onChange={(e) => setEmailCreds(e.target.value)}
                />
              </FormControl>
              <FormControl pb="0px">
                <FormLabel htmlFor="password-cred" fontSize="14px">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password-cred"
                    placeholder="*********"
                    fontSize="16px"
                    lineHeight="1em"
                    pr="4.5rem"
                    _focus={{ border: "2px solid #00f5d4" }}
                    value={passwordCreds}
                    onChange={(e) => setPasswordCreds(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Box
                      cursor="pointer"
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Box>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                rightIcon={<FaArrowRight />}
                color="white"
                bg="#be04f1"
                _hover={{ color: "#be04f1", bg: "#ffffff" }}
              >
                Sign in
              </Button>
            </Stack>
          ) : (
            <Stack spacing="10px">
              <FormControl>
                <Input
                  id="csrfToken"
                  //defaultValue={csrfToken}
                  hidden
                />
                <FormLabel htmlFor="email" fontWeight="500" fontSize="14px">
                  Email Address
                </FormLabel>
                <Input
                  placeholder="e.g. daftpunk@gmail.com"
                  type="email"
                  fontSize="16px"
                  lineHeight="1em"
                  _focus={{ border: "2px solid #00f5d4" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Button
                rightIcon={<FaArrowRight />}
                color="white"
                bg="#be04f1"
                _hover={{ color: "#be04f1", bg: "#ffffff" }}
                onClick={() => {
                  // signIn("email", { email, csrfToken });
                }}
              >
                Send me a login link
              </Button>
            </Stack>
          )}
          <Flex
            w="100%"
            onClick={() => {
              setShowPasswordInput((prev) => !prev); // toggle the mode
              if (showPasswordInput) {
                setEmail(emailCreds); // copy emailCreds to email
              } else {
                setEmailCreds(email); // copy email to emailCreds
              }
            }}
          >
            {showPasswordInput ? (
              <Text
                fontSize="12px"
                w="100%"
                mt="10px"
                fontWeight="500"
                cursor="pointer"
                color="#ffffff"
                display="flex"
                justifyContent="center"
                gap="6px"
                alignItems="center"
                _hover={{ textDecoration: "underline", color: "#58faea" }}
              >
                <FaMagic color="#fff" />
                Forgot password? Email me a login link
              </Text>
            ) : (
              <Text
                bg="#2d2d2d"
                borderRadius="10px"
                border="1px solid #58faea"
                p="10px"
                fontSize="12px"
                textAlign="center"
                w="100%"
                mt="10px"
              >
                We’ll email you a magic link for a one-click sign in. Or you can{" "}
                {""}
                <Text
                  as="span"
                  fontWeight="600"
                  cursor="pointer"
                  color="#58faea"
                  _hover={{ textDecoration: "underline" }}
                >
                  sign in with password
                </Text>
                {""} instead.
              </Text>
            )}
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}
