import { Checkerboard } from "@/components/checkerboard";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { horoscop } from "@/utils/gameTypes";
export default function SingTypeView({ day }: any) {
  return (
    <Container maxW="8xl">
      <Heading as="h2" variant="sectionTitle">
        Karta dnia dla znaków zodiaku
      </Heading>
      <SimpleGrid autoColumns="true" columns={[1, 2, 3]}>
        {horoscop.map((el: any, index: number) => {
          return (
            <Checkerboard
              key={index}
              image="../../logo-biale.png"
              title={el.name}
              url={`/${el.url.toLowerCase()}-${day}`}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
