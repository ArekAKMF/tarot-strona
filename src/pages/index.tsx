import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { Cards } from "@/components/cards";
import { Hero } from "@/components/hero";
import { Checkerboard } from "@/components/checkerboard";
import { GamesTypeContainer } from "@/components/gamesTypeContainer";
import { SimpleGrid, Container, Grid, Wrap, Heading } from "@chakra-ui/react";

import { gamesType, horoscop } from "@/utils/gameTypes";


export default function Home() {
  return (
    <>
      <WithSubnavigation />
      <Container maxW="8xl">
        <Hero title="Karta Dnia" description="
        
        Witaj w fascynującym świecie Tarota - tajemniczej sztuki odczytywania kart, która jest zarówno źródłem mądrości, jak i inspiracją do odkrywania mistycyzmu. Nasza strona zaprasza Cię do głębokiej podróży przez karty Tarota, gdzie archetypy, symbole i intuicja łączą się w jedno, by rzucić światło na przeszłość, teraźniejszość i przyszłość.

Tarot to narzędzie, które przekracza granice czasu i przestrzeni. To magiczne karty, które pomagają nam lepiej zrozumieć siebie i otaczający nas świat. Jako przewodnicy na tej mistycznej drodze, jesteśmy tutaj, by pomóc Ci odkryć ukryte tajemnice swojego życia oraz lepiej zrozumieć to, co przynosi przyszłość.

Przyjrzyj się uważnie kartom, zgłębiaj ich znaczenie, a w miarę jak poznasz tę sztukę, zobaczysz, jak można ją wykorzystać do przewidywania przyszłości. Tarot to lustrzane odbicie twojego wnętrza i mistyczna mapa, która pomoże Ci w nawigowaniu przez nieznane lądy.
        
        " />
        <PageTitle
          title="Krajowy System e-Faktur (KSeF)"
          description="Krajowy System e-Faktur to platforma do wystawiania i otrzymywania faktur drogą elektroniczną. Korzystaj z aplikacji KSeF i środowiska testowego, sprawdź pytania i odpowiedzi."
        />
        <Heading as="h2" variant="sectionTitle">
          Rozkład kart tarota
        </Heading>
      </Container>
      <SimpleGrid columns={1} spacing={0}>
        {gamesType.map((el: any, index: number) => {
          return (
            <GamesTypeContainer
              key={index}
              index={index}
              image="../../image.png"
              title={el.name}
              desc={el.descshort}
              url={"/wrozba/" + el.url}
              bg={el.background}
            />
          );
        })}
      </SimpleGrid>
      <Container maxW="8xl">
        {/* <Grid
          templateColumns={["2", "2", "repeat(3, 1fr)"]}
          gap={6}
          alignItems="center"
          justifyContent="center"
        >
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
            url="/"
          />
        </Grid> */}

        <Heading as="h2" variant="sectionTitle">
          Karta dnia dla znaków zodiaku
        </Heading>

        <Wrap spacing="10px 5px" justify="center">
          {horoscop.map((el: any, index: number) => {
            return (
              <Checkerboard
                key={index}
                image="../../logo-biale.png"
                title={el.name}
                url={`/znak/${el.name.toLowerCase()}`}
              />
            );
          })}
        </Wrap>

        {/* <Flex
          alignItems="center"
          justifyContent="flex-start"
          flexWrap="wrap"
          gap="1"
        >
          {horoscop.map((el: any, index: number) => {
            return (
              <Checkerboard
                key={index}
                image="https://bit.ly/dan-abramov"
                title={el.name}
                url="/"
              />
            );
          })}
        </Flex> */}
        {/* </Container> */}
        {/* <Container> */}

        {/* </Container> */}
      </Container>
    </>
  );
}
