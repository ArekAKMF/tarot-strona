import {
  Box,
  Heading,
  Flex,
  Container,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";

import { Cards } from "@/components/cards";
import { Hero } from "@/components/hero";
import { Breadcrumbs } from "@/components/breadcrumb";
import { Checkerboard } from "@/components/checkerboard";

export default function Home() {
  return (
    <>
      <Box bg="#dc0032">
        <Container maxW="100%">
          <Flex alignItems="space-between" justifyContent="flex-start" gap="1">
            <Box p="20">
              <Link variant="outline" display="block" w="100%">
                Outline bytton
              </Link>
            </Box>
            <Box p="20">
              <Link
                variant="outline"
                display="block"
                href="/e-wizyta-w-urzedzie-skarbowym/"
              >
                Outline bytton
              </Link>
              <Link variant="outline" display="block" href="/e-urzad-skarbowy/">
                Outline bytton
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl">
        <Breadcrumbs
          breadList={[
            { title: "CCCCC", link: "/link-do" },
            { title: "CCCCC", link: "/2" },
            { title: "CCCCC", link: "/3" },
            { title: "CCCCC", link: "/4" },
            { title: "CCCCC", link: "/5" },
            { title: "CCCCC", link: "/6" },
            { title: "CCCCC", link: "/7" },
          ]}
        />

        <PageTitle
          title="Krajowy System e-Faktur (KSeF)"
          description="Krajowy System e-Faktur to platforma do wystawiania i otrzymywania faktur drogą elektroniczną. Korzystaj z aplikacji KSeF i środowiska testowego, sprawdź pytania i odpowiedzi."
        />

        {/* <Heading as="h2" variant="sectionTitle">
        Informacje o Krajowym Systemie e-Faktur
      </Heading> */}
        {/* <Heading as="h3" variant="title">
        Co to jest KSeF
      </Heading> */}

        <Hero
          title="Aplikacja Podatnika KSeF"
          description="Zarządzaj uprawnieniami. Wystawiaj, odbieraj i przegladaj e-Faktury."
        />

        <Heading as="h2" variant="sectionTitle">
          Informacje o Krajowym Systemie e-Faktur
        </Heading>

        <Flex
          alignItems="center"
          justifyContent="flex-start"
          flexWrap="wrap"
          gap="1"
        >
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
          />
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
          />
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
          />
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
          />
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
          />
        </Flex>

        <Heading as="h2" variant="sectionTitle">
          Narzędzia dla Krajowego Systemu e-Faktur
        </Heading>

        {/* <Flex
          alignItems="center"
          justifyContent="flex-start"
          flexWrap="wrap"
          gap="1"
        >
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
          />
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
          />
          <Cards
            image="https://bit.ly/dan-abramov"
            title="opis"
            description="Opis"
          />
        </Flex> */}

        {/* <SimpleGrid columns={3} spacing={5}>
          <Checkerboard
            image="https://bit.ly/dan-abramov"
            title="opis"
            url="/"
          />

          <Checkerboard
            image="https://bit.ly/dan-abramov"
            title="opis"
            url="/"
          />

          <Checkerboard
            image="https://bit.ly/dan-abramov"
            title="opis"
            url="/"
          />

          <Checkerboard
            image="https://bit.ly/dan-abramov"
            title="opis"
            url="/"
          />
        </SimpleGrid> */}

        <Box p="20">
          <Link variant="primary">Wybierz</Link>
          <Link variant="secondary">Wybierz</Link>
          <Link variant="outline">Chakra UI</Link>
          <Link variant="empty">Chakra UI</Link>
          <Link variant="primary">Wybierz</Link>
        </Box>
      </Container>
      <Box bg="#dc0032" p="20">
        <Link variant="outline" display="block" w="100%">
          Outline bytton
        </Link>
        <Box>
          <Link variant="footerLink" w="100%">
            Outline bytton
          </Link>
          <Link variant="footerLink" w="100%">
            Outline bytton
          </Link>
          <Link variant="footerLink" w="100%">
            Outline bytton
          </Link>
        </Box>
      </Box>
    </>
  );
}
