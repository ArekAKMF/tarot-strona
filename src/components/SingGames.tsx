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
  query,
  where,
  or,
} from "firebase/firestore";
import db from "@/firebase/config";

import { useData } from "@/hooks/useData";

const getDataTest = async (currentDate: string) => {
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

export default function SingGames({
  title,
  description,
  currentDate,
  section,
}: any) {
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

  const addValue = async (newCard: any) => {
    const saveData = Object.assign({}, newCard, { data: currentDate });
    await setDoc(collection(db, "karty"), {
      ...saveData,
    });
  };

  const updateValue = async (currentDate: any, section: any) => {
    const q = query(
      collection(db, "karty"),
      or(where("sing", "==", section), where("data", "==", currentDate))
    );

    const querySnapshot2 = await getDocs(q);
    querySnapshot2.forEach((doc) => {
      const id = doc.data().karta;
      if (!id) {
        const cardRandom = Math.floor(Math.random() * data.allCards.length + 1);
        const newCard = data.allCards[cardRandom];
        addValue(newCard);
        setSelectedCard(newCard);
      } else {
        setSelectedCard(data.allCards[id]);
      }
    });
  };

  useEffect(() => {
    if (data) {
      updateValue(currentDate, section);
    }
  }, [data, updateValue, currentDate, section]);

  // useEffect(() => {
  //   const entries = getDataTest(currentDate);
  // }, [currentDate]);

  // if(!currentDate){
  //   window.location = '/'
  // }

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
