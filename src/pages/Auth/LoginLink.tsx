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

export default function LoginLink() {
  const [email, setEmail] = useState("");
  const [emailCreds, setEmailCreds] = useState("");
  const [passwordCreds, setPasswordCreds] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  return (
    <>
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
          id="email"
          placeholder="e.g. daftpunk@gmail.com"
          type="email"
          fontSize="18px"
          lineHeight="2em"
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
    </>
  );
}
