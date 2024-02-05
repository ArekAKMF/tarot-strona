"use client";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { gamesType, horoscop } from "@/utils/gameTypes";
import { useTranslation } from 'react-i18next';
const staticUrl = ['wrozba', 'wahrsagung', 'divination', 'divinazione', 'adivinación', 'waarzeggerij', 'divination']

export const useGameType = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const gamesTypeList = gamesType[i18n.language];
  const horoscopList = horoscop[i18n.language];

  let selectedGame: any;
  let gameId: any;
  let horoscope: any;
  let layoutCard: any;
  let currentDate: any;

  if (router) {
    if (router?.asPath) {

      const gt =
        router?.asPath.split("/")[router?.asPath.split("/").length - 1];
      selectedGame = gamesTypeList?.find((el: any) => {
        if (el.url.includes(gt)) {
          gameId = el?.type;
          layoutCard = 1;
          return el;
        }
      });


      if (!selectedGame) {
        if (staticUrl.includes(gt)) {
          layoutCard = 3;
        } else {
          let selected = gt;
          if (gt.includes("-")) {
            const day = gt.split("-")[1];
            selected = gt.split("-")[0];
            currentDate = day + "-" + gt.split("-")[2] + "-" + gt.split("-")[3];
          }
          horoscope = horoscopList?.find((el: any) => {
            if (el.url.toLocaleLowerCase() === selected) {
              layoutCard = 2;
              return el;
            }
          });
        }
      }
    }
  }

  return useMemo(() => {
    return {
      selectedGame,
      horoscope,
      layoutCard,
      currentDate,
      sg: gamesTypeList?.filter((item: any) => {
        if (gameId !== "") {
          if (item.type == gameId) {
            return item;
          }
        }
      }),
    };
  }, [gameId, horoscope, layoutCard, selectedGame, currentDate, gamesTypeList]);
};
