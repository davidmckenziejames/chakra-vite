import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Image,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { OAuthButtonGroup } from "@components/login/OAuthButtonGroup";
import { PasswordField } from "@components/login/PasswordField";

export default function Login() {
  return (
    <Container
      maxW="full"
      bg="black"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8" align="center">
        <Stack spacing="25px" align="center">
          <Image
            src="https://djfan.ams3.cdn.digitaloceanspaces.com/2023/06/djfan-logo-white.png"
            alt="DJfan Logo"
            width="160px"
            pb="20px"
          />
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg="white"
          maxW="lg"
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="solid" colorScheme="purple">
                SIGN IN
              </Button>
              <HStack align="center">
                <Divider />
                <Text
                  textStyle="sm"
                  whiteSpace="nowrap"
                  color="fg.muted"
                  fontWeight="500"
                >
                  or sign in with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
        <HStack spacing="1" justify="center">
          <Text mr="10px" color="white">
            Don't have an account?
          </Text>
          <Link>
            <Text mr="10px" color="cyan" fontWeight="bold">
              Sign Up
            </Text>
          </Link>
        </HStack>
      </Stack>
    </Container>
  );
}
