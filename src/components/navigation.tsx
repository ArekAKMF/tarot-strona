"use client";

import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import Logo from '@/images/index'

export const WithSubnavigation = () => {

  return (
    <Box>
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Link
            variant="empty"
            href="/"
            textDecoration="none!important"
            padding="0"
          >
            <Image
              src="../../logo-biale.png"
              width="80px"
              padding="0 5px"
              alt="Tarot mistyczny logo"
              objectFit="cover"
            />
          </Link>
        </Box>
        <Box>
          <Link
            variant="empty"
            href="/"
            textDecoration="none!important"
            padding="0"
          >
            <Text align="center" justifyContent="center" alignItems="center">
              Tarot Mistyczny
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
