"use client";
import {
  Button,
  Box,
  AbsoluteCenter,
  Image,
  Link,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import {
  FaApple,
  FaArrowRight,
  FaFacebookF,
  FaGoogle,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";
import CreateAccount from "../Home/Sections/HeaderComponents/CreateAccount";

export default function Credentials() {
  const [email, setEmail] = useState("");
  const [emailCreds, setEmailCreds] = useState("");
  const [passwordCreds, setPasswordCreds] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  return (
    <Stack spacing="10px">
      <FormControl>
        <FormLabel htmlFor="email-cred" fontSize="14px">
          Email Address
        </FormLabel>
        <Input
          mt="0px"
          name="email-cred"
          placeholder="email"
          type="email"
          fontSize="16px"
          lineHeight="2em"
          _focus={{ border: "2px solid #00f5d4" }}
          value={emailCreds}
          onChange={(e) => setEmailCreds(e.target.value)}
        />
      </FormControl>
      <FormControl pb="10px">
        <FormLabel htmlFor="password-cred" fontSize="14px">
          Password
        </FormLabel>
        <Input
          name="password-cred"
          placeholder="password"
          type="password"
          fontSize="16px"
          lineHeight="2em"
          _focus={{ border: "2px solid #00f5d4" }}
          value={passwordCreds}
          onChange={(e) => setPasswordCreds(e.target.value)}
        />
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
  );
}
