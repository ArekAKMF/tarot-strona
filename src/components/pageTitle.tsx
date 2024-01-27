import React from "react";
import { Box, Divider, Heading, Text, Flex, Image, } from "@chakra-ui/react";
import Head from "next/head";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  description: string;
  card?: boolean;
  seotitle?: string;
  disableTitle?: boolean;
  imageUrl?: string;
}

export const PageTitle = ({
  title,
  subtitle,
  description,
  card = false,
  seotitle = "",
  disableTitle = false,
  imageUrl = '',
}: PageTitleProps) => {

  const styles: any = imageUrl.length === 0 ? {
    'margin-bottom': "1.5em",
    'padding-top': "2em",
    'padding-bottom': "2em",
  } : {
    'padding-top': "2em",
  }

  return (
    <>
      <Head>
        <title>{seotitle ? seotitle : title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seotitle ? seotitle : title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Box style={{ ...styles }}>
        {!disableTitle && imageUrl.length == 0 && (
          <>
            <Heading as="h1" variant="pageTitle" textAlign="center">
              {title}
              {subtitle}
            </Heading>
            <Divider margin="1rem 0" />
          </>
        )}

        {imageUrl.length > 0 && (<Flex alignItems="center" flexDirection={["column", "column", "row", "row", "row", "row"]}>
          <Box border="2px solid #eee" borderRadius="5px">
            <Image
              src={'../../karty/' + imageUrl}
              alt=""
              objectFit="cover"
              alignItems="center"
              justifyContent="center"
              padding="8px"
              width="100%"
            />
          </Box>
          <Box>
            {!disableTitle && (
              <>
                <Heading as="h1" variant="pageTitle" textAlign="center" marginTop={["20px", "20px", "0", "0", "0", "0"]}>
                  {title}
                  {subtitle}
                </Heading>
                <Divider margin="1rem 0" />
              </>
            )}
            {description?.length && (<Text
              fontSize={{
                base: "1.125em",
                sm: "1.0625em",
              }}
              fontWeight="600"
              fontFamily={"var(--chakra-fonts-heading)"}
              textAlign="center"
              padding="1em"
            >
              {description}
            </Text>)}
          </Box>
        </Flex>)}
        {imageUrl.length == 0 && description?.length > 0 && (<Text
          fontSize={{
            base: "1.125em",
            sm: "1.0625em",
          }}
          fontWeight="600"
          fontFamily={"var(--chakra-fonts-heading)"}
          textAlign="center"
        >
          {description}
        </Text>)}
      </Box>
    </>
  );
};
