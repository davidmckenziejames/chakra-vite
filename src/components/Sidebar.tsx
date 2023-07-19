import {
  Box,
  CloseButton,
  Flex,
  Image,
  Stack,
  HStack,
  Avatar,
  Heading,
  Divider,
  Link,
} from "@chakra-ui/react";

import {
  FiHome,
  FiSettings,
  FiHeadphones,
  FiHeart,
  FiUserCheck,
} from "react-icons/fi";

import SidebarUser from "./SidebarUser";
import HeaderSearch from "./HeaderSearch";

const NavItem = ({ href, icon, children }) => (
  <Link href={href} color="white" fontSize="18px" mb="5px">
    <Flex align="center">
      <Box mr="8px" as={icon} />
      {children}
    </Flex>
  </Link>
);

const navItems = [
  { href: "/feed", icon: FiHome, label: "Feed" },
  { href: "/explore", icon: FiHeadphones, label: "Explore Creators" },
  { href: "/explore", icon: FiUserCheck, label: "Following" },
  { href: "/subscriptions", icon: FiHeart, label: "Subscriptions" },
  { href: "/settings", icon: FiSettings, label: "Settings" },
];

export default function Sidebar({ onClose, ...rest }) {
  return (
    <Box
      transition="3s ease"
      bg="black"
      borderRight="1px"
      borderRightColor="gray.200"
      width={{ base: "full", md: 60 }}
      pos="fixed"
      h="100%"
      {...rest}
    >
      <Flex
        id="top-sidebar"
        h="70%"
        alignItems="center"
        m="0"
        justifyContent="flex-start"
        flexDirection="column"
      >
        <Flex
          height="20"
          w="full"
          justifyContent="center"
          align="center"
          flexDirection="row"
          px="25px"
        >
          <Image
            src="https://djfan.app/wp-content/uploads/2023/07/djfan-logo-white-web.png"
            alt="DJfan Logo"
            width="120px"
            py="20px"
          />
        </Flex>
        <Divider />

        <Flex
          flexDirection="column"
          mt="5px"
          gap="5px"
          color="pink"
          w="full"
          pl="25px"
          pr="15px"
        >
          <Box display={{ base: "flex", sm: "none" }} px="0px">
            <HeaderSearch />
          </Box>
          <Flex
            flexDirection="column"
            gap="10px"
            justifyContent="center"
            pl="10px"
            py="20px"
          >
            {navItems.map(({ href, icon, label }) => (
              <NavItem key={href} href={href} icon={icon}>
                <Box fontSize="18px" ml="4px">
                  {" "}
                  {label}
                </Box>
              </NavItem>
            ))}
          </Flex>
        </Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Flex
        flexDirection="column"
        height="30%"
        justifyContent="flex-end"
        pb="40px"
        background="black"
        px="15px"
      >
        <Stack spacing={{ base: "5", sm: "6" }}>
          <SidebarUser
            name="James Stephens"
            image="https://tinyurl.com/yhkm2ek8"
            account="Fan Account"
          />
        </Stack>
      </Flex>
    </Box>
  );
}
