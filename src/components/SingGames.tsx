import { Container, Text, Heading, Link } from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";

import React, { useState, useEffect } from "react";
import { cards } from "@/utils/cards";

import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "@/firebase/config";

import { useData } from '@/hooks/useData'

const getDataTest = async () => {
  const querySnapshot = await getDocs(collection(db, "karty"));
  const dataList: any = [];
  querySnapshot.forEach((doc) => {
    dataList.push(doc.data());
  });

  console.log(dataList, "dataList");

  //   const unsub = onSnapshot(doc(db, "karty"), (doc) => {
  //     console.log("Current data: ", doc.data());
  // });
};

const setDataDay = async () => {
  // const querySnapshot = await setDoc(collection(db, "karty"));
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data(), 'DATA')
  // });
};

export default function SingGames({ title, description }: any) {

  const data = useData();

  const [selectedCard, setSelectedCard] = useState<any>({
    name: "",
    desc: [],
    love: [],
    health: [],
    jobs: [],
    url: "",
    day: [],
  });

  const getDate = () => {
    const date = new Date();
    return (
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };

  const actualDay = getDate();

  useEffect(() => {
    if (data) {
      const cardRandom = Math.floor(Math.random() * data.allCards.length + 1);
      setSelectedCard(data.allCards[cardRandom]);
    }
  }, [data]);

  useEffect(() => {
    const entries = getDataTest();
  });

  return (
    <Container maxW="8xl">
      <PageTitle
        title={
          "Karta dnia tarot " +
          selectedCard?.name +
          " dla znaku zodiaku " +
          title
        }
        subtitle={" na dzień " + actualDay}
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
