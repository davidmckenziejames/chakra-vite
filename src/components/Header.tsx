import { IconButton, Flex, Box } from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";
import HeaderSearch from "./HeaderSearch";

export default function Header({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      position="sticky"
      top="0"
      my="0px"
      height="20"
      zIndex="1"
      alignItems="center"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      zIndex="10"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
        mr="15px"
      />
      <Flex
        flexDirection="row"
        id="headermenu"
        align="center"
        justifyContent={{ base: "flex-end", sm: "space-between" }}
        width="100%"
      >
        <Box display={{ base: "none", sm: "flex" }}>
          <HeaderSearch />
        </Box>
      </Flex>
    </Flex>
  );
}
