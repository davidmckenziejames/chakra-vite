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
  Button,
  Icon,
} from "@chakra-ui/react";

import {
  FiHome,
  FiSettings,
  FiHeadphones,
  FiMail,
  FiBell,
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
            py="20px"
          >
            {navItems.map(({ href, icon, label }) => (
              <NavItem key={href} href={href} icon={icon}>
                {label}
              </NavItem>
            ))}
          </Flex>

          <Flex flexDirection="column" gap="10px" pt="20px">
            <Heading color="white" fontSize="16px" fontWeight="600">
              My Subscriptions
            </Heading>
            <Link href="/profile">
              <HStack mt="5px" gap="10px">
                <Avatar
                  height="30px"
                  width="30px"
                  border="1px solid cyan"
                  src={
                    "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/05/ff-bc341bdfde4ec0d1a583944ca302aa39-ff-richy_ahmed_metrodanceclub-358x500-1.jpg"
                  }
                />
                \
                <Heading color="white" fontSize="14px" fontWeight="600">
                  Richy Ahmed
                </Heading>
              </HStack>
            </Link>
            <Link
              href="/settings#membership"
              fontSize="12px"
              color="cyan"
              textDecoration="underline"
            >
              Manage
            </Link>
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
