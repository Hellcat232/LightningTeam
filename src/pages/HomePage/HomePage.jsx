import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";
import { Page } from "../../components/Page/Page";

const HomePage = () => {
  return (
    <div>
      <title>Home</title>
          <Page>
      <WelcomeSection />
          <AdvantagesSection />
          </Page>
    
    </div>
  );
};

export default HomePage;
