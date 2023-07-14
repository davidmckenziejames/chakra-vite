import {
  Button,
  SimpleGrid,
  Container,
  Flex,
  Link,
  Heading,
} from "@chakra-ui/react";
import * as React from "react";
import { CardWithAvatar } from "./CardWithAvatar";
import data from "./data.json";
import { UserInfo } from "./UserInfo";
import Layout from "../../layout/Layout";

export default function Explore() {
  return (
    <Layout>
      <Flex
        maxW="full"
        flexDir="column"
        minH="100vh"
        bg="black"
        py="20px"
        pb="50px"
        px={{ base: "0", sm: "8" }}
      >
        <Heading
          pb="20px"
          color="white"
          pl={{ base: "20px", md: "0px" }}
          fontSize={{ base: "24px", md: "30px" }}
        >
          Explore Creators
        </Heading>
        <SimpleGrid
          columns={{ base: 2, md: 6 }}
          spacing={{ base: "25px", md: "30px" }}
          px={{ base: "20px", md: "0px" }}
        >
          {data.map(({ name, src, coverPhoto }) => (
            <CardWithAvatar
              key={name}
              avatarProps={{ src, name }}
              coverPhoto={coverPhoto}
            >
              <UserInfo mt="3" name={name} />
              <Button
                variant="outline"
                color="white"
                mt="-5px"
                bg="#be04f1"
                rounded="full"
                size="sm"
                mx="20px"
              >
                <Link href="/profile">View Profile</Link>
              </Button>
            </CardWithAvatar>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
