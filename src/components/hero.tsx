import React from "react";
import { Text, Heading } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Box,
} from "@chakra-ui/react";

interface HeroProps {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: HeroProps) => {
  return (
    <Card
      maxW="container"
      overflow="hidden"
      padding="16px 0"
      border="0"
      shadow="none"
    >
      <CardBody padding="0">
        <Box margin="1em 0" padding="0 30px">
          <Heading
            as="h1"
            variant="pageTitle"
            marginTop="0"
            textAlign="center"
            fontWeight="800"
            marginBottom="0"
          >
            {title}
          </Heading>
          <Text marginBottom="1em">{description}</Text>
        </Box>
      </CardBody>
    </Card>
  );
};
