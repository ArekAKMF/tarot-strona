"use client";
import { useMemo } from "react";
import { cards } from "@/utils/cards";
import { horoscop, gamesType } from "@/utils/gameTypes";

export const useData = () => {
  return useMemo(() => {
    return {
      allCards: cards,
      allHoroscope: horoscop,
      allGameTypes: gamesType,
    };
  }, []);
};
