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
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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
import { cards as cardslist } from "@/utils/cards";

export default function Home() {
  const cardTemp = cardslist;
  let cartToTest = cardslist;
  const [activeElement, setActiveElement] = useState<any>({});
  const [selectedCard, setSelectedCard] = useState<any>([]);
  const [gameType, setGametype] = useState<any>({});

  const router = useRouter();

  const generateGameCards = () => {
    const cardCout = activeElement?.cardCount || 0;
    const sc = [];
    let i = 0;

    for (i; i < cardCout; i++) {
      const cardRandom = Math.floor(Math.random() * cartToTest.length);
      if (cartToTest[cardRandom]) {
        sc.push(cartToTest[cardRandom]);
        delete cartToTest[cardRandom];
      } else {
        i--;
      }
    }
    setSelectedCard(sc);
    cartToTest = cardTemp;
  };

  useEffect(() => {
    if (router?.asPath) {
      const gt =
        router?.asPath.split("/")[router?.asPath.split("/").length - 1];

      setGametype(gt);
      const selectedRow = gamesType.find((el) => el.url.includes(gt));
      if (selectedRow) setActiveElement(selectedRow);
    }
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

        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="auto"
          marginBottom="40px"
          borderRadius="25"
        >
          <AlertDescription maxWidth="lg">
            Przed przystąpieniem do rozkładania kart należy się wyciszyć można
            zapalić świeczkę i zastanowić nad zadanym pytaniem.
            <Box maxW="200" margin="10px auto 0 auto">
              <Button
                colorScheme="blue"
                size="lg"
                onClick={() => generateGameCards()}
              >
                Rozłóż karty
              </Button>
            </Box>
          </AlertDescription>
        </Alert>

        <Grid
          templateColumns={["2", "2", "repeat(3, 1fr)"]}
          gap={6}
          justifyContent="center"
          alignItems="stretch"
        >
          {activeElement &&
            selectedCard.map((el: any, index: number) => (
              <Cards
                image="https://bit.ly/dan-abramov"
                title={activeElement?.cardDesc[index].name}
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
