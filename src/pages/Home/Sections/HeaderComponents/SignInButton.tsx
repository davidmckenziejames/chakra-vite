import { Modal, ModalOverlay, useDisclosure, Button } from "@chakra-ui/react";
import SignInModal from "./SignInModal";
export default function SignInButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        px="15px"
        fontWeight="700"
        border="2px solid white"
        color="white"
        background="unset"
        onClick={onOpen}
        _hover={{
          background: "#FC7522",
          color: "white",
          borderColor: "#FC7522",
        }}
      >
        SIGN IN
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <SignInModal />
      </Modal>
    </>
  );
}
