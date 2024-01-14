import { defineStyle } from "@chakra-ui/react";

const textTheme = defineStyle({
  baseStyle: {
    fontSize: "18px",
    color: "black",
    fontWeight: "600",
  },

  variants: {

    fieldError: {
      color:"#E53E3E",
      fontSize:"16px",
      lineHeight:"20px",
      marginTop:"10px",
    },

    offertText: {
      fontSize:"18px",
      lineHeight:"26px",
      marginTop:"10px",
      fontWeight:"normal"
    }

  },

  defaultProps: {
    variant: "default",
  },
});

export default textTheme;
