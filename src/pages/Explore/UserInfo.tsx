import { HStack, StackProps, Text, VStack } from "@chakra-ui/react";
import * as React from "react";

interface UserInfoProps extends StackProps {
  name: string;
}

export const UserInfo = (props: UserInfoProps) => {
  const { name, ...stackProps } = props;
  return (
    <VStack spacing="1" flex="1" {...stackProps} pb="15px">
      <HStack>
        <Text fontWeight="bold">{name}</Text>
      </HStack>
    </VStack>
  );
};
