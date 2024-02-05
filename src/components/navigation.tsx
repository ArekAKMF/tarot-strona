import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Link,
  Container,
} from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';
import LanguageBox from '@/components/LanguageBox'
export const WithSubnavigation = () => {
  const { t } = useTranslation();

  return (
    <Box borderBottom="2px solid #aaa">
      <Container maxW="8xl">
        <Flex
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Flex flexDirection="row">
              <Link
                variant="empty"
                href="/"
                textDecoration="none!important"
                padding="0"
                title={t("pageName")}
              >
                <Flex flexDirection="row" alignItems="center" justifyContent="center">
                  <Image
                    src="../../logo-biale.png"
                    width="80px"
                    padding="0 5px"
                    alt="Logo"
                    objectFit="cover"
                  />
                  <Text
                    align="center"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="40px"
                    fontWeight="bold"
                  >
                    {t("pageName")}
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Box>
          <Box>
            <LanguageBox />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
