import { NavLink } from "react-router-dom";

import logoFooter from "../assets/LogoFooter.png";
import logoFooterB from "../assets/Group 1301.png";

function Footer() {
  return (
    <div className="bg-[#000424] p-5 lg:px-10">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        <div className="lg:w-[300px]">
          <NavLink to="/planet-tech/">
            <div className="flex items-center hover:scale-90 transition-all delay-150 ease-in-out">
              <img className="w-[200px] h-[90px]" src={logoFooter} alt="" />
              <img className="w-[50px] h-[50px]" src={logoFooterB} alt="" />
            </div>
          </NavLink>
          <p className="text-white px-4">
            Our tech hub platform is designed to offer you a community where you
            can receive various resources at your fingertip.
          </p>
        </div>
        <div className="flex justify-between gap-14 md:gap-24 lg:gap-32">
          <div>
            <h3 className="text-white text-xl lg:text-2xl font-semibold">
              Useful links
            </h3>
            <div className="text-white flex flex-col gap-3 mt-4 lg:mt-6">
              <NavLink
                className="hover:text-[#FCE123] hover:font-semibold transition-all delay-150 ease-in-out"
                to="/"
              >
                Find a job
              </NavLink>
              <NavLink
                className="hover:text-[#FCE123] hover:font-semibold transition-all delay-150 ease-in-out"
                to="/about"
              >
                About us
              </NavLink>
              <NavLink
                className="hover:text-[#FCE123] hover:font-semibold transition-all delay-150 ease-in-out"
                to="/"
              >
                FAQ
              </NavLink>
            </div>
          </div>
          <div className="">
            <h3 className="text-white text-xl lg:text-2xl font-semibold">
              Category
            </h3>
            <div className="text-white flex flex-col gap-3 mt-4 lg:mt-6">
              <NavLink
                className="hover:text-[#FCE123] hover:font-semibold transition-all delay-150 ease-in-out"
                to="/"
              >
                Tech Marketplace
              </NavLink>
              <NavLink
                className="hover:text-[#FCE123] hover:font-semibold transition-all delay-150 ease-in-out"
                to="/"
              >
                Latest News
              </NavLink>
              <NavLink
                className="hover:text-[#FCE123] hover:font-semibold transition-all delay-150 ease-in-out"
                to="/"
              >
                Find useful Resources
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl lg:text-2xl font-semibold">
              Get in Touch
            </h3>
            <p className="text-white mt-3 lg:mt-6">Stay connected with us</p>
            <div className="text-white flex gap-3 mt-10">
              <NavLink
                className="hover:scale-125 transition-all delay-150 ease-in-out"
                to="https://www.facebook.com"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="19"
                    cy="19"
                    r="19"
                    fill="#333E49"
                    className="hover:fill-[#000424] transition-all delay-150 ease-in-out"
                  />
                  <path
                    d="M16.4815 29V19.6154H14V16.2365H16.4815V13.3505C16.4815 11.0826 17.9473 9 21.3249 9C22.6924 9 23.7036 9.1311 23.7036 9.1311L23.6239 12.2864C23.6239 12.2864 22.5926 12.2764 21.4673 12.2764C20.2493 12.2764 20.0541 12.8377 20.0541 13.7693V16.2365H23.7207L23.5612 19.6154H20.0541V29H16.4815Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </NavLink>
              <NavLink
                className="hover:scale-125 transition-all delay-150 ease-in-out"
                to="https://www.twitter.com"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="19"
                    cy="19"
                    r="19"
                    fill="#333E49"
                    className="hover:fill-[#000424] transition-all delay-150 ease-in-out"
                  />
                  <path
                    d="M29 12.9301C28.2645 13.2473 27.4641 13.4757 26.6397 13.5646C27.4956 13.0561 28.1366 12.2527 28.4424 11.3053C27.6392 11.7831 26.7593 12.1181 25.8417 12.2955C25.4582 11.8855 24.9944 11.5589 24.4792 11.336C23.9639 11.1132 23.4083 10.9988 22.8469 11C20.5755 11 18.7488 12.8411 18.7488 15.1005C18.7488 15.4177 18.7873 15.735 18.8498 16.0403C15.4487 15.8624 12.4155 14.2376 10.3989 11.7499C10.0314 12.3775 9.83887 13.0921 9.84124 13.8194C9.84124 15.2423 10.5647 16.4969 11.6679 17.2348C11.0178 17.2092 10.3829 17.0305 9.81481 16.7133V16.7637C9.81481 18.7563 11.2233 20.4075 13.1005 20.7873C12.748 20.8788 12.3854 20.9257 12.0213 20.9267C11.7545 20.9267 11.5021 20.9003 11.2473 20.8642C11.7665 22.489 13.2783 23.6692 15.0786 23.7076C13.6701 24.8109 11.9059 25.4598 9.99027 25.4598C9.64656 25.4598 9.32929 25.4478 9 25.4093C10.8171 26.5751 12.9731 27.2481 15.2949 27.2481C22.8325 27.2481 26.957 21.0036 26.957 15.5836C26.957 15.4057 26.957 15.2279 26.945 15.05C27.7429 14.4659 28.4424 13.7425 29 12.9301Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </NavLink>
              <NavLink
                className="hover:scale-125 transition-all delay-150 ease-in-out"
                to="https://www.instagram.com"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="19"
                    cy="19"
                    r="19"
                    fill="#333E49"
                    className="hover:fill-[#000424] transition-all delay-150 ease-in-out"
                  />
                  <path
                    d="M18.4976 16.332C16.7532 16.332 15.3296 17.7556 15.3296 19.5C15.3296 21.2444 16.7532 22.668 18.4976 22.668C20.2421 22.668 21.6656 21.2444 21.6656 19.5C21.6656 17.7556 20.2421 16.332 18.4976 16.332ZM27.9993 19.5C27.9993 18.1881 28.0112 16.8881 27.9375 15.5786C27.8638 14.0576 27.5168 12.7077 26.4046 11.5954C25.29 10.4808 23.9424 10.1362 22.4214 10.0625C21.1095 9.98882 19.8095 10.0007 18.5 10.0007C17.1881 10.0007 15.8881 9.98882 14.5786 10.0625C13.0576 10.1362 11.7077 10.4832 10.5954 11.5954C9.48078 12.71 9.13617 14.0576 9.0625 15.5786C8.98882 16.8905 9.00071 18.1905 9.00071 19.5C9.00071 20.8095 8.98882 22.1119 9.0625 23.4214C9.13617 24.9424 9.48316 26.2923 10.5954 27.4046C11.71 28.5192 13.0576 28.8638 14.5786 28.9375C15.8905 29.0112 17.1905 28.9993 18.5 28.9993C19.8119 28.9993 21.1119 29.0112 22.4214 28.9375C23.9424 28.8638 25.2923 28.5168 26.4046 27.4046C27.5192 26.29 27.8638 24.9424 27.9375 23.4214C28.0136 22.1119 27.9993 20.8119 27.9993 19.5ZM18.4976 24.3744C15.8002 24.3744 13.6232 22.1974 13.6232 19.5C13.6232 16.8026 15.8002 14.6256 18.4976 14.6256C21.1951 14.6256 23.372 16.8026 23.372 19.5C23.372 22.1974 21.1951 24.3744 18.4976 24.3744ZM23.5717 15.5643C22.9419 15.5643 22.4333 15.0557 22.4333 14.4259C22.4333 13.7961 22.9419 13.2876 23.5717 13.2876C24.2015 13.2876 24.7101 13.7961 24.7101 14.4259C24.7103 14.5755 24.6809 14.7236 24.6238 14.8618C24.5667 15 24.4828 15.1256 24.3771 15.2313C24.2713 15.3371 24.1457 15.4209 24.0075 15.4781C23.8693 15.5352 23.7212 15.5645 23.5717 15.5643Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </NavLink>
              <NavLink
                className="hover:scale-125"
                to="https://www.pinterest.com"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="19"
                    cy="19"
                    r="19"
                    fill="#333E49"
                    className="hover:fill-[#000424] transition-all delay-150 ease-in-out"
                  />
                  <path
                    d="M11.0001 16.1742C11.0001 15.3095 11.1512 14.4926 11.4491 13.7302C11.7337 12.9897 12.1565 12.31 12.695 11.7274C13.2324 11.1525 13.8474 10.6554 14.5222 10.2504C15.2145 9.83152 15.964 9.51553 16.7472 9.31231C17.5399 9.10417 18.3561 8.9992 19.1757 9C20.4416 9 21.6197 9.26786 22.7122 9.80134C23.7905 10.3251 24.7083 11.1289 25.3696 12.1287C26.052 13.1456 26.391 14.2959 26.391 15.5785C26.391 16.3476 26.3154 17.1 26.1609 17.8358C26.0093 18.5711 25.7681 19.2852 25.443 19.9619C25.133 20.6171 24.7278 21.2227 24.2404 21.7591C23.7506 22.287 23.1574 22.7084 22.4977 22.9972C21.7815 23.3111 21.0068 23.4691 20.2249 23.4607C19.6814 23.4607 19.139 23.3329 18.6033 23.0761C18.0676 22.8205 17.683 22.4693 17.4519 22.0192C17.3707 22.3315 17.2596 22.7827 17.1118 23.3729C16.9695 23.9619 16.8739 24.342 16.8317 24.5143C16.7872 24.6855 16.705 24.9711 16.585 25.3668C16.5036 25.6595 16.3991 25.9452 16.2726 26.2215L15.8903 26.9705C15.725 27.292 15.5401 27.603 15.3368 27.9019C15.1357 28.1931 14.8867 28.541 14.59 28.9411L14.4244 29L14.3143 28.88C14.1954 27.6207 14.1343 26.8672 14.1343 26.6182C14.1343 25.8814 14.2221 25.0545 14.3955 24.1364C14.5655 23.2195 14.8345 22.067 15.1957 20.681C15.5569 19.2962 15.7636 18.4815 15.8192 18.2403C15.5647 17.7213 15.4357 17.0433 15.4357 16.2098C15.4357 15.544 15.6436 14.9205 16.0604 14.3337C16.4783 13.7491 17.0062 13.4568 17.6464 13.4568C18.1365 13.4568 18.5166 13.6191 18.7889 13.9447C19.0623 14.2692 19.1957 14.6782 19.1957 15.1773C19.1957 15.7063 19.0201 16.4721 18.6666 17.4735C18.3132 18.476 18.1376 19.224 18.1376 19.7208C18.1376 20.2242 18.3177 20.6455 18.6778 20.9756C19.0331 21.3058 19.5031 21.4848 19.9881 21.4746C20.4282 21.4746 20.8361 21.3745 21.2151 21.1734C21.5882 20.9781 21.9111 20.6993 22.1587 20.3587C22.698 19.6188 23.0825 18.7777 23.289 17.8858C23.3957 17.4168 23.478 16.9711 23.5291 16.5521C23.5836 16.1309 23.6069 15.733 23.6069 15.3551C23.6069 13.9692 23.1668 12.8889 22.2921 12.1153C21.413 11.3418 20.2682 10.9572 18.86 10.9572C17.2585 10.9572 15.9192 11.4751 14.8467 12.5143C13.7731 13.5502 13.2329 14.8672 13.2329 16.4643C13.2329 16.8166 13.2863 17.1567 13.3874 17.4857C13.4863 17.8136 13.5941 18.0747 13.7108 18.2681C13.8264 18.4582 13.9353 18.6438 14.0342 18.815C14.1343 18.9861 14.1865 19.1084 14.1865 19.1817C14.1865 19.4062 14.1276 19.6985 14.0087 20.0597C13.8853 20.421 13.7397 20.601 13.5641 20.601C13.5474 20.601 13.4785 20.5888 13.3585 20.5632C12.9428 20.4391 12.5674 20.2071 12.2704 19.8908C11.9553 19.563 11.7065 19.1773 11.538 18.7549C11.3699 18.3341 11.239 17.8994 11.1468 17.4557C11.0471 17.0359 10.9979 16.6057 11.0001 16.1742Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <p className="text-white">
        &copy; 2024 Planet Tech. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
