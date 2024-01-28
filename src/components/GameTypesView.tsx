import React from "react";
import { GamesTypeContainer } from "@/components/gamesTypeContainer";
import { SimpleGrid, Heading, Container } from "@chakra-ui/react";
import { gamesType } from "@/utils/gameTypes";
import { getLangText, getListSing } from '@/const/utils'

export default function GameTypesView() {
  return (
    <>
      <Container maxW="8xl">
        <Heading as="h2" variant="sectionTitle">
          {getLangText("cardTypeGame")}
        </Heading>
      </Container>
      <Container maxW="8xl">
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
          {getListSing(gamesType).map((el: any, index: number) => {
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
      </Container>
    </>
  );
}
