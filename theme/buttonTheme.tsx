import { defineStyle } from "@chakra-ui/react";
import { buttonDefaultStyle } from "./buttonStyle";

const buttonTheme = defineStyle({
  baseStyle: {
    ...buttonDefaultStyle,
  },
  variants: {
    primary: {
      color: "white",
      borderColor: "primaryColor",
      backgroundColor: "primaryBgColor",
      _hover: {
        backgroundColor: "primaryBgColorHover",
        borderColor: "primaryBgColorHover",
        color: "white",
        textDecoration: "none",
      },
    },
    secondary: {
      backgroundColor: "white",
      color: "black",
      borderColor: "secondaryBB",
      border: "2px",
      borderStyle: "solid",
      _hover: {
        backgroundColor: "secondaryBgColorHover",
        borderColor: "secondaryBgColor",
        color: "white",
        textDecoration: "none",
      },
    }
  },
  defaultProps: {
    variant: "primary",
  },
});

export default buttonTheme;
