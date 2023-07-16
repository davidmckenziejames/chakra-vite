import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu } from "react-icons/fi";
import { Logo } from "./Logo";
import { ResourcesPopover } from "./ResourcesPopover";

export default function Nav1() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <>
                <ButtonGroup variant="link" spacing="8">
                  <Button>Product</Button>
                  <Button>Pricing</Button>
                  <ResourcesPopover />
                  <Button>Support</Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
