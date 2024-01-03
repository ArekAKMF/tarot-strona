import { Container, Text, Heading, Link } from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";

import React, { useState, useEffect } from "react";
import useFirebaseHook from '@/hooks/useFirebaseHook';

export default function SingGames({
  title,
  description,
  currentDate,
  section,
}: any) {
  const [selectedCard, setSelectedCard] = useState<any>();
  const { data, loading, error, getDataFromFirebase } = useFirebaseHook();
  useEffect( () => {
    const setData = () => {
      getDataFromFirebase({section:title, currentDate})
      data && setSelectedCard(data);
    }
    setData();
  }, [getDataFromFirebase, title, currentDate, data])

  return (
    <Container maxW="8xl">
      <PageTitle
        title={
          "Karta dnia tarot " +
          selectedCard?.name +
          " dla znaku zodiaku " +
          title
        }
        subtitle={" na dzień " + currentDate + "r."}
        description={description}
        seotitle={"Karta dnia tarot dla znaku zodiaku " + title}
      />
      <Heading
        as="h3"
        variant="subtitle"
        marginTop="0"
        textDecoration="none!important"
        textAlign="center"
      >
        <Link
          href={`/karta/${selectedCard?.url?.toLowerCase()}`}
          variant="singLink"
        >
          Karta {selectedCard?.name}
        </Link>{" "}
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
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
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
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
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
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {selectedCard?.jobs}
      </Text>
    </Container>
  );
}
