import { Flex } from "@chakra-ui/react";
import ProductPageCard from "../Profile/Feed/ProductPageCard";
import Layout from "../../layout/Layout";

export default function Product() {
  return (
    <Layout>
      <Flex
        w="100%"
        flexDirection="column"
        align="center"
        p="0px"
        pt="40px"
        pb="50px"
        bgImage="linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)"
      >
        <ProductPageCard />
      </Flex>
    </Layout>
  );
}
