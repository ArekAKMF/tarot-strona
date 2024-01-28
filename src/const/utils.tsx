import Cookies from "universal-cookie";
import { staticText } from "@/const/staticText";

const cookies = new Cookies();
const cookiesName = "selectedLang";
const formContactActive = cookies.get(cookiesName);
const getLanguage = (lang: string) =>
    formContactActive !== "" && formContactActive !== undefined
        ? formContactActive
        : lang;

const getLangText = (name: string, lang = "pl") => {
    return staticText[getLanguage(lang)][name];
};

const getListSing = (list: any, lang = "pl") => {
    const selectedList = formContactActive !== "" && formContactActive !== undefined
        ? formContactActive
        : lang;
    return list[selectedList]
}


const getGameText = (list: any, text: string, lang = "pl") => {
    const selectedList = formContactActive !== "" && formContactActive !== undefined
        ? formContactActive
        : lang;
    return list[selectedList][text];
}

export {
    cookiesName,
    formContactActive,
    getLangText,
    getListSing,
    getGameText
}