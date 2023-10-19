import { WithSubnavigation } from "@/components/navigation";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import { gamesType, horoscop } from "@/utils/gameTypes";
import CardGames from "@/components/CardGames";
import SingGames from '@/components/SingGames'

export default function Home() {
  const gameTypesList = gamesType;
  const singList = horoscop;

  const [layoutCard, setLayoutCard] = useState(1);
  const [sing, setSing] = useState({
    name: "",
    desc: "",
  });
  const [selectedGame, useSelectedGame] = useState({
    name: "",
    desc: "",
    cardDesc: [],
  });
  const [selectedSing, useSelectedSing] = useState({
    name: "",
    desc: "",
  });
  const router = useRouter();

  const updateList = (game: any) => useSelectedGame(game);

  useEffect(() => {
    if (router?.asPath) {
      const gt =
        router?.asPath.split("/")[router?.asPath.split("/").length - 1];
      const game = gameTypesList.find((el) => {
        if (el.url.includes(gt)) {
          return el;
        }
      });
      const sing = singList.find((el) => {
        if (el.name.toLocaleLowerCase() === gt) {
          return el;
        }
      });

      if (game !== undefined) {
        game && updateList(game);
        setLayoutCard(1);
      }

      if (sing !== undefined) {
        setLayoutCard(2);
        setSing(sing);
      }
    }
  }, [router?.asPath, gameTypesList, updateList]);

  return (
    <>
      <WithSubnavigation />
      {layoutCard === 1 && (
        <CardGames
          title={selectedGame.name}
          description={selectedGame.desc}
          gameType={selectedGame.cardDesc}
        />
      )}
      {layoutCard === 2 && (
        <SingGames title={sing.name} description={sing.desc} sing={sing} />
      )}
    </>
  );
}
