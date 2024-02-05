"use client";
import {
  Container,
  Text,
  Heading,
} from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { cards } from "@/utils/cards";
import SingTypeView from "@/components/SingTypeView";
import { useTranslation } from 'react-i18next';

export default function Home() {

  const { t, i18n } = useTranslation();

  const [selectedCard, setSelectedCard] = useState<any>({
    love: [],
    health: "",
    jobs: "",
    desc: "",
    day: "",
    images: []
  })

  const router = useRouter();

  useEffect(() => {
    if (router?.asPath) {
      const selected =
        router?.asPath.split("/")[2];
      const activeEl = cards[i18n.language]?.cards?.find((el: any) => el.url === selected);
      setSelectedCard(activeEl);
    }
  }, [router?.asPath, i18n]);

  return (
    <>
      <WithSubnavigation />
      <Container maxW="8xl">
        <PageTitle
          title={selectedCard?.name}
          description={selectedCard?.desc}
          disableTitle={false}
          imageUrl={selectedCard?.images[0]}
        />
      </Container>
      <Container maxW="8xl">

        <Heading
          as="h3"
          variant="title"
          marginTop="20px"
          textDecoration="none!important"
          marginBottom="0.5em"
        >
          {t('cardSingLove')}
        </Heading>
        <Text fontSize="lg" padding="10px 0">
          {selectedCard?.love[0]}
        </Text>
        <Heading
          as="h3"
          variant="title"
          marginTop="20px"
          textDecoration="none!important"
          marginBottom="0.5em"
        >
          {t('cardSingHealt')}
        </Heading>
        <Text fontSize="lg" padding="10px 0">
          {selectedCard?.health[0]}
        </Text>
        <Heading
          as="h3"
          variant="title"
          marginTop="20px"
          textDecoration="none!important"
          marginBottom="0.5em"
        >
          {t('cardSingWork')}
        </Heading>
        <Text fontSize="lg" padding="10px 0">
          {selectedCard?.jobs[0]}
        </Text>

      </Container>
      <SingTypeView />
    </>
  );
}
