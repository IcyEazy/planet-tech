import marketPlace from "../assets/icons8-marketplace-hub-64 2.png";
import searchJob from "../assets/icons8-recruiter-60 1.png";
import netEvents from "../assets/icons8-event-64 1.png";
import techNews from "../assets/icons8-news-100 1.png";

function WithYou() {
  return (
    <div className="bg-[#0116D4] flex flex-col lg:flex-row gap-8 px-6 lg:px-16 h-[100vh]">
      <div className="flex-1 text-white flex flex-col items-center mt-20 lg:mt-44 px-10 lg:px-5 text-center lg:text-justify">
        <h1 className="text-3xl lg:text-5xl font-bold">
          We are with you all the way
        </h1>
        <p className="text-xl lg:text-2xl mt-8">
          as you journey in the tech world here are a few items we offer to
          grant you a smooth integration and sense of direction in the tech
          sphere.
        </p>
      </div>
      <div className="flex-1 flex justify-between relative mt-20 lg:mt-0 px-10 lg:px-16">
        <div className="flex flex-col gap-14 absolute top-[-50px] left-0">
          <div className="bg-white flex flex-col gap-4 w-[271px] h-[260px] items-center rounded-[10px] text-center p-6 border-4 border-solid border-[#0116D4]">
            <div className="bg-[#d9d9d9] w-[64px] h-[64px] p-[9px] flex items-center justify-center rounded-full">
              <img src={marketPlace} alt="" />
            </div>
            <h3 className="text-[16px] font-bold text-[#0066ff]">
              Tech Marketplace
            </h3>
            <p className="text-[16px] text-[#434343]">
              Find your the best tech deals on exclusive tech items.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col gap-4 w-[271px] h-[260px] items-center rounded-[10px] text-center p-6 border-4 border-solid border-[#0116D4]">
            <div className="bg-[#d9d9d9] w-[64px] h-[64px] p-[9px] flex items-center justify-center rounded-full">
              <img src={searchJob} alt="" />
            </div>
            <h3 className="text-[16px] font-bold text-[#0066ff]">Search job</h3>
            <p className="text-[16px] text-[#434343]">
              Find your next exclusive tech job using our joblisting network.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-24 absolute top-5 right-0">
          <div className="bg-white flex flex-col gap-4 w-[271px] h-[260px] items-center rounded-[10px] text-center p-6 border-4 border-solid border-[#0116D4]">
            <div className="bg-[#d9d9d9] w-[64px] h-[64px] p-[9px] flex items-center justify-center rounded-full">
              <img src={netEvents} alt="" />
            </div>
            <h3 className="text-[16px] font-bold text-[#0066ff]">
              Networking and Events
            </h3>
            <p className="text-[16px] text-[#434343]">
              Get access to premium tech events both physical and virtual.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col gap-4 w-[271px] h-[260px] items-center rounded-[10px] text-center p-6 border-4 border-solid border-[#0116D4]">
            <div className="bg-[#d9d9d9] w-[64px] h-[64px] p-[9px] flex items-center justify-center rounded-full">
              <img src={techNews} alt="" />
            </div>
            <h3 className="text-[16px] font-bold text-[#0066ff]">
              Latest Tech News
            </h3>
            <p className="text-[16px] text-[#434343]">
              Be the first to get the most buzzing tech news in town.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithYou;
