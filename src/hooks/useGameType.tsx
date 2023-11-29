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
  let currentDate: any;

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
        let selected = gt;
        if (gt.includes("-")) {
          const day =
            parseInt(gt.split("-")[1]) < 10
              ? "0" + gt.split("-")[1]
              : gt.split("-")[1];

          selected = gt.split("-")[0];
          currentDate = day + "-" + gt.split("-")[2] + "-" + gt.split("-")[3];
        }
        horoscope = horoscop.find((el) => {
          if (el.url.toLocaleLowerCase() === selected) {
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
      currentDate,
      sg: gamesType?.filter((item: any) => {
        if (gameId !== "") {
          if (item.type == gameId) {
            return item;
          }
        }
      }),
    };
  }, [gameId, horoscope, layoutCard, selectedGame, currentDate]);
};
