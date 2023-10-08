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
  index: number
}

export const GamesTypeContainer = ({
  image,
  title,
  url,
  desc,
  bg,
  index
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
        flexDirection={index % 2 ? "row-reverse" : "row"}
        alignItems="center"
        justifyContent="flex-start"
        maxW="6xl"
        flexWrap="nowrap"
        margin="0 auto"
        height="500px"
      >
        <Box>
          <Image
            src={image}
            alt="Dan Abramov"
            objectFit="cover"
            alignItems="center"
            justifyContent="center"
            padding="8px"
            width={["auto", "auto", "auto", "500px", "500px", "500px"]}
            height="500px"
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
              <Link href={url} title={title} variant="link">
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
