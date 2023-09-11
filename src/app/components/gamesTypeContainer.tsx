import React from "react";
import { Heading, Image, Link } from "@chakra-ui/react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";

interface GamesTypeContainerProps {
  image: string;
  title: string;
  url: string;
  desc: string;
  bg: string;
}

export const GamesTypeContainer = ({
  image,
  title,
  url,
  desc,
  bg,
}: GamesTypeContainerProps) => {
  return (
    <Box
      margin="0"
      padding="0"
      width="100%"
      background={bg}
    >
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        maxW="6xl"
        flexWrap="nowrap"
        margin="0 auto"
      >
        <Box>
          <Image
            src={image}
            alt="Dan Abramov"
            objectFit="cover"
            alignItems="center"
            justifyContent="center"
            padding="8px"
            width="500px"
            height="200px"
          />
        </Box>
        <Box>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading
              as="h3"
              variant="title"
              marginTop="0"
              textDecoration="none!important"
              marginBottom="0.5em"
              padding="0 0 0 10px"
            >
              <Link href={url} title={title} variant="empty">
                {title}
              </Link>
            </Heading>
            <Box>
              <Text fontSize="lg" padding="10px">
                {desc}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
