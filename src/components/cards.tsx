import React from "react";

import { Text, Heading, Image } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";

interface CardsProps {
  image: string;
  title: string;
  desc?: string;
  card?: string;
  description: string;
}

export const Cards = ({
  image,
  title,
  desc,
  description,
  card,
}: CardsProps) => {
  return (
    <Card
      maxW="lg"
      borderWidth="1px"
      borderColor="#E7E9EC"
      overflow="hidden"
      padding="24px"
      background="#fff"
      marginBottom="30px"
      _hover={{
        background: "linear-gradient(22deg, rgba(255,255,255,1) 12%, rgba(222,226,230,1) 100%)"
      }
      }
      className={`animate__animated animate__bounce animate__delay-2s`}
    >
      <CardHeader marginTop="0" marginBottom="24px" padding="0">
        <Heading
          as="h3"
          variant="sectionTitle"
          marginTop="0"
          marginBottom="0"
          textAlign="center"
        >
          {title}
        </Heading>
      </CardHeader>
      <Text>{desc}</Text>
      <Image
        src={'../../karty/' + image}
        alt={card}
        objectFit="cover"
        alignItems="center"
        justifyContent="center"
        mix-blendmode="color-burn"
      />
      <CardHeader marginTop="24px" marginBottom="24px" padding="0">
        <Heading
          as="h3"
          variant="sectionTitle"
          marginTop="0"
          marginBottom="0"
          textAlign="center"
        >
          {card}
        </Heading>
      </CardHeader>
      <CardBody padding="10px 0">
        <Text>{description}</Text>
      </CardBody>
    </Card >
  );
};
