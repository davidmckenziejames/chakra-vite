import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import Header from "../Home/Sections/Header";
import ProfileSettings from "./Panels/ProfileSettings";
import AccountSettings from "./Panels/AccountSettings";
import BillingSettings from "./Panels/BillingSettings";
import Memberships from "./Panels/Memberships";
import Notifications from "./Panels/Notifications";

export default function Settings() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabProps = {
    as: Button,
    variant: "unstyled",
    fontSize: "16px",
    fontWeight: "500",
    _selected: { color: "#8338ec", fontWeight: "500", bg: "white" },
  };
  const panelProps = { bg: "white", mt: "20px", borderRadius: "15px" };

  return (
    <Box>
      <Header />
      <Flex
        bg="gray.200"
        mx="auto"
        py="0px"
        px="0px"
        flexDirection="column"
        align="center"
        minHeight="100vh"
      >
        <Tabs
          index={tabIndex}
          onChange={setTabIndex}
          pt="15px"
          variant="soft-rounded"
          colorScheme="green"
          w={{ base: "90%", sm: "600px" }}
        >
          <Box bg="white" px="10px" py="10px" borderRadius="15px">
            <TabList>
              <Tab {...tabProps}>Profile</Tab>
              <Tab {...tabProps}>Account</Tab>
              <Tab {...tabProps}>Memberships</Tab>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="unstyled"
                  fontSize="16px"
                  fontWeight="500"
                  ml="16px"
                  rightIcon={<FaChevronDown size={12} />}
                >
                  More
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setTabIndex(3)}>Billing</MenuItem>
                  <MenuItem onClick={() => setTabIndex(4)}>
                    Notifications
                  </MenuItem>
                </MenuList>
              </Menu>
            </TabList>
          </Box>
          <TabPanels>
            <TabPanel {...panelProps}>
              <ProfileSettings />
            </TabPanel>
            <TabPanel {...panelProps}>
              <AccountSettings />
            </TabPanel>
            <TabPanel p="0">
              <Memberships />
            </TabPanel>
            <TabPanel {...panelProps}>
              <BillingSettings />
            </TabPanel>
            <TabPanel {...panelProps}>
              <Notifications />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}
