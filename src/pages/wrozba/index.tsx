import {
  Container,
  Text,
  Heading,
  Button,
  Wrap,
  Link,
  FormLabel,
  Input,
  Select,
  FormControl,
  Flex, Box,
  Image
} from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form"

import { cards } from "@/utils/cards";

import React, { useState, useEffect } from "react";

const kartaStol = 'karty-stol.jpg'

type Inputs = {
  name: string;
  date: string;
  email: string;
  gender: string;
  type: string;
  exampleRequired: string;
}


const cards1 = cards
const cards2 = cards
const cards3 = cards


export default function Home() {
  const router = useRouter();

  useEffect(() => {

    let newsList: any = [];

    for (let i = 0; i < cards1.length - 2; i++) {
      for (let j = i + 1; j < cards2.length - 1; j++) {
        for (let k = j + 1; k < cards3.length; k++) {
          const card1 = cards1[i];
          const card2 = cards2[j];
          const card3 = cards3[k];

          if (card1.name !== card2.name && card2.name !== card3.name && card1.name !== card3.name) {
            newsList.push({ card1: card1.name, card2: card2.name, card3: card3.name });
          }
        }
      }
    }

  }, [])


  // description="Zapraszamy Cię w fascynującą podróż odkrywania samego siebie za pomocą naszej usługi prywatnego czytania kart tarota. W świecie pełnym tajemnic i symboliki, nasi doświadczeni tarociarze pomogą Ci zgłębić nieodkryte zakamarki Twojej przyszłości.

  //         Nasze prywatne sesje tarota to nie tylko przewidywanie przyszłości, to interaktywna podróż po Twojej duszy. Każda karta, każdy symbol jest kluczem do zrozumienia Twoich emocji, wyborów i potencjału. To więcej niż tylko wróżenie z kart – to szansa na lepsze zrozumienie samego siebie.

  //         W ramach naszej usługi oferujemy indywidualne podejście do Ciebie i Twoich pytań. Niezależnie od tego, czy szukasz odpowiedzi na konkretne pytania czy chcesz zanurzyć się w ogólną analizę życia, nasi tarociarze są gotowi, by służyć Ci wsparciem.

  //         Pozwól nam być przewodnikiem na Twojej drodze do jasności, inspiracji i pełni życia. Zanurz się w magicznym świecie tarota i odkryj, jakie możliwości kryją się przed Tobą. Twoja przyszłość jest w Twoich rękach, a my jesteśmy tu, by Cię wesprzeć na każdym kroku. Odkryj swoją własną historię z naszym prywatnym czytaniem kart tarota – kluczem do głębokiej samoświadomości i transformacji."



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <WithSubnavigation />
      <Container maxW="8xl">
        <PageTitle
          title={
            "Prywatne czytanie"
          }
          description="Czy kiedykolwiek zastanawiałeś się, co przyniesie Ci przyszłość? Czy marzysz o jasności w swojej ścieżce życiowej? Nasza usługa odczytu kart tarota jest tu, by pomóc Ci rozwikłać tajemnice przyszłości i prowadzić Cię ku pełni życia."
          seotitle={" "}
        />

        <Flex>
          <Box>

            <Heading variant="orderTitleSection" size="h3">
              Co Oferujemy:
            </Heading>
            <Text variant="offertText">
              <strong>1.Indywidualne Podejście:</strong><br /> Każdy odczyt jest dostosowany do Twoich unikalnych potrzeb i pytań. Nasze doświadczone tarociarki podejdą do Ciebie z empatią i zrozumieniem.     </Text>
            <Text variant="offertText"><strong>2.Pełne Zrozumienie:</strong><br /> Odkryj głębokie znaczenie kart tarota i ich wpływ na Twoje życie. Nasze sesje nie tylko przewidują przyszłość, ale także pomagają w zrozumieniu Twoich wyborów i emocji.     </Text>
            <Text variant="offertText"><strong>3.Wsparcie w Podjęciu Decyzji:</strong><br /> Tarot może być świetnym narzędziem do uzyskania wskazówek dotyczących decyzji życiowych. Otrzymasz jasność i pewność, której potrzebujesz.     </Text>
            <Text variant="offertText"><strong>4.Prywatność i Bezpieczeństwo:</strong><br /> Gwarantujemy pełną prywatność. Twoje pytania i odpowiedzi są chronione tajemnicą. Możesz czuć się swobodnie dzieląc się swoimi myślami.     </Text>
            <Heading variant="orderTitleSection" size="h3"> Jak to działa:</Heading>
            <Text variant="offertText">
              Wybierz Swoją Sesję: Oferujemy różne opcje sesji, od krótkich pytań po pełne analizy życiowe.</Text>

              <Text variant="offertText">Przygotuj Pytania: Zastanów się, co chcesz uzyskać z sesji. Im bardziej konkretnie sformułowane pytania, tym lepsze odpowiedzi.</Text>

              <Text variant="offertText">Doświadczone Tarociarki: Nasi doświadczeni specjaliści pomogą Ci w odkryciu ukrytych znaczeń i interpretacji kart.</Text>

              <Heading variant="orderTitleSection" size="h3">  Cena:</Heading>
              <Text variant="offertText">
              Ceny to jedyne 25zł.

              Zamów Teraz i Odkryj Swój Los!
            </Text>

          </Box>

        </Flex>


        <Flex>



          <Box w="50%">
            <Flex direction="column">
              <Box>
                <Heading variant="orderTitle">
                  Zamów własne czytanie
                </Heading>
              </Box>



              <Box>

                <Flex justifyContent="center" alignItems="center" w="100%">
                  <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }} noValidate>
                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="name" aria-required>Imię</FormLabel>
                      <Input id="name" {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"} />
                      {errors.name && <Text variant="fieldError">Pole wymagane</Text>}
                    </FormControl>


                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="date">Data urodzenia</FormLabel>
                      <Input type="date"  {...register("date", { required: true })}
                        aria-invalid={errors.date ? "true" : "false"} />
                      {errors.date && <Text variant="fieldError">Pole wymagane</Text>}
                    </FormControl>

                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="gender">Płeć</FormLabel>
                      <Select {...register("gender")} defaultValue="female" aria-invalid={errors.gender ? "true" : "false"}>
                        <option value="female">Kobieta</option>
                        <option value="male">Mężczyzna</option>
                      </Select>
                    </FormControl>

                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="type">Typ wróźby</FormLabel>
                      <Select {...register("type")} defaultValue="generally" aria-invalid={errors.type ? "true" : "false"}>
                        <option value="generally">Ogólna</option>
                        <option value="love">Miłość</option>
                        <option value="work">Praca</option>
                      </Select>
                    </FormControl>

                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="email">Adres email</FormLabel>
                      <Input {...register("email", { required: "Pole adres email jest wymagane" })}
                        aria-invalid={errors.email ? "true" : "false"} />

                      {errors.email && <Text variant="fieldError">Pole wymagane</Text>}

                    </FormControl>

                    <Button type="submit">Zamów własne czytanie</Button>
                  </form>

                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box w="50%">
            <Image
              src={'../../' + kartaStol}
              alt="Karta stół"
              objectFit="cover"
              alignItems="center"
              justifyContent="center"
              padding="8px"
              width="100%"
            />
          </Box>

        </Flex>

      </Container>
    </>
  );
}
