import React from "react";
import { Heading, Container } from "@chakra-ui/react";
import { getLangText } from '@/const/utils'

export default function OwnFortune() {
  return (
    <Container maxW="8xl">
      <Heading as="h2" variant="sectionTitle">
        {getLangText("cardTypeGame")}
        Tu bedzie link do wrózby i w zależności od języka przechodzic bedzie na inna strone
      </Heading>
    </Container>
  )
}
