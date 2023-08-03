import {
    Box,
    CloseButton,
    Flex,
    Image,
    Divider,
    Button,
    ResponsiveValue,
    Heading,
    HStack,
    Avatar,
    Badge,
    AvatarBadge,
  } from "@chakra-ui/react";
  
  import { FiHome, FiHeadphones, FiMusic, FiSettings } from "react-icons/fi";
  import HeaderSearch from "./HeaderSearch";
  import { FunctionComponent, useMemo } from "react";
  import { Link } from "react-router-dom";
  import CSS from "csstype";
  import { useUserConnectionCheck } from "../../hooks/useUser";
  import { useTranslation } from "react-i18next";
  import { BiBell, BiEnvelope } from "react-icons/bi";
  
  const accessLevels = ["", "Follow", "GOLD", "VIP"];
  
  const navItems = [
    {
      label: "Feed",
      icon: <FiHome />,
      linkTo: "/feed",
    },
    {
      label: "Explore Creators",
      icon: <FiMusic />,
      linkTo: "/account",
    },
    // {
    //   label: "Notifications",
    //   icon: <BiBell />,
    //   linkTo: "/messages",
    // },
    // {
    //   label: "Messages",
    //   icon: <BiEnvelope />,
    //   linkTo: "/messages",
    // },
    // {
    //   label: "Settings",
    //   icon: <FiSettings />,
    //   linkTo: "/settings",
    // },
  ];
  
  interface SidebarProps {
    onClose: () => void;
    display?: ResponsiveValue<CSS.Property.Display>;
  }
  
  const Sidebar: FunctionComponent<SidebarProps> = ({ onClose, display }) => {
    const { t } = useTranslation();
    const { data: connectedUsers } = useUserConnectionCheck();
  
    const sortedUsers = useMemo(() => {
      if (!connectedUsers) return [];
      return connectedUsers
        .map((user) => {
          return user["dj"][0];
        })
        .sort((a, b) => {
          if (a.accesslevel_id === b.accesslevel_id)
            return a.display_name - b.display_name;
          return a.accesslevel_id - b.accesslevel_id;
        });
    }, [connectedUsers]);
  
    return (
      <Flex
        direction="column"
        transition="3s ease"
        bg="black"
        borderRight="1px"
        borderRightColor="gray.200"
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="100%"
        display={display}
      >
        <Flex
          id="top-sidebar"
          h="50%"
          alignItems="center"
          m="0"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <Flex
            height="20"
            w="full"
            display={{ base: "none", md: "flex" }}
            justifyContent="start"
            align="start"
            flexDirection="row"
            px="25px"
          >
            <Image
              src="https://djfan.app/wp-content/uploads/2023/07/djfan-logo-white-web.png"
              alt="DJfan Logo"
              width="100px"
              py="20px"
            />
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            justifyContent="flex-end"
            w="full"
            px="3"
            py="3"
          >
            <CloseButton color="white" onClick={onClose} />
          </Flex>
          <Divider />
  
          <Flex
            flexDirection="column"
            mt="5px"
            gap="5px"
            w="full"
            justify="center"
            align="center"
          >
            <Box
              display={{ base: "flex", md: "none" }}
              px="25px"
              pt={{ base: "20px", md: "0" }}
            >
              <HeaderSearch />
            </Box>
            <Flex
              flexDirection="column"
              mt="5"
              w="full"
              px="5"
              gap="10px"
              justifyContent="center"
            >
              {navItems.map((nav, index) => (
                <Link key={index} to={nav.linkTo}>
                  <Button
                    leftIcon={nav.icon}
                    minW="120px"
                    width="100%"
                    justifyContent="flex-start"
                    bgColor="transparent"
                    color="white"
                    fontWeight="normal"
                    _hover={{
                      bgColor: "gray",
                    }}
                  >
                    {nav.label}
                  </Button>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
  
        <Flex flexDirection="column" gap="10px" px="20px" height="50%">
          <Heading color="white" fontSize="16px" fontWeight="600">
            My Subscriptions
          </Heading>
          <Flex
            direction="column"
            gap="10px"
            w="full"
            maxH="250px"
            overflowY="auto"
          >
            {sortedUsers.map((user, index) => (
              <Link key={index} to="/profile">
                <HStack mt="5px" gap="10px">
                  <Avatar
                    height="30px"
                    width="30px"
                    border="1px solid cyan"
                    src={user.profile_picture}
                  >
                    <AvatarBadge bg="#69CCA4" borderColor="#69CCA4" />
                  </Avatar>
                  \
                  <Heading color="white" fontSize="14px" fontWeight="600">
                    {user.display_name}
                  </Heading>
                  <Badge
                  variant="solid"
                  color="#58faea"
                  bg="unset"
                  border="1px solid #58faea"
                  fontSize="10px"
                >
                  {accessLevels[user.accesslevel_id]}
                </Badge>
                </HStack>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    );
  };
  
  export default Sidebar;
  