import React from "react";
import { GamesTypeContainer } from "@/components/gamesTypeContainer";
import { SimpleGrid, Heading, Container } from "@chakra-ui/react";
import { gamesType } from "@/utils/gameTypes";
import { useTranslation } from 'react-i18next';

export default function GameTypesView() {
  const { t, i18n } = useTranslation();

  const gameList = gamesType[i18n.language]
  return (
    <>
      <Container maxW="8xl">
        <Heading as="h2" variant="sectionTitle">
          {t("cardTypeGame")}
        </Heading>
      </Container>
      <Container maxW="8xl">
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
          {gameList?.map((el: any, index: number) => {
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
