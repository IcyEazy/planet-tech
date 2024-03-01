import LogoB from "../assets/Logo_b.png";
import Avatar from "../assets/Avatar.png";
import Israel from "../assets/Israel.jpg";
import { NavLink } from "react-router-dom";

function Team() {
  return (
    <div className="bg-[#0116D4] pb-14 px-2">
      <div className="flex justify-between items-center px-10 py-10">
        <h2 className="font-bold text-white text-2xl lg:text-5xl flex-1">
          Meet the founding team at
        </h2>
        <img className="w-[200px] lg:w-auto h-[150px]" src={LogoB} alt="" />
      </div>
      <div className="flex justify-between">
        <NavLink to="/">
          <div className="flex flex-col items-center text-white hover:text-[#D0610C] hover:scale-90 transition-all delay-150 ease-in-out">
            <img
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
              src={Avatar}
              alt=""
            />
            <h3 className=" text-xl lg:text-3xl font-semibold mt-3">
              Abu Kamsulum
            </h3>
            <p className="text-xl lg:text-3xl">Frontend Developer</p>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="flex flex-col items-center text-white hover:text-[#D0610C] hover:scale-90 transition-all delay-150 ease-in-out">
            <img
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
              src={Avatar}
              alt=""
            />
            <h3 className=" text-xl lg:text-3xl font-semibold mt-3">
              Ilesanmi John
            </h3>
            <p className="text-xl lg:text-3xl">Frontend Developer</p>
          </div>
        </NavLink>
        <NavLink
          to="https://github.com/Onward100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center text-white hover:text-[#D0610C] hover:scale-90 transition-all delay-150 ease-in-out">
            <img
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
              src={Avatar}
              alt=""
            />
            <h3 className="text-xl lg:text-3xl font-semibold mt-3">
              Onward Woruka
            </h3>
            <p className="text-xl lg:text-3xl">Frontend Developer</p>
          </div>
        </NavLink>
      </div>
      <div className="flex justify-evenly mt-14 lg:mt-20">
        <NavLink
          to="https://icyeazy.github.io/IcyEazy-portfolio-website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center text-white hover:text-[#D0610C] hover:scale-90 transition-all delay-150 ease-in-out">
            <img
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full border-2 border-[#D0610C]"
              src={Israel}
              alt=""
            />
            <h3 className="text-xl lg:text-3xl font-semibold mt-3">
              Israel Collins Adigun
            </h3>
            <p className="text-xl lg:text-3xl">Frontend Developer</p>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="flex flex-col items-center text-white hover:text-[#D0610C] hover:scale-90 transition-all delay-150 ease-in-out">
            <img
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
              src={Avatar}
              alt=""
            />
            <h3 className="text-xl lg:text-3xl font-semibold mt-3">
              MaryJane Okafor
            </h3>
            <p className="text-xl lg:text-3xl">Backend Developer</p>
          </div>
        </NavLink>
      </div>
      <div className="flex justify-between mt-14 lg:mt-20 mx-6 lg:mx-14">
        <NavLink to="/">
          <div className="flex flex-col items-center text-white hover:text-[#D0610C] hover:scale-90 transition-all delay-150 ease-in-out">
            <img
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
              src={Avatar}
              alt=""
            />
            <h3 className="text-xl lg:text-3xl font-semibold mt-3">
              Mariam Yusuf
            </h3>
            <p className="text-xl lg:text-3xl">Product Designer</p>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="flex flex-col items-center text-white hover:text-[#D0610C] hover:scale-90 transition-all delay-150 ease-in-out">
            <img
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
              src={Avatar}
              alt=""
            />
            <h3 className="text-xl lg:text-3xl font-semibold mt-3">
              Oke Daniel
            </h3>
            <p className="text-xl lg:text-3xl">Product Designer</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Team;
