import { WithSubnavigation } from "@/components/navigation";
import React from "react";
import CardGames from "@/components/CardGames";
import SingGames from "@/components/SingGames";
import { useGameType } from "@/hooks/useGameType";

export default function Home() {
  const game = useGameType();

  return (
    <>
      <WithSubnavigation />
      {game.layoutCard === 1 && (
        <CardGames
          title={game.selectedGame.name}
          description={game.selectedGame.desc}
          gameType={game.selectedGame.cardDesc}
        />
      )}
      {game.layoutCard === 2 && (
        <SingGames
          title={game.horoscope.name}
          description={game.horoscope.desc}
          sing={game.horoscope}
        />
      )}
    </>
  );
}
