"use client";

import { useMemo } from "react";
import { useRouter } from "next/router";

import { gamesType, horoscop } from "@/utils/gameTypes";

export const useGameType = () => {
  const router = useRouter();

  let selectedGame: any;
  let gameId: any;
  let horoscope: any;
  let layoutCard: any;

  if (router) {
    if (router?.asPath) {
      const gt =
        router?.asPath.split("/")[router?.asPath.split("/").length - 1];
      selectedGame = gamesType.find((el) => {
        if (el.url.includes(gt)) {
          gameId = el?.type;
          layoutCard = 1;
          return el;
        }
      });

      if (!selectedGame) {
        horoscope = horoscop.find((el) => {
          if (el.name.toLocaleLowerCase() === gt) {
            layoutCard = 2;
            return el;
          }
        });
      }
    }
  }

  return useMemo(() => {
    return {
      selectedGame,
      horoscope,
      layoutCard,
      sg: gamesType?.filter((item: any, index: number) => {
        if (gameId !== "") {
          if (item.type == gameId) {
            return item;
          }
        }
      }),
    };
  }, [gameId, horoscope, layoutCard, selectedGame]);
};
