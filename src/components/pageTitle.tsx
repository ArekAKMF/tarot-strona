"use client";
import React from "react";
import { Box, Divider, Heading, Text, Flex, Image, } from "@chakra-ui/react";

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
    'marginBottom': "1.5em",
    'paddingTop': "2em",
    'paddingBottom': "2em",
  } : {
    'paddingTop': "2em",
  }

  return (
    <>
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
