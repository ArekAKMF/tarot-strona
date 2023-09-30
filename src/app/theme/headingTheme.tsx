import { defineStyle } from "@chakra-ui/react";

const h1Font = { fontSize: ["1.875em", "1.875em", "2.875em", "2.875em"] }; //30px - 46px
const h2Font = { fontSize: ["1.625em", "1.625em", "1.688em", "1.688em"] }; //26px - 27px
const h3Font = { fontSize: ["1.125em", "1.125em", "1.375em", "1.375em"] }; //18px - 22px

const headingTheme = defineStyle({
  baseStyle: {
    color: "black",
    lineHeight: "1.5",
    fontWeight: "700",
    boxSizing: "border-box",
    marginTop: "3em",
    marginBottom: "1.5em",
  },
  size: {
    h1: {
      ...h1Font,
    },
    h2: {
      ...h2Font,
    },
    h3: {
      ...h3Font,
      marginTop: "1,5em",
      marginBottom: "1.1em",
    },
  },
  variants: {
    pageTitle: {
      ...h1Font,
      marginBottom: ".5em",
      marginTop: "0",
      lineHeight: "1.2",
    },
    sectionTitle: {
      ...h2Font,
    },
    title: {
      ...h3Font,
    },
  },

  defaultProps: {
    variants: "title",
  },
});

export default headingTheme;
