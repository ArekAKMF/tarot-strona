import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { Cards } from "@/components/cards";
import { Hero } from "@/components/hero";
import { Checkerboard } from "@/components/checkerboard";
import { GamesTypeContainer } from "@/components/gamesTypeContainer";
import { SimpleGrid, Container, Grid, Wrap, Heading } from "@chakra-ui/react";

import { gamesType, horoscop } from "../utils/gamestype";

export const getStaticProps: GetStaticProps<{
  response: any;
}> = async () => {
  const response = {};
  return { props: { response } };
};

export default function Home({
  response,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <WithSubnavigation />
      <Container maxW="8xl">
        <Hero title="Karta Dnia" description="disudisudisuiduddsu wifp ofdfoidpoqiqifpodifdipodaiopif"  />
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
              image="https://bit.ly/dan-abramov"
              title={el.name}
              desc={el.descshort}
              url={"/rozklad/" + el.url}
              bg={el.background}
            />
          );
        })}
      </SimpleGrid>
      <Container maxW="8xl">
        <Grid
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
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
            url="/"
          />
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
            url="/templates"
          />
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
            url="/templates"
          />
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
            url="/templates"
          />
        </Grid>

        <Heading as="h2" variant="sectionTitle">
          Karta dnia dla znaków zodiaku
        </Heading>

        <Wrap spacing="10px 5px" justify="center">
          {horoscop.map((el: any, index: number) => {
            return (
              <Checkerboard
                key={index}
                image="assets/ryby.svg"
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
