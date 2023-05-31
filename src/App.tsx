import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import React from "react";

export const App = () => {
  return (
    <Stack p={4}>
      <Heading>Hey there</Heading>
      <Text>
        Welcome to
        your app.
      </Text>
      <Text>Isn't Chakra {" "}
        <Text as="span" color="pink.600">
          awesome?
        </Text></Text>
    </Stack>
  );
};
