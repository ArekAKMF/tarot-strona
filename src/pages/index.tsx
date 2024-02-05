
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { Container } from "@chakra-ui/react";
import GameTypesView from "@/components/GameTypesView";
import SingTypeView from "@/components/SingTypeView";
import OwnFortune from "@/components/ownFortune";
import Footer from '@/components/Footer'
import { getLangText } from '@/const/utils'
import { useTranslation } from 'react-i18next';
import Seo from '@/components/Seo'

export default function Home() {

  const { t } = useTranslation();
  return (
    <>
    <Seo title={"djjddjd"} description={"00000"} />
      <WithSubnavigation />
      <Container maxW="8xl">
        <PageTitle
          title={t("pageName")}
          description={t("frontPageDescription")}
          disableTitle={true}
        />
      </Container>
      <GameTypesView />
      {/* <SingTypeView /> */}
      {/* <Footer /> */}
    </>
  );
}
