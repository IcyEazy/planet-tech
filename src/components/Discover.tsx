import afroAmericans from "../assets/group-afro-americans-working-together 1.png";
import rectangle from "../assets/Rectangle 69.png";
import { NavLink } from "react-router-dom";

function Discover() {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url('${rectangle}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "bottom",
        }}
        className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between px-2 py-20"
      >
        <div className="flex flex-col items-center gap-7 flex-1 text-center lg:text-justify">
          <h1 className="text-[#0116da] text-2xl lg:text-4xl font-bold">
            Discover a whole tech community
          </h1>
          <p className="px-2 lg:px-8 lg:text-[20px]">
            Ias a techie journeying the tech space, planet tech offers a
            community of resources, networks, event and opportunities to its
            members.{" "}
          </p>
          <NavLink to="/planet-tech/signup">
            <button className="bg-[#0066ff] lg:text-2xl text-white p-2 rounded-md mt-5 w-60 py-3 font-bold hover:bg-[#0116da] hover:scale-90 transition-all delay-150 ease-in-out">
              Join Us Today
            </button>
          </NavLink>
        </div>
        <div className="flex-1">
          <img src={afroAmericans} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Discover;
