import {
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <DrawerContent>
      <DrawerBody>
        <DrawerCloseButton color="black" />
        <Flex direction="column" pt="20px">
          <p>Coming soon...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Flex>
      </DrawerBody>
    </DrawerContent>
  );
}
