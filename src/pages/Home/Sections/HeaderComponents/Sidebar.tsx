import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  Link,
  IconButton,
  DrawerOverlay,
  Image,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Text,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { CgMenuRightAlt, CgMenuLeftAlt } from "react-icons/cg";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DrawerContent>
      <DrawerHeader borderBottomWidth="1px">
        <Flex justify="space-between" align="center" width="100%">
          <Text>Menu</Text>
          <DrawerCloseButton color="black" />
        </Flex>
      </DrawerHeader>

      <DrawerBody>
        <p>Coming soon...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </DrawerBody>
    </DrawerContent>
  );
}
