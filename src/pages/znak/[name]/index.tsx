import {
  Container,
  Text,
  Heading,
  Highlight,
  Wrap,
  Link,
  Box,
} from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import Head from "next/head";

import { Cards } from "@/components/cards";
import { Hero } from "@/components/hero";
import { Breadcrumbs } from "@/components/breadcrumb";
import { Checkerboard } from "@/components/checkerboard";

import { gamesType, horoscop } from "@/utils/gameTypes";
import { cards } from "@/utils/cards";

export default function Home() {
  const [activeElement, setActiveElement] = useState({ name: "", desc: "" });
  const [selectedCard, setSelectedCard] = useState<any>({});
  const [actualDate, setActualDate] = useState<any>("");

  const router = useRouter();

  const getDate = () => {
    const date = new Date();

    return (
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };

  useEffect(() => {
    if (router?.asPath) {
    }

    const selected = router?.asPath.split("/")[2];

    const ns = gamesType.map((el) => el.name);

    const selectedRow = horoscop.find(
      (el) => el.name.toLowerCase() == selected
    );

    if (selectedRow) setActiveElement(selectedRow);

    const cardRandom = Math.floor(Math.random() * cards.length + 1);

    cards[cardRandom];
    setActualDate(getDate());
    setSelectedCard(cards[cardRandom]);
  }, [router?.asPath]);

  const descText = () => `Karta dnia ${selectedCard?.name} na dzień ${actualDate}`;

  return (
    <>
      <Head>
        <title>
          Karta dnia {selectedCard?.name} dla znaku zodiaku{" "}
          {activeElement?.name} na dzień {actualDate}
        </title>
        <meta name="description" content={activeElement?.desc} />
      </Head>
      <WithSubnavigation />
      <Container maxW="8xl">
        <PageTitle
          title={activeElement?.name}
          description={activeElement?.desc}
        />

        <Heading
          as="h3"
          variant="subtitle"
          marginTop="0"
          textDecoration="none!important"
          marginBottom="0.5em"
          textAlign="center"
        >
          Karta dnia{" "}
          <Link href={`/karta/${selectedCard?.name?.toLowerCase()}`} variant="singLink">
            {selectedCard?.name}
          </Link>{" "}
          na dzień {actualDate}
        </Heading>

        <Text fontSize="lg" padding="10px 0" marginBottom="20px">
          {selectedCard?.day}
        </Text>

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
          {selectedCard?.love}
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
          {selectedCard?.health}
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
          {selectedCard?.jobs}
        </Text>


        <Box marginTop="40px">
          <Heading as="h2" variant="sectionTitle">
            Zamów własne czytanie
          </Heading>

        </Box>



      </Container>
    </>
  );
}
