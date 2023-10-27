import React from "react";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  description: string;
  card?: boolean;
  seotitle?: string;
  disableTitle?: boolean;
}

export const PageTitle = ({
  title,
  subtitle,
  description,
  card = false,
  seotitle = "",
  disableTitle = false,
}: PageTitleProps) => {
  return (
    <>
      <Head>
        <title>{seotitle ? seotitle : title}</title>
        <meta name="description" content={description} />
      </Head>
      <Box marginBottom="1.5em" paddingTop="2em" paddingBottom="2em">
        {!disableTitle && (
          <>
            <Heading as="h1" variant="pageTitle" textAlign="center">
              {title}
              {subtitle}
            </Heading>
            <Divider margin="1rem 0" />
          </>
        )}

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
    </>
  );
};
