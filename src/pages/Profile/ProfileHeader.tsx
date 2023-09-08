import { Avatar, Box, Button, Flex, Stack, Icon, Text } from "@chakra-ui/react";
import { FiUnlock, FiUser, FiHeadphones } from "react-icons/fi";
import StatsIcons from "./StatsIcons";

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
      position="relative"
      backgroundImage="url('https://files.djfan.app/artists/158/30b0a512-5020-4c9b-8473-608ef3de5e0f.jpeg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Flex align="center" flexDirection="column">
        <Box pt="10px">
          <StatsIcons />
          <Avatar
            display="block"
            flexDirection="row"
            showBorder
            borderColor="cyan"
            width={avatarSizes}
            height={avatarSizes}
            src="https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
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
              Memberships
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
    </Box>
  );
}
