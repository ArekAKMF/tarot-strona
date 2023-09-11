"use client";

import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

export const WithSubnavigation = () => {
  const { isOpen, onToggle } = useDisclosure();

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
              src="https://bit.ly/dan-abramov"
              width="80px"
              padding="0 5px"
              alt="Dan Abramov"
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
