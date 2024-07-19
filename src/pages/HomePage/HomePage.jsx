import { Helmet } from "react-helmet-async";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import { Container } from "../../components/Container/Container";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";
// import { Page } from "../../components/Page/Page";

const HomePage = () => {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* <Page>
        <WelcomeSection />
        <AdvantagesSection />
      </Page> */}
    </Container>
  );
};

export default HomePage;
