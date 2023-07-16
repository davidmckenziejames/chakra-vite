import {
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button,
  Image,
  useDisclosure,
  Flex,
  Heading,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
import SignInButton from "../Home/Sections/HeaderComponents/SignInButton";
import React from "react";
import { FaBars, FaHeadphones, FaSearch } from "react-icons/fa";

export default function SearchIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box as="a" onClick={onOpen} color="white" fontSize={{ base: "20px" }}>
        <FaSearch />
      </Box>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerContent>
          <Flex
            bg="#111111"
            flexDirection="row"
            align="center"
            justifyContent="center"
          >
            <Flex
              px={{ base: "10px", md: "0px" }}
              py={{ base: "10px", md: "10px" }}
              w="100%"
              flexDirection="row"
              maxW="1024px"
              align="center"
              justifyContent="space-between"
            >
              <Flex bg="#111111" w={{ base: "95%", md: "50%" }}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaHeadphones color="gray.300" />
                  </InputLeftElement>
                  <Input
                    bg="white"
                    focusBorderColor="cyan"
                    type="tel"
                    fontSize={{ base: "14px", md: "16px" }}
                    placeholder="Search for an Artist"
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Search database"
                      bg="#D1FFE6"
                      icon={<FaSearch />}
                    />
                  </InputRightElement>
                </InputGroup>
                <Button
                  ml="15px"
                  color="white"
                  bg="unset"
                  border="2px solid white"
                  fontWeight="700"
                  mr="10px"
                >
                  Explore{" "}
                  <Box ml="5px" display={{ base: "none", md: "flex" }}>
                    {" "}
                    All
                  </Box>
                </Button>
              </Flex>
              <Flex display="flex" id="button" p="0" m="0">
                <DrawerCloseButton
                  color="white"
                  top="unset"
                  right="0px"
                  position="relative"
                  size="lg"
                  px={{ base: "10px", md: "20px" }}
                  py="10px"
                  w="100%"
                  h="100%"
                />
              </Flex>
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
