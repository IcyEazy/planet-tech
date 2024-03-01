import Group1 from "../assets/Group 1.png";
import Group2 from "../assets/Group 2.png";

function LandPageHeader() {
  return (
    <div className="flex items-center flex-col mx-auto gap-8 px-20 py-28 lg:py-36">
      <div className="flex gap-10">
        <img className="w-40 lg:w-52" src={Group1} alt="" />
        <img className="w-40 lg:w-52" src={Group2} alt="" />
      </div>
      <p className="md:text-xl lg:text-2xl text-white text-center">
        Discover a whole community of tech enthusiasts, connect, network and
        find opportunities.{" "}
      </p>
      <div className="w-full md:w-[80%] lg:w-[60%] flex justify-between gap-5 bg-white px-5 py-3 rounded-md">
        <input
          className="outline-none placeholder:font-semibold"
          type="text"
          placeholder="Search our services..."
        />
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_15_109)">
            <path
              d="M15.48 17.606C13.5513 19.1388 11.124 19.8619 8.69236 19.6281C6.26075 19.3943 4.00768 18.2211 2.39189 16.3474C0.776102 14.4737 -0.0809009 12.0405 -0.00461981 9.54302C0.0716613 7.04559 1.07549 4.67179 2.80247 2.90497C4.52945 1.13815 6.84973 0.111169 9.29086 0.0331279C11.732 -0.0449127 14.1104 0.831858 15.9419 2.48492C17.7733 4.13797 18.92 6.44302 19.1486 8.93071C19.3771 11.4184 18.6703 13.9017 17.172 15.8749L23.592 22.4185L21.888 24.1618L15.492 17.606H15.48ZM9.6 17.2131C10.5455 17.2131 11.4818 17.0226 12.3553 16.6524C13.2289 16.2822 14.0226 15.7396 14.6912 15.0556C15.3597 14.3716 15.8901 13.5596 16.2519 12.6659C16.6138 11.7722 16.8 10.8143 16.8 9.84701C16.8 8.87969 16.6138 7.92183 16.2519 7.02814C15.8901 6.13444 15.3597 5.32241 14.6912 4.63841C14.0226 3.95441 13.2289 3.41182 12.3553 3.04164C11.4818 2.67146 10.5455 2.48094 9.6 2.48094C7.69044 2.48094 5.85909 3.257 4.50883 4.63841C3.15857 6.01982 2.4 7.89341 2.4 9.84701C2.4 11.8006 3.15857 13.6742 4.50883 15.0556C5.85909 16.437 7.69044 17.2131 9.6 17.2131Z"
              fill="#1E1E1E"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_109">
              <rect
                width="24"
                height="24.5536"
                fill="white"
                transform="translate(0 0.0257835)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default LandPageHeader;
