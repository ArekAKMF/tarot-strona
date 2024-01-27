"use client";
import {
    Container,
    Text,
    Box,
} from "@chakra-ui/react";
import { WithSubnavigation } from "@/components/navigation";

export default function Home() {
    let newList: any = [];
    return (
        <>
            <WithSubnavigation />
            <Container maxW="8xl">
                {newList.map((el: any) => <Box key={el.anme}>
                    <Text>{JSON.stringify(el)}</Text>
                </Box>)}
            </Container>

        </>
    );
}
