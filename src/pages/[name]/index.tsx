import { WithSubnavigation } from "@/components/navigation";
import React from "react";
import CardGames from "@/components/CardGames";
import SingGames from "@/components/SingGames";
import OwnGameCards from '@/components/OwnGameCards'
import { useGameType } from "@/hooks/useGameType";
import Footer from '@/components/Footer'

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
          currentDate={game.currentDate}
          section={game.horoscope.section}
        />
      )}
      {game.layoutCard === 3 && (
        <OwnGameCards />
      )}
      <Footer />
    </>
  );
}
