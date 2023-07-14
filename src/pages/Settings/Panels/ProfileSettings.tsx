import {
  Box,
  Flex,
  Text,
  Textarea,
  Center,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Divider,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Dropzone } from "./Dropzone";
import { FaTrash } from "react-icons/fa";

export default function ProfileSettings() {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
    if (!newValue) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  useEffect(() => {
    if (!input) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [input]);

  return (
    <Box p="10px" pb="20px">
      <Text fontSize="16px" pb="15px">
        <i>This is how others will see you on the site.</i>
      </Text>
      <Flex gap="25px" flexDirection="column">
        <FormControl id="picture">
          <FormLabel>Picture</FormLabel>
          <Stack direction="row" align="center" gap="15px">
            <Avatar name="" src="" size="lg" />
            <Button>Upload</Button>
            <IconButton
              variant="outline"
              colorScheme="gray"
              aria-label="Send email"
              icon={<FaTrash />}
            />
          </Stack>
        </FormControl>
        <FormControl>
          <FormLabel>Display Name</FormLabel>
          <Input type="name" />
          <FormHelperText>
            This is your public display name. It can be your real name or a
            pseudonym.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Bio</FormLabel>
          <Textarea />
        </FormControl>
        <Button
          bg={"#BE04F1"}
          w="200px"
          color={"white"}
          _hover={{
            bg: "#8E03B5",
          }}
        >
          Update Profile
        </Button>
      </Flex>
    </Box>
  );
}
