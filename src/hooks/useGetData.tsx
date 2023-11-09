"use client";
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

const getData = async (currentDate: any, section: any, data: any) => {
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
      //   addValue(newCard);
      //   setSelectedCard(newCard);

      return newCard;
    } else {
      //   setSelectedCard(data.allCards[id]);

      return data.allCards[id];
    }
  });
};

export default function useGetData(currentDate: any, section: any) {
  const cardList = useData();

  const [selectedCard, setSelectedCard] = useState<any>({
    name: "",
    desc: [],
    love: [],
    health: [],
    jobs: [],
    url: "",
    day: [],
  });

  const data = getData(currentDate, section, cardList);

  console.log(data, "DATA");

  return { selectedCard };
}
