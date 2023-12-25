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
  bg,
  index,
}: GamesTypeContainerProps) => {
  return (
    <Box
      margin="0"
      padding="0"
      width="100%"
      background={bg}
      key={url}
      as={Link}
      href={url}
      title={title}
      variant="link"
    >
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        maxW="8xl"
        flexWrap="nowrap"
        margin="0 auto"
        flexDirection={["column", "column", index % 2 ? "row-reverse" : "row", index % 2 ? "row-reverse" : "row", index % 2 ? "row-reverse" : "row", index % 2 ? "row-reverse" : "row"]}
      >
        <Box w={["auto", "auto", "70%", "70%", "70%", "70%"]}>
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            alignItems="center"
            justifyContent="center"
            padding="8px"
            width="100%"
          />
        </Box>
        <Box>
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
                color="#fff"
                textShadow="1px 1px #a0a0a0"
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
