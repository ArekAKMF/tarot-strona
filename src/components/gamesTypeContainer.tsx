import React from "react";
import { Heading, Image, Link } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface GamesTypeContainerProps {
  image: string;
  title: string;
  url: string;
  desc: string;
  bg: string;
  index: number;
}

export const GamesTypeContainer = ({
  image,
  title,
  url,
  desc,
}: GamesTypeContainerProps) => {
  return (
    <Box
      margin="0"
      width="100%"
      key={url}
      as={Link}
      href={url}
      title={title}
      variant="link"
      border="1px solid #aaa"
      padding="8px"
    >
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        maxW="8xl"
        flexWrap="nowrap"
        margin="0 auto"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Box w={["auto", "auto", "70%", "70%", "100%", "100%"]}>
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
          />
        </Box>
        <Box maxW={["100%", "100%", "100%", "60%" , "60%" , "60%"]}>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"

          >
            <Heading
              as="h3"
              variant="title"
              marginTop="0"
              textDecoration="none!important"
              marginBottom="0.5em"
              padding="0 0 0 10px"
            >
              {title}
            </Heading>
            <Box>
              <Text
                fontSize="lg"
                padding="10px"
                textAlign="left"
              >
                {desc}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
