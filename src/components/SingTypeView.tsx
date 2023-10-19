import { Checkerboard } from "@/components/checkerboard";
import { Container, Wrap, Heading } from "@chakra-ui/react";
import { horoscop } from "@/utils/gameTypes";

export default function SingTypeView() {
  return (
    <Container maxW="8xl">
      <Heading as="h2" variant="sectionTitle">
        Karta dnia dla znaków zodiaku
      </Heading>

      <Wrap spacing="10px 5px" justify="center">
        {horoscop.map((el: any, index: number) => {
          return (
            <Checkerboard
              key={index}
              image="../../logo-biale.png"
              title={el.name}
              url={`/${el.name.toLowerCase()}`}
            />
          );
        })}
      </Wrap>
    </Container>
  );
}
