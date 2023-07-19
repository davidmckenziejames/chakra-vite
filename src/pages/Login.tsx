import { SignIn } from "@clerk/clerk-react";
import { Flex } from "@chakra-ui/react";
export default function Login() {
  return (
    <Flex height="100vh" justify="center" align="center" bg="black">
      <SignIn redirectUrl="/feed" />
    </Flex>
  );
}
