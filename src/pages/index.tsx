"use client";
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { Container } from "@chakra-ui/react";
import GameTypesView from "@/components/GameTypesView";
import SingTypeView from "@/components/SingTypeView";
import OwnFortune from "@/components/ownFortune";

const currentDate = () => {
  const cd = new Date();
  var day = cd.getDate();
  var month = cd.getMonth() + 1;
  var year = cd.getFullYear();
  return day + "-" + month + "-" + year;
};

export default function Home() {


  return (
    <>
      <WithSubnavigation />
      <Container maxW="8xl">
        <PageTitle
          title="Tarot mistyczny"
          description="
          Witaj w fascynującym świecie Tarota - tajemniczej sztuki odczytywania kart, która jest zarówno źródłem mądrości, jak i inspiracją do odkrywania mistycyzmu. Nasza strona zaprasza Cię do głębokiej podróży przez karty Tarota, gdzie archetypy, symbole i intuicja łączą się w jedno, by rzucić światło na przeszłość, teraźniejszość i przyszłość.
          Tarot to narzędzie, które przekracza granice czasu i przestrzeni. To magiczne karty, które pomagają nam lepiej zrozumieć siebie i otaczający nas świat. Jako przewodnicy na tej mistycznej drodze, jesteśmy tutaj, by pomóc Ci odkryć ukryte tajemnice swojego życia oraz lepiej zrozumieć to, co przynosi przyszłość.
          Przyjrzyj się uważnie kartom, zgłębiaj ich znaczenie, a w miarę jak poznasz tę sztukę, zobaczysz, jak można ją wykorzystać do przewidywania przyszłości. Tarot to lustrzane odbicie twojego wnętrza i mistyczna mapa, która pomoże Ci w nawigowaniu przez nieznane lądy.
              "
          disableTitle={true}
        />
      </Container>
      <GameTypesView />
      {/* <OwnFortune /> */}
      <SingTypeView day={currentDate()} />
    </>
  );
}
