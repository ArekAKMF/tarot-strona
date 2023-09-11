import React from "react";
import { Heading, Image, Link } from "@chakra-ui/react";
import { Box, Card, CardHeader, WrapItem } from "@chakra-ui/react";

interface CheckerboardProps {
  image: string;
  title: string;
  url: string;
}

export const Checkerboard = ({ image, title, url }: CheckerboardProps) => {
  return (
    <WrapItem>
      <Link
        variant="empty"
        href={url}
        textDecoration="none!important"
        padding="0"
      >
        <Card
          width="sm"
          padding="1em"
          background="transparent"
          borderRadius="0"
          _hover={{
            background: "#015497",
            h3: {
              color: "#fff !important",
            },
            image: {
              color: "#fff !important",
              filter: "transparent",
            },
          }}
        >
          <Image
            src={image}
            alt="Dan Abramov"
            objectFit="cover"
            alignItems="center"
            justifyContent="center"
            padding="8px 0 30px 0"
            width="80px"
            display="block"
            margin="0 auto"
          />
          <Heading
            as="h3"
            variant="title"
            marginTop="0"
            textDecoration="none!important"
            marginBottom="0.5em"
            padding="0"
          >
            {title}
          </Heading>
        </Card>
      </Link>
    </WrapItem>
  );
};
