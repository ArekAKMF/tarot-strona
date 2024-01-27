import {
  Container,
  Button,
  Box,
  Grid,
  Alert,
  AlertDescription,
} from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";
import React, { useState } from "react";
import { Cards } from "@/components/cards";
import { cards as cardslist } from "@/utils/cards";
import { useData } from "@/hooks/useData";
import { getLangText, getListSing } from '@/const/utils'

export default function CardGames({ title, description, gameType }: any) {
  let cartToTest = getListSing(cardslist).cards;
  const [cardTemp, setCardTemp] = useState<any>(getListSing(useData()?.allCards)?.cards);
  const [selectedCard, setSelectedCard] = useState<any>([]);
  const generateGameCards = () => {
    const cardCout = gameType?.length || 0;
    const sc = [];
    let i = 0;

    for (i; i < cardCout; i++) {
      const cardRandom = Math.floor(Math.random() * cartToTest.length);
      if (cardTemp[cardRandom]) {
        sc.push(cardTemp[cardRandom]);
        delete cardTemp[cardRandom];
      } else {
        i--;
      }
    }
    setSelectedCard(sc);
    setCardTemp([...cartToTest]);
  };

  return (
    <Container maxW="8xl">
      <PageTitle title={title} description={description} />
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
          {getLangText('cardgamesDescription')}
          <Box maxW="200" margin="10px auto 0 auto">
            <Button
              colorScheme="blue"
              size="lg"
              onClick={() => generateGameCards()}
            >
              {getLangText('cardgamesActionButton')}
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
        {selectedCard.map((el: any, index: number) => (
          <Cards
            image={el.images[0]}
            title={gameType[index].name}
            card={el.name}
            desc={""}
            description={el.desc[0]}
            key={index}
          />
        ))}
      </Grid>
    </Container>
  );
}
