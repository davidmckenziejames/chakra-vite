import { Flex, Text, Stack, Box } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

interface FeatureProps {
  text: string;
}

const Feature = ({ text }: FeatureProps) => (
  <Stack direction={"row"} align={"center"} px="20px">
    <Text fontWeight="600" color="white" fontSize="16px">
      {text}
    </Text>
  </Stack>
);

const features = [
  { text: "Members-Only Content" },
  { text: "Unreleased Tracks & Previews" },
  { text: "Guestlists & Backstage Passes" },
  { text: "Purchase Tickets Early" },
  { text: "Tour Dates & Set Times" },
  { text: "Behind-The-Scenes" },
  { text: "Direct & Group Chats" },
  { text: "Set Track Lists & Playlists" },
  { text: "Ticket & Merch Discounts" },
  { text: "Meet & Greet Invitations" },
  { text: "Submit Demos for Feedback" },
  { text: "Freebies, Giveaways & Contents" },
];

export default function Features() {
  return (
    <motion.div
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
        overflow: "hidden",
      }}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
        repeatDelay: 1,
      }}
    >
      <Box
        //background="-webkit-linear-gradient(45deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%);"
        py="10px"
        //_hover={{
        //background:
        //  "-webkit-linear-gradient(145deg, hsla(184, 82%, 51%, 1) 0%, hsla(275, 77%, 70%, 1) 50%, hsla(351, 88%, 62%, 1) 100%)",
        // }}
      >
        <Marquee>
          <Flex flexWrap="wrap">
            {features.map(({ text }) => (
              <Feature key={text} text={text} />
            ))}
          </Flex>
        </Marquee>
      </Box>
    </motion.div>
  );
}
