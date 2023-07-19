import { SignUp } from "@clerk/clerk-react";
import { Flex } from "@chakra-ui/react";
export default function Register() {
  return (
    <Flex height="100vh" justify="center" align="center" bg="black">
      <SignUp redirectUrl="/feed" />
    </Flex>
  );
}
