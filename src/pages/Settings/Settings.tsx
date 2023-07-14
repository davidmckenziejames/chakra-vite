import Header from "../Home/Sections/Header";
import {
  Box,
  Flex,
  Button,
  Select,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Text,
  Card,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import ProfileSettings from "./Panels/ProfileSettings";
import AccountSettings from "./Panels/AccountSettings";
import BillingSettings from "./Panels/BillingSettings";
import Memberships from "./Panels/Memberships";
import Notifications from "./Panels/Notifications";

export default function Settings() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleMenuItemClick = (index) => {
    setTabIndex(index);
  };

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
          onChange={handleTabsChange}
          pt="15px"
          variant="soft-rounded"
          colorScheme="green"
          w={{ base: "90%", sm: "600px" }}
        >
          <Box bg="white" px="10px" py="10px" borderRadius="15px">
            <TabList>
              <Tab
                as={Button}
                variant="unstyled"
                fontSize="18px"
                fontWeight="500"
                _selected={{ color: "#8338ec", fontWeight: "500", bg: "white" }}
              >
                Profile
              </Tab>
              <Tab
                as={Button}
                variant="unstyled"
                fontSize="18px"
                fontWeight="500"
                _selected={{ color: "#8338ec", fontWeight: "500" }}
              >
                Account
              </Tab>

              <Tab
                fontSize="18px"
                as={Button}
                variant="unstyled"
                fontWeight="500"
                _selected={{ color: "#8338ec", fontWeight: "500" }}
              >
                Memberships
              </Tab>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="unstyled"
                  fontSize="18px"
                  fontWeight="500"
                  ml="16px"
                  rightIcon={<FaChevronDown size={12} />}
                >
                  More
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleMenuItemClick(3)}>
                    Billing
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick(4)}>
                    Notifications
                  </MenuItem>
                </MenuList>
              </Menu>
            </TabList>
          </Box>

          <TabPanels>
            <TabPanel bg="white" mt="20px" borderRadius="15px">
              <ProfileSettings />
            </TabPanel>
            <TabPanel bg="white" mt="20px" borderRadius="15px">
              <AccountSettings />
            </TabPanel>
            <TabPanel bg="white" mt="20px" borderRadius="15px">
              <Memberships />
            </TabPanel>
            <TabPanel bg="white" mt="20px" borderRadius="15px">
              <BillingSettings />
            </TabPanel>
            <TabPanel bg="white" mt="20px" borderRadius="15px">
              <Notifications />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}
