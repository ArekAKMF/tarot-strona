import {
  Container,
  Text,
  Heading,
  Button,
  Wrap,
  Link,
} from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <WithSubnavigation />
      <Container maxW="8xl">
      <PageTitle
        title={
          "Wróżba na zamówienie"
        }
        description="sssiii"
        seotitle={"Karta dnia tarot dla znaku zodiaku "}
      />
        <Heading as="h2" variant="sectionTitle">
          Zamów własne czytanie
        </Heading>
      </Container>
    </>
  );
}
