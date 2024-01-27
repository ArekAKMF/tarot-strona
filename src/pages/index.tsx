
import { PageTitle } from "@/components/pageTitle";
import { WithSubnavigation } from "@/components/navigation";
import { Container } from "@chakra-ui/react";
import GameTypesView from "@/components/GameTypesView";
import SingTypeView from "@/components/SingTypeView";
import OwnFortune from "@/components/ownFortune";
import Footer from '@/components/Footer'
import { getLangText } from '@/const/utils'

export default function Home() {
  return (
    <>
      <WithSubnavigation />
      <Container maxW="8xl">
        <PageTitle
          title={getLangText("pageName")}
          description={getLangText("frontPageDescription")}
          disableTitle={true}
        />
      </Container>
      <GameTypesView />
      {/* <OwnFortune /> */}
      <SingTypeView />
      <Footer />
    </>
  );
}
