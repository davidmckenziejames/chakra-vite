import { Box, Container, Flex, Text } from "@chakra-ui/react";
import SignInForm from "./Home/Forms/SignInForm";
export default function SignIn() {
  return (
    <Container p="0" py="20px" m="0" maxW="100%" id="con" bg="black" h="vh100">
      <Flex flexDirection="column" align="center">
        <Box w={{ base: "full", md: "50%" }}>
          <SignInForm />
        </Box>
      </Flex>
    </Container>
  );
}
