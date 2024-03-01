import { NavLink } from "react-router-dom";
import signupLogo from "../assets/SignupLogo.png";
import signupLogo2 from "../assets/SignupLogo2.png";
import SignUpLogin from "../components/SignUpLogin";

function Authentication() {
  return (
    <div className="px-8 py-14 lg:px-12 lg:py-20">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <img
            className="w-[300px] md:w-[400px] lg:w-[550px]"
            src={signupLogo}
            alt=""
          />
          <img className="w-12 md:w-16 lg:w-20" src={signupLogo2} alt="" />
        </div>
        <hr className="h-0.5 bg-[#888888] w-[90%]" />
      </div>
      <div className="pt-9 flex flex-col md:flex-row gap-2">
        <div className="pt-12 flex-1 text-center md:text-justify">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-[#333E49] font-bold md:pr-6 lg:pr-20">
            Join the 7,000 + techies in our wholesome Tech hub
          </h1>
          <p className="text-[#1E1E1E] mt-4">
            Thank you for your interest in our community,{" "}
            <a className="text-[#0116DA] font-semibold" href="/">
              planet tech
            </a>
            . We offer our members a store house of resources, networks,
            opportunities and events that are exclusive to non- members.
          </p>
        </div>
        <div className="hidden md:block bg-[#888888] w-0.5" />
        <div className="flex-1 mt-24 md:mt-auto">
          <SignUpLogin />
        </div>
      </div>
      <div className="mt-[-40px] md:mt-[-150px]">
        <NavLink to="/planet-tech/">
          <button
            type="button"
            className="bg-[#0066ff] font-semibold text-white px-6 py-2 rounded-md lg:text-xl hover:bg-[#0116da] hover:scale-90 transition-all delay-150 ease-in-out"
          >
            Go Home
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Authentication;
