import {
  Flex,
  Text,
  Stack,
  Box,
  Icon,
  useColorModeValue,
  background,
} from "@chakra-ui/react";
import {
  BiCalendarHeart,
  BiChat,
  BiCloudUpload,
  BiDrink,
  BiGift,
  BiHeadphone,
  BiLock,
  BiSolidDiscount,
  BiSolidDoorOpen,
  BiSolidMusic,
  BiSolidPlaylist,
  BiTimer,
} from "react-icons/bi";
import { ReactElement } from "react";
import Marquee from "react-fast-marquee";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => (
  <Stack direction={"row"} align={"center"} px="10px">
    <Flex
      w={6}
      h={6}
      align={"center"}
      justify={"center"}
      rounded={"full"}
      bg={iconBg}
    >
      {icon}
    </Flex>
    <Text fontWeight="600" color="white" fontSize="14px">
      {text}
    </Text>
  </Stack>
);

const features = [
  { icon: BiLock, text: "Members-Only Content" },
  { icon: BiSolidMusic, text: "Unreleased Tracks & Previews" },
  { icon: BiDrink, text: "Guestlists & Backstage Passes" },
  { icon: BiTimer, text: "Purchase Tickets Early" },
  { icon: BiHeadphone, text: "Tour Dates & Set Times" },
  { icon: BiSolidDoorOpen, text: "Behind-The-Scenes" },
  { icon: BiChat, text: "Direct & Group Chats" },
  { icon: BiSolidPlaylist, text: "Set Track Lists & Playlists" },
  { icon: BiSolidDiscount, text: "Ticket & Merch Discounts" },
  { icon: BiCalendarHeart, text: "Meet & Greet Invitations" },
  { icon: BiCloudUpload, text: "Submit Demos for Feedback" },
  { icon: BiGift, text: "Freebies, Giveaways & Contents" },
];

export default function Features() {
  const iconColor = "#BE04F1";
  const iconBg = useColorModeValue("purple.100", "purple.900");

  return (
    <Box
      background="-webkit-linear-gradient(50deg, hsla(189, 92%, 69%, 1) 0%, hsla(335, 89%, 66%, 1) 50%, hsla(240, 63%, 57%, 1) 100%);"
      py="20px"
      _hover={{
        background:
          "-webkit-linear-gradient(145deg, hsla(184, 82%, 51%, 1) 0%, hsla(275, 77%, 70%, 1) 50%, hsla(351, 88%, 62%, 1) 100%)",
      }}
    >
      <Marquee>
        <Flex gap="15px" flexWrap="wrap">
          {features.map(({ icon: FeatureIcon, text }) => (
            <Feature
              key={text}
              icon={<Icon as={FeatureIcon} color={iconColor} w={4} h={4} />}
              iconBg={iconBg}
              text={text}
            />
          ))}
        </Flex>
      </Marquee>
    </Box>
  );
}
