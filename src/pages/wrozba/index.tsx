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
        <Heading as="h2" variant="sectionTitle">
          Zamów własne czytanie
        </Heading>
      </Container>
    </>
  );
}
