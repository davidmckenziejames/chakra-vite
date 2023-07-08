import {
  Drawer,
  DrawerOverlay,
  IconButton,
  Image,
  useDisclosure,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { CgMenuRightAlt, CgMenuLeftAlt } from "react-icons/cg";
import Sidebar from "./HeaderComponents/Sidebar";
import SignInButton from "./HeaderComponents/SignInButton";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="black"
      borderBottom="1px solid #ffffff"
      _hover={{
        bg: "-webkit-linear-gradient(25deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);",
      }}
      w="100%"
      position="sticky"
      top="0"
      zIndex="sticky"
      px="20px"
      py="15px"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        align="center"
        w="100%"
      >
        <Flex align="center" gap="10px" justify="space-between" w="100%">
          <Image
            id="logo"
            w="120px"
            src="https://djfan.app/wp-content/uploads/2023/04/djfan-email.png"
          />
          <Flex gap="10px">
            <SignInButton />
            <IconButton
              aria-label="Open menu"
              icon={isOpen ? <CgMenuLeftAlt /> : <CgMenuRightAlt />}
              display="flex"
              color="white"
              width={{ base: "38px", md: "38px" }}
              height={{ base: "38px", md: "38px" }}
              fontSize={{ base: "35px", md: "35px" }}
              variant="solid"
              background="unset"
              _hover={{
                background: "black",
              }}
              onClick={onOpen}
            />
          </Flex>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <Sidebar />
          </Drawer>
        </Flex>
      </Flex>
    </Box>
  );
}
