import React from "react";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";

interface PageTitleProps {
  title: string;
  description: string;
  image?: string;
}

export const PageTitle = ({ title, description, image }: PageTitleProps) => {
  return (
    <Box marginBottom="1.5em" paddingTop="2em" paddingBottom="2em">
      <Heading as="h1" variant="pageTitle" textAlign="center">
        {title}
      </Heading>
      <Divider margin="1rem 0" />
      <Text
        fontSize={{
          base: "1.125em",
          sm: "1.0625em",
        }}
        fontWeight="600"
        fontFamily={"var(--chakra-fonts-heading)"}
        textAlign="center"
      >
        {description}
      </Text>
    </Box>
  );
};
