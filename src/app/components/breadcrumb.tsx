import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Box,
  Link,
  BreadcrumbLink,
} from "@chakra-ui/react";

interface linkList {
  link: string;
  title: string;
}

interface BreadcrumbsProps {
  breadList: linkList[];
}

export const Breadcrumbs = ({ breadList }: BreadcrumbsProps) => {
  // let globalUrl = window.location.href;
  // const updateUrl = (url: string) => {
  //   if (url) {
  //     globalUrl = `${globalUrl}${url}`;
  //     return globalUrl;
  //   }
  // };

  const breadBox = (breadList: linkList[]): any => {
    return (
      breadList &&
      breadList.map((el: linkList, index: number) => (
        <BreadcrumbItem key={index}>
          {/* <BreadcrumbLink
            as={Link}
            variant="breadcrumb"
            href={updateUrl(el.link)}
          >
            {el.title}
          </BreadcrumbLink> */}
        </BreadcrumbItem>
      ))
    );
  };

  return (
    <Box maxW="100%">
      <Breadcrumb flexWrap="wrap" flexDirection="row" flex="1" maxW="container">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} variant="breadcrumb" href="/">
            Podatki.gov.pl
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadBox(breadList)}
      </Breadcrumb>
    </Box>
  );
};
