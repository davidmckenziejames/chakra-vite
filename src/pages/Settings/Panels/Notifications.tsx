import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  Button,
  Flex,
  Select,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import Countries from "./Countries";
import { useState } from "react";
import {
  FaRegAddressCard,
  FaRegAddressBook,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Notifications() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box pb="100px">
      <Text fontSize="16px" pb="15px">
        <i>Update your account settings.</i>
      </Text>
      <Flex direction="column" gap="25px">
        <Button
          bg={"#000000"}
          w="200px"
          color={"white"}
          _hover={{
            bg: "#8E03B5",
          }}
        >
          Update Password
        </Button>
      </Flex>
    </Box>
  );
}
