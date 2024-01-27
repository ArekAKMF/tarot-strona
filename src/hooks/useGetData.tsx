"use client";
import React, { useState, useEffect, useMemo } from "react";
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
  and,
} from "firebase/firestore";
import db from "@/firebase/config";
import { useData } from "@/hooks/useData";
import { getLangText, getListSing } from '@/const/utils'

const useGetData = async (currentDate: any, section: any) => {
  const cardList = useData();

  const q = query(
    collection(db, "karty"),
    and(where("sing", "==", section), where("data", "==", currentDate))
  );

  let selected = {};

  const querySnapshot2 = await getDocs(q);
  if (querySnapshot2.empty) {
    const cardRandom = Math.floor(Math.random() * getListSing(cardList.allCards).cards.length + 1);
    const newCard = getListSing(cardList.allCards).cards[cardRandom];
    selected = newCard;
  } else {
    querySnapshot2.forEach((doc) => {
      const id = doc.data().karta;
      if (id) {
        selected = getListSing(cardList.allCards).cards[id];
      }
    });
  }

  return selected;
};

export default async function useHookGetData(currentDate: string, section: string) {
  const data = await useGetData(currentDate, section);
  return data;
}
