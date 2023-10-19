import { defineStyleConfig } from "@chakra-ui/react";
import { buttonDefaultStyle } from "./buttonStyle";

const linkTheme = defineStyleConfig({
  baseStyle: {
    ...buttonDefaultStyle,
  },

  variants: {
    default: {
      color: "primaryBgColorHover",
      backgroundColor: "primaryBgColorHover",
      textDecoration: "underline",
      _hover: {
        color: "primaryBgColorHover",
        textDecoration: "none",
      },
    },

    primary: {
      color: "white",
      borderColor: "primaryColor",
      backgroundColor: "primaryColor",
      _hover: {
        backgroundColor: "primaryBgColorHover",
        borderColor: "primaryColor",
        color: "white",
        textDecoration: "none",
      },
    },

    secondary: {
      backgroundColor: "white",
      color: "secondaryColor",
      borderColor: "secondaryColor",
      borderWidth: "1px",
      borderStyle: "solid",
      _hover: {
        bg: "secondaryColor",
        borderColor: "secondaryBgColorHover",
        color: "white",
        textDecoration: "none",
      },
      _active: {
        boxShadow: "0 0 0 .1rem rgba(1,84,151,.5)",
      },
    },
    outline: {
      backgroundColor: "transparent",
      color: "white",
      border: "2px solid white",
      textAlign: "center",
      _hover: {
        bg: "secondaryColor",
        color: "white",
        borderColor: "secondaryColor",
        textDecoration: "none",
      },
    },
    empty: {
      backgroundColor: "transparent",
      color: "secondaryColor",
      textAlign: "center",
      textDecoration: "underline",
      _hover: {
        color: "secondaryBgColorHover",
        textDecoration: "none",
      },
    },
    footerLink: {
      backgroundColor: "transparent",
      color: "white",
      textAlign: "center",
      textDecoration: "underline",
      _hover: {
        color: "white",
        textDecoration: "none",
      },
    },

    breadcrumb: {
      backgroundColor: "transparent",
      color: "linkColor",
      fontSize: "0.875em",
      textAlign: "center",
      textDecoration: "underline!important",
      padding: 0,
      _hover: {
        color: "linkColorHover",
        textDecoration: "none!important",
      },
    },

    link: {
      backgroundColor: "transparent",
      padding:0,
      margin:0,
      fontSize: "0.875em",
    },
    singLink:{
      padding:0,
      margin:0,
      color: "primaryBgColorHover",
      fontSize:"32px",
      lineHeight: "32px",
      fontWeight:"bold"
    }
  },

  defaultProps: {
    variant: "primary",
  },
});

export default linkTheme;
