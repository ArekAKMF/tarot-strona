'use client';
import React from "react";
import {
    Container,
    Text,
    Heading,
    Button,
    FormLabel,
    Input,
    Select,
    FormControl,
    Flex, Box,
    ListItem,
    OrderedList,
} from "@chakra-ui/react";
import { PageTitle } from "@/components/pageTitle";console.log
import { useForm, SubmitHandler } from "react-hook-form"
import { getGameText } from '@/const/utils'
import ownGameText from '@/const/ownGameText'

type Inputs = {
    name: string;
    date: string;
    email: string;
    gender: string;
    type: string;
    exampleRequired: string;
}

const list = [0, 1, 2, 3]

export default function OwnGameCards() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return (
        <Container maxW="8xl">
            <PageTitle
                title={getGameText(ownGameText, 'pageTitle')}
                description={getGameText(ownGameText, 'seoPageDescription')}
                seotitle={getGameText(ownGameText, 'seoPageTitle')}
            />
            <Flex>
                <Box>
                    <Heading variant="orderTitleSection" size="h3">
                        {getGameText(ownGameText, 'pageTitle')}
                    </Heading>
                    <OrderedList margin="40px">
                        {list.map((el: any, index: number) => (
                            <ListItem key={index} paddingBottom="24px">
                                <strong>{getGameText(ownGameText, `pageLinePoint${index}`)}</strong><br />
                                {getGameText(ownGameText, `pageLineDesc${index}`)}
                            </ListItem>
                        ))}
                    </OrderedList>
                    <Heading variant="orderTitleSection" size="h3">
                        {getGameText(ownGameText, 'pageSectionHowWord')}
                    </Heading>
                    {/* <Text variant="offertText">
                            Wybierz Swoją Sesję: Oferujemy różne opcje sesji, od krótkich pytań po pełne analizy życiowe.</Text>

                        <Text variant="offertText">Przygotuj Pytania: Zastanów się, co chcesz uzyskać z sesji. Im bardziej konkretnie sformułowane pytania, tym lepsze odpowiedzi.</Text>

                        <Text variant="offertText">Doświadczone Tarociarki: Nasi doświadczeni specjaliści pomogą Ci w odkryciu ukrytych znaczeń i interpretacji kart.</Text> */}

                    <Heading variant="orderTitleSection" size="h3">
                        {getGameText(ownGameText, 'pageSectionPrice')}
                    </Heading>
                    <Text variant="offertText">
                        {getGameText(ownGameText, 'pageSectionDesc')}
                    </Text>
                </Box>
            </Flex>
            <Flex marginTop="140px" marginBottom="80px" justifyContent="center" alignItems="center">
                <Box w="50%">
                    <Flex direction="column">
                        <Box>
                            <Heading variant="orderTitle">
                                {getGameText(ownGameText, 'pageSectionOwn')}
                            </Heading>
                        </Box>
                        <Box>
                            <Flex justifyContent="center" alignItems="center" w="100%">
                                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }} noValidate>
                                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                                        <FormLabel as='legend' htmlFor="name" aria-required>
                                            {getGameText(ownGameText, 'pageFormOrderFieldName')}
                                        </FormLabel>
                                        <Input id="name" {...register("name", { required: true })}
                                            aria-invalid={errors.name ? "true" : "false"} />
                                        {errors.name && <Text variant="fieldError">
                                            {getGameText(ownGameText, 'pageFormOrderFieldRequired')}</Text>}
                                    </FormControl>
                                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                                        <FormLabel as='legend' htmlFor="date">
                                            {getGameText(ownGameText, 'pageFormOrderFieldDate')}</FormLabel>
                                        <Input type="date"  {...register("date", { required: true })}
                                            aria-invalid={errors.date ? "true" : "false"} />
                                        {errors.date && <Text variant="fieldError">
                                            {getGameText(ownGameText, 'pageFormOrderFieldRequired')}
                                        </Text>}
                                    </FormControl>
                                    <FormControl as='fieldset' isRequired marginBottom="24px">
                                        <FormLabel as='legend' htmlFor="gender">
                                            {getGameText(ownGameText, 'pageFormOrderFieldSex')}
                                        </FormLabel>
                                        <Select {...register("gender")} defaultValue="female">
                                            <option value="female">
                                                {getGameText(ownGameText, 'pageFormOrderFieldSexWomen')}
                                            </option>
                                            <option value="male">
                                                {getGameText(ownGameText, 'pageFormOrderFieldSexMen')}
                                            </option>
                                        </Select>
                                    </FormControl>
                                    <FormControl as='fieldset' isRequired marginBottom="24px">
                                        <FormLabel as='legend' htmlFor="type">
                                            {getGameText(ownGameText, 'pageFormOrderFieldType')}
                                        </FormLabel>
                                        <Select {...register("type")} defaultValue="generally">
                                            <option value="generally">
                                                {getGameText(ownGameText, 'pageFormOrderFieldTypeDefault')}
                                            </option>
                                            <option value="love">
                                                {getGameText(ownGameText, 'pageFormOrderFieldTypeLove')}
                                            </option>
                                            <option value="work">
                                                {getGameText(ownGameText, 'pageFormOrderFieldTypeWork')}
                                            </option>
                                            <option value="health">
                                                {getGameText(ownGameText, 'pageFormOrderFieldTypeHealth')}
                                            </option>
                                        </Select>
                                    </FormControl>
                                    <FormControl as='fieldset' isRequired isInvalid={errors.name ? true : false} marginBottom="24px">
                                        <FormLabel as='legend' htmlFor="email">
                                            {getGameText(ownGameText, 'pageFormOrderFieldEmail')}
                                        </FormLabel>
                                        <Input {...register("email", { required: "Pole adres email jest wymagane" })}
                                            aria-invalid={errors.email ? "true" : "false"} />

                                        {errors.email && <Text variant="fieldError">
                                            {getGameText(ownGameText, 'pageFormOrderFieldRequired')}
                                        </Text>}
                                    </FormControl>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Button type="submit" h="80px" w="300px" margin="0 auto">
                                            {getGameText(ownGameText, 'pageFormOrderButton')}
                                        </Button>
                                    </Box>
                                </form>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
};
