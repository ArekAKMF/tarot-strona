import React from "react";
import { Heading, Image, Link } from "@chakra-ui/react";
import { Box, Card } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

interface CheckerboardProps {
  image: string;
  title: string;
  url: string;
}

export const Checkerboard = ({ image, title, url }: CheckerboardProps) => {
  return (
    <Box
      marginBottom="5px"
      w="100%"
      border="1px solid #eee"
      _hover={{
        background: "#015497",
      }}
    >
      <Link
        variant="empty"
        href={url}
        textDecoration="none!important"
        padding="0"
        border="0"
        w="100%"
      >
        <Card
          padding="1em"
          background="transparent"
          borderRadius="0"
          border="0"
          justifyContent="center"
          alignItems="center"
          
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
            src={image.includes("data") ? `${image}` : image}
            alt=""
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
    </Box>
  );
};
