"use client";
import {
  Container,
  Text,
  Heading,
  Highlight,
  Button,
  Wrap,
  Link,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import { cards } from "@/utils/cards";
import SingTypeView from "@/components/SingTypeView";

export default function Home() {

  const [selectedCard, setSelectedCard] = useState<any>({
    love: [],
    health: "",
    jobs: "",
    desc: "",
    day: "",
    images: []
  })

  const router = useRouter();

  useEffect(() => {
    if (router?.asPath) {
      const selected =
        router?.asPath.split("/")[2];
      const activeEl = cards.find((el) => el.url === selected);
      setSelectedCard(activeEl);
    }
  }, [router?.asPath]);

  return (
    <>
      <WithSubnavigation />
      <Container maxW="8xl">
        <PageTitle
          title={selectedCard?.name}
          description={selectedCard?.desc}
          disableTitle={false}
          imageUrl={selectedCard?.images[0]}
        />
      </Container>
      <Container maxW="8xl">

        <Heading
          as="h3"
          variant="title"
          marginTop="0"
          textDecoration="none!important"
          marginBottom="0.5em"
        >
          Miłość
        </Heading>
        <Text fontSize="lg" padding="10px 0">
          {selectedCard?.love[0]}
        </Text>
        <Heading
          as="h3"
          variant="title"
          marginTop="0"
          textDecoration="none!important"
          marginBottom="0.5em"
        >
          Zdrowie
        </Heading>
        <Text fontSize="lg" padding="10px 0">
          {selectedCard?.health[0]}
        </Text>
        <Heading
          as="h3"
          variant="title"
          marginTop="0"
          textDecoration="none!important"
          marginBottom="0.5em"
        >
          Praca
        </Heading>
        <Text fontSize="lg" padding="10px 0">
          {selectedCard?.jobs[0]}
        </Text>


        <Heading as="h2" variant="sectionTitle">
          Zamów własne czytanie
        </Heading>


      </Container>
      <SingTypeView />
    </>
  );
}
