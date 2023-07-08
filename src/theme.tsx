import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        color: "rgb(16,24,50)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
        padding: ".8em 1em",
        letterSpacing: "0.075em",
        textTransform: "uppercase",
        position: "relative",
        fontSize: "1.13em",
        fontWeight: "bold",
        cursor: "pointer",
        zIndex: "1",
        borderRadius: "md",
        border: "3px solid",
        borderColor: "blue.500",
        "&:hover": {
          transform: "translate(0.5em, -0.5em)",
          boxShadow: "lg",
          bgColor: "white",
        },
      },
      variants: {
        btn: {
          borderColor: "blue.500",
        },
        cta: {
          bgGradient: "linear(to-r, blue.500, pink.500)",
          color: "white",
          borderColor: "transparent",
        },
        bg: {
          background: "none",
          borderColor: "rgb(16,24,50)",
          color: "rgb(16,24,50)",
        },
      },
    },
  },
});

export default theme;
