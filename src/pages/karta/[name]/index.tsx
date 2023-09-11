import {
  Container,
  Text,
  Heading,
  Highlight,
  Button,
  Wrap,
  Link,
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

import { gamesType, horoscop } from "../../../utils/gamestype";
import { cards } from "../../../utils/cards";

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
    const selected =
      router?.asPath.split("-")[router?.asPath.split("-").length - 1];

    console.log("wybrany ", selected);

    const ns = gamesType.map((el) => el.name);

    console.log(ns, "ns");

    const selectedRow = horoscop.find(
      (el) => el.name.toLowerCase() == selected
    );

    if (selectedRow) setActiveElement(selectedRow);

    const cardRandom = Math.floor(Math.random() * cards.length + 1);

    cards[cardRandom];
    setActualDate(getDate());
    setSelectedCard(cards[cardRandom]);
  }, [router?.asPath]);

  // const generateHeader = (val: string) => (
  //   <Heading
  //   as="h3"
  //   variant="subtitle"
  //   marginTop="0"
  //   textDecoration="none!important"
  //   marginBottom="0.5em"
  //   textAlign="center"
  // >
  //   <Highlight
  //     query={['Lew']}
  //     styles={{ px: "1", py: "1"}}
  //   >
  //   Karta dnia "{selectedCard?.name}" dla znaku zodiaku {" "}
  //   {activeElement?.name} na dzień {actualDate}
  //   </Highlight>
  // </Heading>
  // )

  const descText = () => `Karta dnia ${selectedCard?.name} dla znaku zodiaku
  ${activeElement?.name} na dzień ${actualDate}`;

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

        <Button variant="empty">Rozłóż karty</Button>

        <Heading
          as="h3"
          variant="subtitle"
          marginTop="0"
          textDecoration="none!important"
          marginBottom="0.5em"
          textAlign="center"
        >
          {/* <Highlight
            query={[
              "Błazen",
              "Czarownik",
              "Najwyższa Kapłanka",
              "Cesarzowa",
              "Cesarz",
              "Najwyższy Kapłan",
              "Kochankowie",
              "Rydwan",
              "Moc",
              "Pustelnik",
              "Koło Fortuny",
              "Sprawiedliwość",
              "Wisielec",
              "Śmierć",
              "Umiar",
              "Diabeł",
              "Wieża",
              "Gwiazda",
              "Księżyc",
              "Słońce",
              "Sąd",
              "Świat",
              "As Różdżek",
              "Dwójka Różdżek",
              "Trójka Różdżek",
              "Czwórka Różdżek",
              "Piątka Różdżek",
              "Szóstka Różdżek",
              "Siódemka Różdżek",
              "Ósemka Różdżek",
              "Dziewiątka Różdżek",
              "Dziesiątka Różdżek",
              "Walet Różdżek",
              "Rycerz Różdżek",
              "Królowa Różdżek",
              "Król Różdżek",
              "As Pucharów",
              "Dwójka Pucharów",
              "Trójka Pucharów",
              "Czwórka Pucharów",
              "Piątka Pucharów",
              "Szóstka Pucharów",
              "Siódemka Pucharów",
              "Ósemka Pucharów",
              "Dziewiątka Pucharów",
              "Dziesiątka Pucharów",
              "Walet Pucharów",
              "Rycerz Pucharów",
              "Królowa Pucharów",
              "Król Pucharów",
              "As Mieczy",
              "Dwójka Mieczy",
              "Trójka Mieczy",
              "Czwórka Mieczy",
              "Piątka Mieczy",
              "Szóstka Mieczy",
              "Siódemka Mieczy",
              "Ósemka Mieczy",
              "Dziewiątka Mieczy",
              "Dziesiątka Mieczy",
              "Walet Mieczy",
              "Rycerz Mieczy",
              "Królowa Mieczy",
              "Król Mieczy",
              "As Pentagramów",
              "Dwójka Pentagramów",
              "Trójka Pentagramów",
              "Czwórka Pentagramów",
              "Piątka Pentagramów",
              "Szóstka Pentagramów",
              "Siódemka Pentagramów",
              "Ósemka Pentagramów",
              "Dziewiątka Pentagramów",
              "Dziesiątka Pentagramów",
              "Walet Pentagramów",
              "Rycerz Pentagramów",
              "Królowa Pentagramów",
              "Król Pentagramów",
            ]}
            styles={{ px: "1", py: "1", bg: "orange", borderRadius: "10" }} href="/"
          >
            {descText()}
          </Highlight> */}
          Karta dnia{" "}
          <Link href={`/karta/${selectedCard?.name?.toLowerCase()}`} variant="empty">
            {selectedCard?.name}
          </Link>{" "}
          dla znaku zodiaku {activeElement?.name} na dzień {actualDate}
        </Heading>

        <Text fontSize="lg" padding="10px 0">
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
          {selectedCard?.healt}
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
          {selectedCard?.job}
        </Text>

        <Heading as="h2" variant="sectionTitle">
          Karta dnia dla znaków zodiaku
        </Heading>

        <Wrap spacing="10px" justify="center">
          {horoscop.map((el: any, index: number) => {
            return (
              <Checkerboard
                key={index}
                image="assets/ryby.svg"
                title={el.name}
                url={`karta-dnia-dla-znaku-zodiaku-${el.name.toLowerCase()}`}
              />
            );
          })}
        </Wrap>

        <Heading as="h2" variant="sectionTitle">
          Zamów własne czytanie
        </Heading>
      </Container>
    </>
  );
}
