import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      as="footer"
      role="contentinfo"
      bg="black"
      gap="10px"
      flexDirection="column"
      py={{ base: "20px" }}
      align="center"
    >
      <Link href="/">
        <Image
          w="100px"
          src="https://djfan.app/wp-content/uploads/2023/04/djfan-email.png"
        />
      </Link>
      <Text fontSize="sm" color="white">
        <Link href="#">Privacy Policy</Link>
        <Link href="#" ml="10px">
          Terms of Use
        </Link>
      </Text>

      <Text fontSize="sm" color="white">
        &copy; {new Date().getFullYear()} DJfan Ltd. All rights reserved.
      </Text>
    </Flex>
  );
}
