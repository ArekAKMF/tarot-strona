import { Container, Text, Heading } from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";
import React, { useState, useEffect } from "react";
import useFirebaseHook from '@/hooks/useFirebaseHook';
import { useTranslation } from 'react-i18next';
import Seo from '@/components/Seo'

export default function SingGames({
  title,
  description,
  currentDate,
  section,
}: any) {

  const { t, i18n } = useTranslation();

  const [selectedCard, setSelectedCard] = useState<any>();
  const { data, loading, error, getDataFromFirebase } = useFirebaseHook();
  useEffect(() => {
    const setData = () => {
      getDataFromFirebase({ section: title, currentDate })
      data && setSelectedCard(data);
    }
    setData();
  }, [getDataFromFirebase, title, currentDate, data])

  const pageTitleActive = `${t("cardSingTitleLine1")} "${selectedCard?.name}" ${t("cardSingTitleLine2")} ${title} ${t("cardSingTitleLine3")} ${currentDate}`;

  return (
    <Container maxW="8xl" marginBottom="24px">
      <Seo title={pageTitleActive} description={selectedCard?.day} />
      <PageTitle
        title={pageTitleActive}
        subtitle=""
        description=""
        seotitle={"Karta dnia tarot dla znaku zodiaku " + title}
        disableTitle={true}
      />

      <Container maxW="8xl">
        <PageTitle
          title={pageTitleActive}
          description={description}
          disableTitle={false}
          imageUrl={selectedCard?.images?.[0]}
        />
      </Container>

      <Text fontSize="lg" padding="10px 0" marginTop="40px" marginBottom="20px">
        {selectedCard?.day}
      </Text>

      <Heading
        as="h3"
        variant="title"
        marginTop="0"
        textDecoration="none!important"
        marginBottom="0.5em"
      >
        {t("cardSingLove")}
      </Heading>
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {selectedCard?.love}
      </Text>
      <Heading
        as="h3"
        variant="title"
        marginTop="0"
        textDecoration="none!important"
        marginBottom="0.5em"
      >
        {t("cardSingHealt")}
      </Heading>
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {selectedCard?.health}
      </Text>
      <Heading
        as="h3"
        variant="title"
        marginTop="0"
        textDecoration="none!important"
        marginBottom="0.5em"
      >
        {t("cardSingWork")}
      </Heading>
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {selectedCard?.jobs}
      </Text>
    </Container>
  );
}
