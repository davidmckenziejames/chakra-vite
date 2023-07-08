import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Link,
  Text,
  Flex,
} from "@chakra-ui/react";
import EmailForm from "../Forms/EmailForm";
import SocialButtons from "../Forms/SocialButtons";
import { FaUnlock } from "react-icons/fa";

export default function SignUpCard() {
  return (
    <Card
      height="100%"
      w={{ base: "100%", md: "400px" }}
      bg="unset"
      display="flex"
    >
      <CardBody
        m="0"
        display="flex"
        gap="12px"
        px="20px"
        pt="30px"
        pb="20px"
        bg="white"
        flexDirection="column"
        alignItems="center"
        borderRadius="lg"
        border="2px solid cyan"
      >
        <Heading display="flex" alignItems="center" fontSize="24px">
          <Icon fontSize="22px" as={FaUnlock} marginRight="8px" />
          Unlock DJ Content
        </Heading>
        <Text align="center" fontSize="14px" color="#22A9FC" fontWeight="500">
          Register <b>free account</b> with:
        </Text>
        <Box w="100%">
          <SocialButtons />
        </Box>
        <Text fontSize="14px" color="#A3A3A3">
          or continue with email
        </Text>
        <Box w={{ base: "100%", md: "80%" }}>
          <EmailForm />
        </Box>
        <Text align="center" fontSize={{ base: "10px", md: "12px" }} px="20px">
          By signing up, you are creating a DJfan account and agree to DJfan’s
          Terms and <Link color="blue.400">Privacy Policy</Link>
        </Text>
      </CardBody>
      <CardFooter
        p="0"
        pt="10px"
        m="0"
        background="transparent"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          color="white"
          fontSize="14px"
          fontWeight="500"
        >
          <Text>
            Are you a creator?
            <Link color="cyan" fontWeight="600" ml="5px">
              Create account here
            </Link>
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}
