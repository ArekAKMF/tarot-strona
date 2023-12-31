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

    // console.log('Plik JSON z opisami znaczeń został wygenerowany.');

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
    // cards.map((card1, index) => {


    //   cards.map((card2, index2) => {


    //     cards.map((card3, index3) => {

    //       if (card1.name !== card2.name && card2.name !== card3.name && card1.name !== card3.name) {
    //         newsList.push({ card1: card1.name, card2: card2.name, card3: card3.name })
    //       }

    //     })

    //   })
    //   })


    console.log("newsList", newsList)






    // })

  }, [])





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
          description="Zapraszamy Cię w fascynującą podróż odkrywania samego siebie za pomocą naszej usługi prywatnego czytania kart tarota. W świecie pełnym tajemnic i symboliki, nasi doświadczeni tarociarze pomogą Ci zgłębić nieodkryte zakamarki Twojej przyszłości.

          Nasze prywatne sesje tarota to nie tylko przewidywanie przyszłości, to interaktywna podróż po Twojej duszy. Każda karta, każdy symbol jest kluczem do zrozumienia Twoich emocji, wyborów i potencjału. To więcej niż tylko wróżenie z kart – to szansa na lepsze zrozumienie samego siebie.
          
          W ramach naszej usługi oferujemy indywidualne podejście do Ciebie i Twoich pytań. Niezależnie od tego, czy szukasz odpowiedzi na konkretne pytania czy chcesz zanurzyć się w ogólną analizę życia, nasi tarociarze są gotowi, by służyć Ci wsparciem.
          
          Pozwól nam być przewodnikiem na Twojej drodze do jasności, inspiracji i pełni życia. Zanurz się w magicznym świecie tarota i odkryj, jakie możliwości kryją się przed Tobą. Twoja przyszłość jest w Twoich rękach, a my jesteśmy tu, by Cię wesprzeć na każdym kroku. Odkryj swoją własną historię z naszym prywatnym czytaniem kart tarota – kluczem do głębokiej samoświadomości i transformacji."
          seotitle={"Karta dnia tarot dla znaku zodiaku "}
        />
        <Flex>

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

          <Box>
            <Flex direction="column">
              <Box>
                <Heading variant="orderTitle">
                  Zamów własne czytanie
                </Heading>
              </Box><Box>

                <Flex justifyContent="flex-start" alignItems="center" w="100">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="name" aria-required>Imię</FormLabel>
                      <Input id="name" {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"} />
                      {errors.name && <Text>Pole wymagane</Text>}
                    </FormControl>


                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="date">Data urodzenia</FormLabel>
                      <Input type="date"  {...register("date", { required: true })}
                        aria-invalid={errors.date ? "true" : "false"} />
                      {errors.date && <Text>Pole wymagane</Text>}
                    </FormControl>

                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="gender">Płeć</FormLabel>
                      <Select {...register("gender")} aria-invalid={errors.gender ? "true" : "false"}>
                        <option value="female">Kobieta</option>
                        <option value="male">Mężczyzna</option>
                      </Select>
                      {errors.gender && <Text>Pole wymagane</Text>}
                    </FormControl>

                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="type">Typ wróźby</FormLabel>
                      <Select {...register("type")} defaultValue="generally" aria-invalid={errors.type ? "true" : "false"}>
                        <option value="generally">Ogólna</option>
                        <option value="love">Miłość</option>
                        <option value="work">Praca</option>
                      </Select>
                      {errors.type && <Text>Pole wymagane</Text>}
                    </FormControl>

                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                      <FormLabel as='legend' htmlFor="email">Adres email</FormLabel>
                      <Input {...register("email", { required: "Pole adres email jest wymagane" })}
                        aria-invalid={errors.email ? "true" : "false"} />

                      {errors.email && <Text>Pole wymagane</Text>}

                    </FormControl>

                    <Button type="submit">Zamów własne czytanie</Button>
                  </form>

                </Flex>
              </Box>
            </Flex>
          </Box>

        </Flex>

      </Container>
    </>
  );
}
