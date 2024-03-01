import DealsFaq from "../components/DealsFaq";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import { NavbarA } from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Team from "../components/Team";
import WeHaveMembers from "../components/WeHaveMembers";
import WithYou from "../components/WithYou";

const subscribed = false;

function Home() {
  return (
    <>
      <NavbarA />
      <Discover />
      <WeHaveMembers />
      <WithYou />
      <DealsFaq />
      <Team />
      <Subscribe subscribed={subscribed} />
      <Footer />
    </>
  );
}

export default Home;
