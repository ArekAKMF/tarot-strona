'use client';
import React from "react";
import {
    Flex,
    FormLabel,
    Select,
    FormControl,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next';

export default function LanguageBox() {

    const { t, i18n } = useTranslation();
    const router = useRouter();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
        router.reload();
    };

    return (
        <Flex flexDirection="column" justifyContent="center">
            <FormControl as='fieldset'>
                <FormLabel display="none" htmlFor="language">
                    {t("pageLanguage")} :
                </FormLabel>
                <Select
                    placeholder=""
                    value={i18n.language}
                    onChange={(e) => changeLanguage(e.target.value)}
                    id="language"
                >
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="pl">PL</option>
                    <option value="fr">FR</option>
                    <option value="es">ES</option>
                    <option value="nl">NL</option>
                    <option value="it">IT</option>
                </Select>
            </FormControl>
        </Flex>
    )
}
