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
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Heading,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
import SignInButton from "../Home/Sections/HeaderComponents/SignInButton";
import React, { useState } from "react";
import { FaBars, FaHeadphones, FaSearch } from "react-icons/fa";
import SearchIconMobile from "./MenuButtons/SearchIconMobile";
import SearchIcon from "./MenuButtons/SearchIcon";

const menuItemsBase = [
  { text: "About", href: "#" },
  { text: "Explore", href: "#" },
  { text: "Contact Us", href: "#" },
];

const menuItemsMore = [
  { text: "Help", href: "#" },
  { text: "Settings", href: "#" },
  { divider: true },
  { text: "Terms of Use", href: "#" },
  { text: "Privacy Policy", href: "#" },
];

export default function HeaderOffline() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showMore, setShowMore] = useState(false);

  const menuItems = showMore
    ? [...menuItemsBase, ...menuItemsMore]
    : [...menuItemsBase];

  return (
    <Box
      bg="black"
      borderBottom="1px solid #ffffff"
      w="100%"
      position="sticky"
      top="0"
      zIndex="sticky"
      height={{ base: "50px", md: "60px" }}
      px={{ base: "10px", md: "0px" }}
      py={{ base: "10px", md: "10px" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        id="navbar"
        justifyContent="space-between"
        align="center"
        maxW="1024px"
        zIndex="10"
        w="100%"
      >
        <Image
          id="logo"
          w={{ base: "100px", md: "120px" }}
          src="https://djfan.app/wp-content/uploads/2023/04/djfan-email.png"
        />
        <Flex align="center" gap="15px">
          <Box display={{ base: "flex", md: "none" }}>
            <SearchIconMobile />
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <SearchIcon />
          </Box>
          <Menu>
            <MenuButton>
              <Box
                as="a"
                onClick={onOpen}
                color="white"
                fontSize={{ base: "24px" }}
              >
                <FaBars />
              </Box>
            </MenuButton>
            <MenuList minW="unset" mt="10px" p="0" py="10px">
              {menuItems.map((item, index) =>
                item.divider ? (
                  <MenuDivider key={index} />
                ) : (
                  <MenuItem
                    minW="130px"
                    pl="15px"
                    pr="10px"
                    py="5px"
                    as="a"
                    href={item.href}
                    key={index}
                  >
                    {item.text}
                  </MenuItem>
                )
              )}
              {!showMore && (
                <Button onClick={() => setShowMore(true)}>Show More</Button>
              )}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
