import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Tooltip,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CardFooter,
  Heading,
  IconButton,
} from "@chakra-ui/react";

import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
  FaSmile,
  FaRegSmileBeam,
  FaSmileBeam,
  FaRegSmile,
  FaPlus,
  FaCheck,
  FaInfoCircle,
} from "react-icons/fa";

export default function VIPMembership() {
  const [isHovered, setIsHovered] = useState(false);
  const items = [
    "Access Exclusive Content",
    "Detailed Tour Schedule",
    "Private Playlists & Setlists",
    "Early Access to New Music",
    "Community Chat",
    "Purchase Tickets Early",
    "Meet & Greet Invitations",
    "Obtain Guestlist Places",
    "Win Backstage Passes",
    "20% Off Merch Store",
    "Submit Demos for Feedback",
    "Ticket & Merch Giveaways",
    "Behind-the-Scenes Content",
  ];

  return (
    <>
      <Card
        minW="350px"
        height="100%"
        align="center"
        overflow="hidden"
        borderRadius="15px"
      >
        <CardHeader pt="25px" pb="10px" m="0" w="full" justifyContent="center">
          <Text
            fontWeight="600"
            textAlign="center"
            fontSize={{ base: "20px", md: "24px" }}
            color="#111111"
          >
            VIP Membership
          </Text>
          <Flex justifyContent="center" gap="5px" align="center">
            <Text display="flex" alignItems="center">
              <Box
                as="span"
                fontSize={{ base: "22px", md: "24px" }}
                fontWeight="400"
              >
                $
              </Box>
              <Box
                as="span"
                fontSize={{ base: "28px", md: "30px" }}
                fontWeight="600"
              >
                10.00
              </Box>
            </Text>
            <Text
              fontSize={{ base: "12px", md: "12px" }}
              color="#999999"
              fontWeight="600"
              mb={{ base: "-12px", md: "-12px" }}
            >
              / MONTH
            </Text>
          </Flex>
        </CardHeader>
        <CardBody
          display="flex"
          flexDirection="column"
          alignContent="center"
          p="0"
          width="100%"
          pb="25px"
        >
          <Text color="#8553f4" pb="10px" textAlign="center" fontWeight="600">
            <i>What you get?</i>
          </Text>
          <Accordion allowToggle width="100%" borderWidth="0">
            {items.map((item) => (
              <AccordionItem
                key={item}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderWidth="0"
                flexDirection="column"
                borderColor="#fff"
                _hover={{
                  bg: "#dcffe5",
                  borderWidth: "1px",
                  borderColor: "gray.300",
                }}
              >
                <AccordionButton
                  display="flex"
                  py="10px"
                  alignItems="center"
                  gap="10px"
                  w="300px"
                  _hover={{ bg: "unset" }}
                >
                  <Box
                    display="flex"
                    as={FaCheckCircle}
                    color="#22F07E"
                    fontSize="18px"
                  />
                  {item}
                  <AccordionIcon
                    as={FaInfoCircle}
                    color="gray.300"
                    fontSize="16px"
                    position="absolute"
                    right="25px"
                  />
                </AccordionButton>
                <AccordionPanel pb={4} bg="white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </CardBody>

        <CardFooter
          borderTop="1px solid black"
          bg="#8553f4"
          w="full"
          py="20px"
          justifyContent="center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          _hover={{
            background: "#22f07e",
          }}
        >
          <Heading
            display="flex"
            flexDirection="row"
            alignItems="center"
            color="white"
            as="a"
            href="#"
            gap="10px"
            fontSize={{ base: "20px", md: "22px" }}
          >
            START $1 TRIAL
            <Box fontSize={{ base: "14px", md: "16px" }}>
              <Box as={isHovered ? FaCheck : FaArrowRight} />
            </Box>
          </Heading>
        </CardFooter>
      </Card>
    </>
  );
}
