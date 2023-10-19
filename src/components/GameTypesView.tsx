import React from "react";
import { GamesTypeContainer } from "@/components/gamesTypeContainer";
import { SimpleGrid, Heading, Container } from "@chakra-ui/react";
import { gamesType } from "@/utils/gameTypes";

export default function GameTypesView() {
  return (
    <>
      <Container maxW="8xl">
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
              url={el.url}
              bg={el.background}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
}
