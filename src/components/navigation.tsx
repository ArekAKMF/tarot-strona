'use client';
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Link,
  Container,
  FormLabel,
  Select,
  FormControl,
} from "@chakra-ui/react";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { getLangText, cookiesName } from '@/const/utils'
const cookies = new Cookies();
export const WithSubnavigation = () => {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState("pl");

  const changeLanguage = (lang: string) => {
    cookies.set(cookiesName, lang, { path: "/" });
    router.replace('/');
    setTimeout(() => {
      router.reload();
    }, 500)

  };

  useEffect(() => {
    const formContactActive = cookies.get(cookiesName);
    if (formContactActive !== undefined) {
      setSelectedLang(formContactActive);
    }

  }, []);


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
              >
                <Flex flexDirection="row" alignItems="center" justifyContent="center">
                  <Image
                    src="../../logo-biale.png"
                    width="80px"
                    padding="0 5px"
                    alt="Tarot mistyczny logo"
                    objectFit="cover"
                  />
                  <Text
                    align="center"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="40px"
                    fontWeight="bold"
                  >
                    {getLangText("pageName")}
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Box>
          <Box>
            <Flex flexDirection="column" justifyContent="center">
              <FormControl as='fieldset'>
                <FormLabel display="none" htmlFor="language">
                  {getLangText("pageLanguage")} :
                </FormLabel>
                <Select
                  placeholder=""
                  value={selectedLang}
                  onChange={(e) => changeLanguage(e.target.value)}
                  id="language"
                >
                  <option value="en">EN</option>
                  <option value="de">DE</option>
                  <option value="pl">PL</option>
                  <option value="fr">FR</option>
                  <option value="es">ES</option>
                  <option value="nl">NL</option>
                  <option value="it">IT</option>
                </Select>
              </FormControl>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
