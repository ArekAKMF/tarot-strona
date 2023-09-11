import {
  Container,
  Text,
  Heading,
  Highlight,
  Wrap,
  Link,
  Button,
  Box,
  Grid,
} from "@chakra-ui/react";
import { PageTitle } from "@/app/components/pageTitle";
import { WithSubnavigation } from "@/app/components/navigation";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import Head from "next/head";

import { Cards } from "@/app/components/cards";
import { Hero } from "@/app/components/hero";
import { Breadcrumbs } from "@/app/components/breadcrumb";
import { Checkerboard } from "@/app/components/checkerboard";

import { gamesType, horoscop } from "../../utils/gamestype";
import { cards as cardslist } from "../../utils/cards";

export default function Home() {
  const [activeElement, setActiveElement] = useState<any>({});
  const [selectedCard, setSelectedCard] = useState<any>({});

  const router = useRouter();

  useEffect(() => {
    if (router?.asPath) {
    }
    const selected =
      router?.asPath.split("/")[router?.asPath.split("/").length - 1];

    const selectedRow = gamesType.find((el) => el.url.includes(selected));

    const cardCout = selectedRow?.cardCount || 0;
    const sc = [];

    if (selectedRow) setActiveElement(selectedRow);

    let i = 0;

    for (i; i < cardCout; i++) {
      const cardRandom = Math.floor(Math.random() * cardslist.length);
      if (cardslist[cardRandom]) {
        sc.push(cardslist[cardRandom]);
        delete cardslist[cardRandom];
      } else {
        i--;
      }
    }
    setSelectedCard(sc);
  }, [router?.asPath]);

  return (
    <>
      <Head>
        <title>Rozkład {activeElement?.name}</title>
        <meta name="description" content={activeElement?.descshort} />
      </Head>
      <WithSubnavigation />
      <Container maxW="8xl">
        <PageTitle
          title={activeElement?.name}
          description={activeElement?.desc}
        />

        <Text>
          Przed przystąpieniem do rozkładania kart należy się wyciszyć można
          zapalić świeczkę i zastanowić nad zadanym pytaniem.
        </Text>
        <Box maxW="200" margin="0 auto 40px auto">
          <Button variant="ghost">Rozłóż karty</Button>
        </Box>

        <Grid
          templateColumns={["2", "2", "repeat(3, 1fr)"]}
          gap={6}
          alignItems="flex-start"
          justifyContent="center"
        >
          {selectedCard &&
            activeElement?.cardDesc?.map((el: any, index: number) => (
              <Cards
                image="https://bit.ly/dan-abramov"
                title={el.name}
                card={selectedCard[index]?.name}
                desc={el.descshort}
                description={selectedCard[index]?.day}
                url="/"
                key={index}
              />
            ))}
        </Grid>
      </Container>
    </>
  );
}
