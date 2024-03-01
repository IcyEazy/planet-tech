import { NavbarB } from "../components/Navbar";
import afroAmericans from "../assets/group-afro-americans-working-together 1.png";
import LandPageHeader from "../components/LandPageHeader";
import TechNews from "../components/TechNews";
import Spotlight from "../components/Spotlight";
import { activeUser } from "../components/Form";
import TopTech from "../components/TopTech";
import planetTech from "../assets/Group 1299b.png";
import TechEvents from "../components/TechEvents";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const subscribed = true;

function LandingPage() {
  return (
    <>
      {activeUser && (
        <div>
          <div
            style={{
              backgroundImage: `url('${afroAmericans}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100vh",
            }}
            className=""
          >
            <NavbarB />
            <LandPageHeader />
          </div>
          <div className="pt-6 bg-[#EBEBEB] px-5 pr-20 pb-8 mt-12">
            <div className="flex items-center gap-2">
              <h1 className="text-[#434343] text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-2">
                Welcome to{" "}
                <img
                  className="w-auto h-[70px] md:h-[100px] lg:h-[120px] mb-[-30px]"
                  src={planetTech}
                  alt=""
                />
                <svg
                  width="7"
                  height="30"
                  viewBox="0 0 9 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.919998L7.232 24.104H1.568L0.752 0.919998H8ZM4.544 35.336C3.328 35.336 2.32 34.968 1.52 34.232C0.752 33.464 0.368 32.52 0.368 31.4C0.368 30.28 0.752 29.352 1.52 28.616C2.32 27.848 3.328 27.464 4.544 27.464C5.728 27.464 6.704 27.848 7.472 28.616C8.24 29.352 8.624 30.28 8.624 31.4C8.624 32.52 8.24 33.464 7.472 34.232C6.704 34.968 5.728 35.336 4.544 35.336Z"
                    fill="#434343"
                  />
                </svg>
              </h1>
            </div>
            <p className="text-[#0066FF] mt-2">
              Your one stop hub to all things tech, interesting discoveries
              await you.{" "}
              <a className="text-[#5284CE] font-semibold" href="/">
                Take a tour
              </a>
              .
            </p>
          </div>
          <TechNews />
          <Spotlight />
          <TopTech />
          <TechEvents />
          <Subscribe subscribed={subscribed} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default LandingPage;
