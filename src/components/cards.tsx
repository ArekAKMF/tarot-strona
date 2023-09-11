import React from "react";

import { Text, Heading, Image, Link } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

interface CardsProps {
  image: string;
  title: string;
  desc?: string;
  card?: string;
  description: string;
  url: string;
}

export const Cards = ({
  image,
  title,
  desc,
  description,
  card,
  url,
}: CardsProps) => {
  return (
    <Card
      maxW="lg"
      borderWidth="1px"
      borderColor="#E7E9EC"
      overflow="hidden"
      padding="24px"
      background="linear-gradient(22deg, rgba(255,255,255,1) 12%, rgba(222,226,230,1) 100%)"
      marginBottom="30px"
      _hover={{
        background: "#fff",
      }}
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
        src={image}
        alt="Dan Abramov"
        objectFit="cover"
        alignItems="center"
        justifyContent="center"
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
    </Card>
  );
};
