import { Box, Tab, TabPanel, TabPanels, TabList, Tabs } from "@chakra-ui/react";
import ProfilePosts from "./ProfilePosts";
import ProfileBio from "./ProfileBio";
import ProfileEvents from "./ProfileEvents";
import ProfileProducts from "./ProfileProducts";
import ProfileAudio from "./ProfileAudio";
import {
  FaHome,
  FaUser,
  FaMusic,
  FaCalendar,
  FaStore,
  FaLock,
} from "react-icons/fa";

export default function ProfileMenu() {
  return (
    <Box w="100%">
      <Tabs isLazy isFitted>
        <TabList
          overflowY="hidden"
          bg="black"
          borderTop="1px solid white"
          borderBottom="2px solid white"
          color="white"
          p="0"
          m="0"
          sx={{
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Tab border="1px solid white" _selected={{ color: "cyan" }}>
            <FaHome fontSize="16px" />
            <Box ml="5px">Posts</Box>
          </Tab>
          <Tab border="1px solid white" _selected={{ color: "cyan" }}>
            <FaUser fontSize="16px" />
            <Box ml="5px">Biography</Box>
          </Tab>
          <Tab border="1px solid white" _selected={{ color: "cyan" }}>
            <FaMusic fontSize="16px" />
            <Box ml="5px">Tracks</Box>
          </Tab>
          <Tab border="1px solid white" _selected={{ color: "cyan" }}>
            <FaCalendar fontSize="16px" />
            <Box ml="5px">Events</Box>
          </Tab>
          <Tab border="1px solid white" _selected={{ color: "cyan" }}>
            <FaStore fontSize="16px" />
            <Box ml="5px">Store</Box>
          </Tab>
          <Tab
            border="1px solid white"
            _selected={{ color: "cyan" }}
            isDisabled
          >
            <FaLock fontSize="16px" />
            <Box ml="10px">Premium</Box>
          </Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <ProfilePosts />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel bg="black">
            <ProfileBio />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <ProfileAudio />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <ProfileEvents />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <ProfileProducts />
          </TabPanel>
          <TabPanel>6</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
