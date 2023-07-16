import { Box, Flex, Button } from "@chakra-ui/react";
import SignInModal from "../Home/Sections/HeaderComponents/SignInModal";
export default function StickyFooter() {
  return (
    <>
      <Box position="fixed" bottom="0" width="100%" zIndex="20">
        <Flex gap="15px" justify="space-between" p="10px 15px" bg="#111111">
          <Button
            w="50%"
            variant="solid"
            color="white"
            bg="#9000B8"
            fontWeight="700"
          >
            FREE ACCOUNT
          </Button>
          <Button w="50%" variant="outline" color="white" fontWeight="700">
            SIGN IN
          </Button>
        </Flex>
      </Box>
    </>
  );
}
