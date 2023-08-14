import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  Icon,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { FiUnlock, FiUser, FiHeadphones } from "react-icons/fi";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

export default function ProfileHeader() {
  const avatarSizes = { base: "100px", sm: "150px" };
  return (
    <Box
      className="ProfileHeader"
      px={8}
      pt="30px"
      pb="30px"
      mx="auto"
      bg="pink"
      backgroundImage="url('https://djfan.app/wp-content/uploads/jet-engine-forms/175/2023/05/WhatsApp-Image-2023-05-20-at-17.39.36.jpeg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Flex align="center" flexDirection="column">
        <Box>
          <Avatar
            display="block"
            flexDirection="row"
            showBorder
            borderColor="cyan"
            width={avatarSizes}
            height={avatarSizes}
            src="https://djfan.app/wp-content/uploads/jet-engine-forms/175/2023/05/WhatsApp-Image-2023-05-20-at-17.39.37.jpeg"
          />
        </Box>
        <Stack spacing={0} align="center" justify="center" p={0} pos="relative">
          <Text fontSize="24px" fontWeight="bold" color="white" mt="10px">
            Richy Ahmed
          </Text>
          <Text fontSize="16px" color="white" fontWeight="600">
            <Icon as={FiHeadphones} mb="-3px" mr="6px" />
            DJ / Producer
          </Text>
          <Flex direction="row" gap="15px" mt="15px">
            <Button
              leftIcon={<FiUnlock />}
              px="10px"
              size="sm"
              iconSpacing="1"
              colorScheme="purple"
            >
              Unlock All-A Posts
            </Button>
            <Button
              leftIcon={<FiUser />}
              px="10px"
              size="sm"
              iconSpacing="1"
              color="black"
              bg="white"
            >
              Follow
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Flex bg="black" color="white">
        <VStack>
          <Heading>Unlock VIP content & Join inner-circle for $1 </Heading>
          <Text>What's in it for me?</Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Exclusive songs, mixes, videos posted only
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Guestlist, VIP, & backstage invites to my tour dates.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
        </VStack>
      </Flex>
    </Box>
  );
}
