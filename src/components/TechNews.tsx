import cryptocurrency from "../assets/Binance.png";
import enterprise from "../assets/Cloud.png";
import media from "../assets/Prime.png";
import { NavLink } from "react-router-dom";

function TechNews() {
  return (
    <div className="px-6 py-12">
      <h1 className="text-[#434343] text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
        Tech News:
      </h1>
      <div className="flex lg:gap-1 justify-between">
        <NavLink
          className="flex-1 hover:scale-110 transition-all delay-150 ease-in-out"
          to="/"
        >
          <div className="p-3 border-r-2">
            <img src={cryptocurrency} alt="" />
            <h2 className="lg:text-2xl font-bold text-[#0116D4] my-3.5">
              Cryptocurrency
            </h2>
            <p className="lg:text-xl mb-8">
              Cryptocurrency users in Nigeria briefly lose access to binance ,
              kraken and coin base... Read more...
            </p>
            <p className="text-[#0066ff] font-semibold hover:font-bold transition-all delay-150 ease-in-out">
              Read more...
            </p>
          </div>
        </NavLink>
        <NavLink
          className="flex-1 hover:scale-110 transition-all delay-150 ease-in-out"
          to="/"
        >
          <div className="p-3">
            <img src={enterprise} alt="" />
            <h2 className="lg:text-2xl font-bold text-[#0116D4] my-3.5">
              Enterprise
            </h2>
            <p className="lg:text-xl mb-8">
              Google&apos;s first Africa cloud region now operational..
            </p>
            <p className="text-[#0066ff] font-semibold hover:font-bold transition-all delay-150 ease-in-out">
              Read more...
            </p>
          </div>
        </NavLink>
        <NavLink
          className="flex-1 hover:scale-110 transition-all delay-150 ease-in-out border-l-2"
          to="/"
        >
          <div className="p-3">
            <img src={media} alt="" />
            <h2 className="lg:text-2xl font-bold text-[#0116D4] my-3.5">
              Media & Entertainment
            </h2>
            <p className="lg:text-xl mb-8">
              Cryptocurrency users in Nigeria briefly lose access to binance ,
              kraken and coin base Read more...
            </p>
            <p
              className="text-[#0066ff] font-semibold"
              hover:font-bold
              transition-all
              delay-150
              ease-in-out
            >
              Read more...
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default TechNews;
