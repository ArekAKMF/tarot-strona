import React, { useEffect, useState } from 'react'
import { Checkerboard } from "@/components/checkerboard";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { horoscop } from "@/utils/gameTypes";
import { useTranslation } from 'react-i18next';

const currentDate = () => {
  const cd = new Date();
  var day = cd.getDate();
  var month = cd.getMonth() + 1;
  var year = cd.getFullYear();

  const nMonth = month < 10 ? "0" + month : month;
  const nDay = day < 10 ? "0" + day : day;
  return nDay + "-" + nMonth + "-" + year;
};

export default function SingTypeView() {
  const { t, i18n } = useTranslation();
  const [activeDate, setActiveDate] = useState('')
  const gameList = horoscop[i18n.language];

  useEffect(() => {
    if (activeDate === '') {
      setActiveDate(currentDate())
    }
  }, [activeDate])
  return (
    <Container maxW="8xl">
      <Heading as="h2" variant="sectionTitle">
        {t("cardTypeSing")}
      </Heading>
      <SimpleGrid autoColumns="true" columns={[1, 2, 3]}>
        {gameList?.map((el: any, index: number) => {
          return (
            <Checkerboard
              key={index}
              image={el?.image ? el.image : "../../logo-biale.png"}
              title={el.name}
              url={`/${el.url.toLowerCase()}-${activeDate}`}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
