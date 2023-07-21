import {
  Drawer,
  DrawerOverlay,
  IconButton,
  Image,
  useDisclosure,
  Flex,
  Box,
} from "@chakra-ui/react";
import { CgMenuRightAlt, CgMenu } from "react-icons/cg";
import Sidebar from "./HeaderComponents/Sidebar";
import SignInButton from "./HeaderComponents/SignInButton";
import React from "react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      bg="black"
      borderBottom="1px solid #ffffff"
      _hover={
        {
          //bg: "-webkit-linear-gradient(50deg, hsla(189, 92%, 69%, 1) 0%, hsla(335, 89%, 66%, 1) 50%, hsla(240, 63%, 57%, 1) 100%);",
        }
      }
      w="100%"
      position="sticky"
      top="0"
      zIndex="sticky"
      px={{ base: "10px", md: "0px" }}
      py="15px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex id="navbar" maxW="1024px" w="100%">
        <Flex justify="flex-start" w="30%">
          <SignInButton />
        </Flex>
        <Flex justify="center" w="40%" align="center">
          <Image
            id="logo"
            w="120px"
            src="https://djfan.app/wp-content/uploads/2023/04/djfan-email.png"
          />
        </Flex>
        <Flex justify="flex-end" w="30%" align="center">
          <IconButton
            aria-label="Open menu"
            icon={isHovered ? <CgMenu /> : <CgMenuRightAlt />}
            display="flex"
            color="white"
            width={{ base: "38px", md: "38px" }}
            height={{ base: "38px", md: "38px" }}
            fontSize={{ base: "35px", md: "35px" }}
            variant="unstyled"
            onClick={onOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <Sidebar />
          </Drawer>
        </Flex>
      </Flex>
    </Box>
  );
}
