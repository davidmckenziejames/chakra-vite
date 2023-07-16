import HeaderOffline from "./HeaderOffline";
import StickyFooter from "./StickyFooter";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

export default function LayoutOffline({ children }) {
  return (
    <Box minH="100vh" bg="white" width="100%" pb="20px">
      <HeaderOffline />
      <Box>{children}</Box>
      <StickyFooter />
    </Box>
  );
}
