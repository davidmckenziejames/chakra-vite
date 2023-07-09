import { Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      bg="black"
      gap="10px"
      justifyContent={{ base: "center", md: "space-between" }}
      flexDirection={{ base: "column", md: "row" }}
      py={{ base: "20px" }}
      align="center"
      px={{ base: "10px", md: "50px" }}
    >
      <Flex align="center" flexDirection={{ base: "column", md: "row" }}>
        <Link href="/" display={{ base: "none", md: "flex" }}>
          <Image
            w="100px"
            src="https://djfan.app/wp-content/uploads/2023/04/djfan-email.png"
          />
        </Link>
        <Text fontSize="sm" color="white" pl={{ base: "0", md: "20px" }}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#" ml="10px">
            Terms of Use
          </Link>
        </Text>
      </Flex>

      <Text fontSize="sm" color="white">
        &copy; {new Date().getFullYear()} DJfan Ltd. All rights reserved.
      </Text>
    </Flex>
  );
}
