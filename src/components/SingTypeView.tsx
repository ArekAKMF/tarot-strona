"use client";

import { Checkerboard } from "@/components/checkerboard";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { horoscop } from "@/utils/gameTypes";

export default function SingTypeView() {

  return (
    <Container maxW="8xl">
      <Heading as="h2" variant="sectionTitle">
        Karta dnia dla znaków zodiaku
      </Heading>
      <SimpleGrid  autoColumns="true" columns={[1,2,3]}>
        {horoscop.map((el: any, index: number) => {
          const currentDate = () => {
            const cd = new Date();
            var day = cd.getDate();
            var month = cd.getMonth() + 1;
            var year = cd.getFullYear();
            return day + "-" + month + "-" + year;
          };

          return (
            <Checkerboard
              key={index}
              image="../../logo-biale.png"
              title={el.name}
              url={`/${el.url.toLowerCase()}-${currentDate()}`}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
