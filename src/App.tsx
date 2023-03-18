import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const App = () => {
  return (
    <Box p={4}>
      <Heading>Hey there</Heading>
      <Text>
        Welcome to{" "}
        <Text as="span" color="primary.600">
          your app.
        </Text>
      </Text>
      <Text>Isn't Chakra awesome?</Text>
    </Box>
  );
};
