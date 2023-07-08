import React from "react";
import { Button, Box, useStyleConfig } from "@chakra-ui/react";

type ButtonProps = {
  variant?: string;
  children?: React.ReactNode;
};

const MadButton: React.FC<ButtonProps> = ({ variant = "btn", children }) => {
  const styles = useStyleConfig("Button", { variant });

  return (
    <Box as="button" sx={styles}>
      {children}
    </Box>
  );
};

export default MadButton;
