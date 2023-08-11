import { Box, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export default function ManageButton() {
  return (
    <>
      <Menu>
        <MenuButton>
          <Box
            p="0"
            display={"flex"}
            fontSize={"14px"}
            border="2px black solid"
            fontWeight={"600"}
            px="6px"
            py="3px"
            gap="5px"
            alignItems={"center"}
            borderRadius={"5px"}
          >
            Manage
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem>Change Level</MenuItem>
          <MenuItem>Cancel</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
