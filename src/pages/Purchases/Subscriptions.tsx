import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Text,
  Link,
  Tr,
} from "@chakra-ui/react";
import { FaGem } from "react-icons/fa";
import ManageButton from "./ManageButton";

export default function Subscriptions() {
  return (
    <>
      <TableContainer
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        border="1px solid gray"
        flex="1"
        overflowY="auto"
      >
        <Table variant="simple" overflow="auto" maxH="calc(100vh - 260px)">
          <Thead position="sticky" top="0" color="#fff" bg="black">
            <Tr>
              <Th color={"white"}>Creator</Th>
              <Th color={"white"}>Started</Th>
              <Th color={"white"}>Amount</Th>
              <Th color={"white"}>Level</Th>
              <Th color={"white"}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Link href="/" fontWeight={"600"}>
                  DJ Exotic
                </Link>
              </Td>
              <Td>11/10/2023</Td>
              <Td>$5.00</Td>
              <Td>
                <Text
                  color="#fff"
                  textAlign={"center"}
                  py="4px"
                  bg="#000"
                  fontSize="14px"
                  w="60px"
                  fontWeight={"600"}
                  borderRadius={"5px"}
                >
                  GOLD
                </Text>
              </Td>
              <Td>
                <ManageButton />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Link href="/" fontWeight={"600"}>
                  Richy Ahmed
                </Link>
              </Td>
              <Td>11/10/2023</Td>
              <Td>$10.00</Td>
              <Td>
                <Flex
                  color="#fff"
                  px="8px"
                  py="4px"
                  bg="-webkit-linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%);
                            "
                  fontSize="14px"
                  w="60px"
                  textAlign={"center"}
                  alignItems={"center"}
                  fontWeight={"600"}
                  borderRadius={"5px"}
                  gap="4px"
                >
                  <FaGem fontSize={"12px"} />
                  VIP
                </Flex>
              </Td>
              <Td>
                <ManageButton />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
