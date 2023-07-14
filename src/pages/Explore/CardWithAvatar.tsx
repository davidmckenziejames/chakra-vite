import {
  Avatar,
  AvatarProps,
  Box,
  Flex,
  FlexProps,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

interface CardWithAvatarProps extends FlexProps {
  avatarProps: AvatarProps;
  coverPhoto: string;
}

export const CardWithAvatar = (props: CardWithAvatarProps) => {
  const { children, avatarProps, coverPhoto, ...rest } = props;
  return (
    <Flex
      direction="column"
      alignItems="center"
      rounded="md"
      pt="20px"
      pb="20px"
      maxW="200px"
      px="10px"
      position="relative"
      bg={useColorModeValue("white", "gray.700")}
      shadow={{ md: "base" }}
      {...rest}
    >
      <Box
        position="absolute"
        inset="0"
        height="20"
        backgroundImage={`url(${coverPhoto})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        roundedTop="inherit"
      />
      <Avatar size="xl" {...avatarProps} />
      {children}
    </Flex>
  );
};
