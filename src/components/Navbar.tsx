import Logo from "../assets/Planet.png";
import Israel from "../assets/Israel.jpg";
import closeMenu from "../assets/cross.png";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export function NavbarA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex md:gap-3 items-center justify-between px-2 md:px-6 py-4">
        <div className="hover:scale-90 transition-all delay-150 ease-in-out">
          <NavLink className="flex items-center" to="/planet-tech/">
            <img className="w-28 md:w-40" src={Logo} alt="logo" />
            <svg
              className="w-16 md:w-auto"
              width="88"
              height="49"
              viewBox="0 0 88 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.0876 13.5185C26.1219 12.9971 26.0902 12.584 25.9925 12.2793C25.8362 11.7917 25.538 11.4904 25.0981 11.3753C24.6581 11.2602 24.1517 11.3046 23.5789 11.5083C22.6744 11.83 21.9788 12.332 21.4923 13.0143C20.9959 13.6661 20.6624 14.6164 20.4919 15.8652C20.2241 17.9633 20.2932 20.5356 20.6992 23.5823C21.1352 26.6182 21.7978 29.5226 22.6869 32.2956C23.9181 36.135 25.371 39.1997 27.0457 41.4895C28.7505 43.7687 30.5619 45.28 32.4798 46.0237C34.3879 46.7369 36.2916 46.7557 38.1911 46.0801C40.7839 45.1579 42.7162 43.5371 43.9878 41.2177C45.2797 38.8572 45.8051 35.8867 45.5639 32.3062C46.653 33.9217 48.002 34.9865 49.6111 35.5005C51.2105 35.984 52.8091 35.9416 54.407 35.3733C56.5778 34.6012 58.2725 33.2346 59.491 31.2736C60.73 29.2714 61.4255 26.9363 61.5776 24.2682C61.7298 21.6002 61.3564 18.8645 60.4575 16.0611C59.2459 12.2826 57.5232 9.73821 55.2893 8.42802C53.0856 7.10711 50.7024 6.9024 48.1396 7.81389C46.3608 8.44657 45.0211 9.29648 44.1205 10.3636C43.2403 11.3896 42.9956 12.512 43.3864 13.7309C43.66 14.5841 44.0559 15.1901 44.574 15.549C45.1223 15.8971 45.7733 15.9372 46.527 15.6691C47.0396 15.4868 47.5729 15.2122 48.1271 14.8454C49.0732 14.3392 49.7271 14.0217 50.0889 13.893C51.1743 13.507 52.1805 13.6074 53.1076 14.1942C54.0649 14.7703 54.8513 16.0182 55.4669 17.9379C56.2974 20.528 56.4191 22.7931 55.832 24.7332C55.2449 26.6733 54.0318 27.9705 52.1927 28.6246C50.7757 29.1286 49.4142 28.9678 48.1082 28.1423C46.8227 27.2756 45.7096 25.5328 44.7691 22.914C44.524 22.2543 44.2218 21.8356 43.8626 21.6579C43.5033 21.4801 43.0071 21.5039 42.3739 21.7291C40.384 22.4368 39.6671 23.7102 40.2232 25.5492C40.9739 28.0998 41.3014 30.3257 41.2056 32.2269C41.1001 34.0975 40.672 35.5907 39.9213 36.7064C39.191 37.7808 38.2681 38.5165 37.1526 38.9132C35.2833 39.5781 33.5829 39.1984 32.0514 37.7742C30.55 36.3392 29.1838 33.702 27.9527 29.8626C27.1417 27.3334 26.5732 24.5653 26.2471 21.5581C25.9414 18.5098 25.8883 15.8299 26.0876 13.5185Z"
                fill="#FEC123"
              />
            </svg>
          </NavLink>
        </div>
        <div className="hidden md:flex gap-2 md:gap-4 lg:gap-9">
          <NavLink
            className="lg:text-xl font-semibold hover:text-[#0066FF] hover:font-bold transition-all delay-150 ease-in-out"
            to="/planet-tech/"
          >
            Home
          </NavLink>
          <NavLink
            className="lg:text-xl font-semibold hover:text-[#0066FF] hover:font-bold transition-all delay-150 ease-in-out"
            to="/categories"
          >
            Categories
          </NavLink>
          <NavLink
            className="lg:text-xl font-semibold hover:text-[#0066FF] hover:font-bold transition-all delay-150 ease-in-out"
            to="/services"
          >
            Our services
          </NavLink>
          <NavLink
            className="lg:text-xl font-semibold hover:text-[#0066FF] hover:font-bold transition-all delay-150 ease-in-out"
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div className="hidden md:block">
          <NavLink to="/planet-tech/signup">
            <button
              type="button"
              className="bg-[#0066ff] text-white px-6 py-2 rounded-md lg:text-xl hover:bg-[#0116da] hover:scale-90 transition-all delay-150 ease-in-out"
            >
              Get started
            </button>
          </NavLink>
        </div>
        <div className="md:hidden flex items-center gap-4">
          {!isOpen && (
            <NavLink to="/planet/signup">
              <button
                type="button"
                className="bg-[#0066ff] text-white font-medium px-3 py-1.5 rounded-md hover:bg-[#0116da] hover:scale-90 transition-all delay-150 ease-in-out"
              >
                Get started
              </button>
            </NavLink>
          )}
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="flex cursor-pointer hover:scale-90 transition-all delay-150 ease-linear"
          >
            {!isOpen && (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
              </div>
            )}
            {isOpen && (
              <div>
                <img className="w-[50px] h-[50px]" src={closeMenu} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden gap-5 items-center text-2xl px-4 mt-3 py-16 bg-[#d4d0d0] h-screen">
          <NavLink
            className="font-semibold hover:text-white hover:font-bold transition-all delay-150 ease-linear"
            to="/planet-tech/"
          >
            Home
          </NavLink>
          <NavLink
            className="lg:text-xl font-semibold hover:text-white hover:font-bold transition-all delay-150 ease-linear"
            to="/categories"
          >
            Categories
          </NavLink>
          <NavLink
            className="font-semibold hover:text-white hover:font-bold transition-all delay-150 ease-linear"
            to="/services"
          >
            Our services
          </NavLink>
          <NavLink
            className="font-semibold hover:text-white hover:font-bold transition-all delay-150 ease-linear"
            to="/about"
          >
            About
          </NavLink>
          <NavLink to="/planet-tech/signup">
            <button
              type="button"
              className="bg-[#0066ff] text-white mt-4 font-medium px-3 py-1.5 rounded-md hover:bg-[#0116da] hover:scale-90 transition-all delay-150 ease-in-out"
            >
              Get started
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export function NavbarB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex gap-3 items-center justify-between px-6 py-2">
        <div className="flex items-center">
          <NavLink
            className="hover:scale-90 transition-all delay-150 ease-in-out"
            to="/planet-tech/"
          >
            <svg
              width="88"
              height="70"
              viewBox="0 0 88 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.496 20.768C22.96 20.768 21.824 20.624 21.088 20.336C20.384 20.016 19.92 19.648 19.696 19.232C19.504 18.784 19.408 18.384 19.408 18.032C19.408 17.584 19.664 17.072 20.176 16.496C20.688 15.888 21.68 15.44 23.152 15.152C24.624 14.832 26.368 14.544 28.384 14.288C30.4 14 32.544 13.76 34.816 13.568C37.088 13.344 39.392 13.152 41.728 12.992C44.064 12.832 46.288 12.72 48.4 12.656C50.512 12.56 52.384 12.512 54.016 12.512C55.712 12.512 57.024 12.608 57.952 12.8C58.88 12.992 59.536 13.232 59.92 13.52C60.336 13.808 60.576 14.112 60.64 14.432C60.736 14.752 60.784 15.056 60.784 15.344C60.784 15.408 60.784 15.456 60.784 15.488C60.784 15.872 60.688 16.288 60.496 16.736C60.336 17.184 59.968 17.568 59.392 17.888C58.816 18.176 57.952 18.32 56.8 18.32C56.384 18.32 55.456 18.384 54.016 18.512C52.576 18.64 50.816 18.8 48.736 18.992C46.656 19.184 44.448 19.376 42.112 19.568C41.76 21.008 41.36 22.688 40.912 24.608C40.496 26.528 40.064 28.544 39.616 30.656C39.2 32.768 38.8 34.848 38.416 36.896C38.032 38.912 37.712 40.784 37.456 42.512C37.2 44.208 37.024 45.6 36.928 46.688C36.8 48.16 36.368 49.2 35.632 49.808C34.928 50.384 34.224 50.672 33.52 50.672C33.008 50.672 32.496 50.56 31.984 50.336C31.472 50.144 31.056 49.712 30.736 49.04C30.416 48.336 30.256 47.296 30.256 45.92C30.256 44.512 30.384 42.784 30.64 40.736C30.896 38.656 31.232 36.432 31.648 34.064C32.096 31.696 32.592 29.312 33.136 26.912C33.712 24.512 34.304 22.272 34.912 20.192C32.768 20.352 30.784 20.496 28.96 20.624C27.136 20.72 25.648 20.768 24.496 20.768Z"
                fill="#FEC123"
              />
              <path
                d="M26.0876 24.5185C26.1219 23.9971 26.0902 23.584 25.9925 23.2793C25.8362 22.7917 25.538 22.4904 25.0981 22.3753C24.6581 22.2602 24.1517 22.3046 23.5789 22.5083C22.6744 22.83 21.9788 23.332 21.4923 24.0143C20.9959 24.6661 20.6624 25.6164 20.4919 26.8652C20.2241 28.9633 20.2932 31.5356 20.6992 34.5823C21.1352 37.6182 21.7978 40.5226 22.6869 43.2956C23.9181 47.135 25.371 50.1997 27.0457 52.4895C28.7505 54.7687 30.5619 56.28 32.4798 57.0237C34.3879 57.7369 36.2916 57.7557 38.1911 57.0801C40.7839 56.1579 42.7162 54.5371 43.9878 52.2177C45.2797 49.8572 45.8051 46.8867 45.5639 43.3062C46.653 44.9217 48.002 45.9865 49.6111 46.5005C51.2105 46.984 52.8091 46.9416 54.407 46.3733C56.5778 45.6012 58.2725 44.2346 59.491 42.2736C60.73 40.2714 61.4255 37.9363 61.5776 35.2682C61.7298 32.6002 61.3564 29.8645 60.4575 27.0611C59.2459 23.2826 57.5232 20.7382 55.2893 19.428C53.0856 18.1071 50.7024 17.9024 48.1396 18.8139C46.3608 19.4466 45.0211 20.2965 44.1205 21.3636C43.2403 22.3896 42.9956 23.512 43.3864 24.7309C43.66 25.5841 44.0559 26.1901 44.574 26.549C45.1223 26.8971 45.7733 26.9372 46.527 26.6691C47.0396 26.4868 47.5729 26.2122 48.1271 25.8454C49.0732 25.3392 49.7271 25.0217 50.0889 24.893C51.1743 24.507 52.1805 24.6074 53.1076 25.1942C54.0649 25.7703 54.8513 27.0182 55.4669 28.9379C56.2974 31.528 56.4191 33.7931 55.832 35.7332C55.2449 37.6733 54.0318 38.9705 52.1927 39.6246C50.7757 40.1286 49.4142 39.9678 48.1082 39.1423C46.8227 38.2756 45.7096 36.5328 44.7691 33.914C44.524 33.2543 44.2218 32.8356 43.8626 32.6579C43.5033 32.4801 43.0071 32.5039 42.3739 32.7291C40.384 33.4368 39.6671 34.7102 40.2232 36.5492C40.9739 39.0998 41.3014 41.3257 41.2056 43.2269C41.1001 45.0975 40.672 46.5907 39.9213 47.7064C39.191 48.7808 38.2681 49.5165 37.1526 49.9132C35.2833 50.5781 33.5829 50.1984 32.0514 48.7742C30.55 47.3392 29.1838 44.702 27.9527 40.8626C27.1417 38.3334 26.5732 35.5653 26.2471 32.5581C25.9414 29.5098 25.8883 26.8299 26.0876 24.5185Z"
                fill="#FEC123"
              />
            </svg>
          </NavLink>
          <div className="hidden md:flex gap-6 lg:gap-10 lg:ml-4 text-white">
            <NavLink
              className="lg:text-xl font-semibold hover:text-[#FEC123] hover:font-bold transition-all delay-150 ease-in-out"
              to="/planet-tech/"
            >
              Home
            </NavLink>
            <NavLink
              className="lg:text-xl font-semibold hover:text-[#FEC123] hover:font-bold transition-all delay-150 ease-in-out"
              to="/categories"
            >
              Categories
            </NavLink>
            <NavLink
              className="lg:text-xl font-semibold hover:text-[#FEC123] hover:font-bold transition-all delay-150 ease-in-out"
              to="/services"
            >
              Our services
            </NavLink>
            <NavLink
              className="lg:text-xl font-semibold hover:text-[#FEC123] hover:font-bold transition-all delay-150 ease-in-out"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer hover:scale-90 transition-all delay-150 ease-in-out">
            <svg
              width="20"
              height="30"
              viewBox="0 0 24 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8571 26.3301H22V13.9072C22 8.75163 18.275 4.49129 13.4286 3.78245V2.36112C13.4286 1.55363 12.7893 0.899597 12 0.899597C11.2107 0.899597 10.5714 1.55363 10.5714 2.36112V3.78245C5.725 4.49129 2 8.75163 2 13.9072V26.3301H1.14286C0.510714 26.3301 0 26.8526 0 27.4993V28.6685C0 28.8293 0.128571 28.9608 0.285714 28.9608H8C8 31.2189 9.79286 33.0531 12 33.0531C14.2071 33.0531 16 31.2189 16 28.9608H23.7143C23.8714 28.9608 24 28.8293 24 28.6685V27.4993C24 26.8526 23.4893 26.3301 22.8571 26.3301ZM12 30.7147C11.0536 30.7147 10.2857 29.9291 10.2857 28.9608H13.7143C13.7143 29.9291 12.9464 30.7147 12 30.7147ZM4.57143 26.3301V13.9072C4.57143 11.8756 5.34286 9.96835 6.74643 8.5324C8.15 7.09646 10.0143 6.30723 12 6.30723C13.9857 6.30723 15.85 7.09646 17.2536 8.5324C18.6571 9.96835 19.4286 11.8756 19.4286 13.9072V26.3301H4.57143Z"
                fill="white"
              />
            </svg>
            <div className="absolute top-0 right-0 bg-[#FF0000] w-2.5 h-2.5 rounded-full" />
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 cursor-pointer hover:scale-90 transition-all delay-150 ease-in-out"
          >
            <img className="w-10 h-10 rounded-full" src={Israel} alt="" />
            <svg
              width="15"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3962 0.268677H0.603751C0.100078 0.268677 -0.18116 0.81274 0.130759 1.18417L8.52701 11.1447C8.76734 11.4298 9.2301 11.4298 9.47299 11.1447L17.8692 1.18417C18.1812 0.81274 17.8999 0.268677 17.3962 0.268677Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-0 right-0 px-20 py-3 bg-[#434343] rounded-l-md">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="border-2 border-[#919191] rounded-md text-white font-bold text-xl absolute top-0 right-0 py-0.5 px-2.5 cursor-pointer hover:text-[#0166DA] hover:border-[#0166DA] transition-all delay-150 ease-linear"
          >
            <span className="">X</span>
          </div>
          <div className="mt-6 flex flex-col gap-5 items-center text-white mb-8">
            <NavLink
              className="mt-4 font-semibold hover:text-[#0166DA] hover:font-bold transition-all delay-150 ease-linear"
              to="/planet-tech/"
            >
              Profile
            </NavLink>
            <NavLink
              className="font-semibold hover:text-[#0166DA] hover:font-bold transition-all delay-150 ease-linear"
              to="/planet-tech/"
            >
              Home
            </NavLink>
            <NavLink
              className="font-semibold hover:text-[#0166DA] hover:font-bold transition-all delay-150 ease-linear"
              to="/categories"
            >
              Categories
            </NavLink>
            <NavLink
              className="font-semibold hover:text-[#0166DA] hover:font-bold transition-all delay-150 ease-linear"
              to="/services"
            >
              Our services
            </NavLink>
            <NavLink
              className="font-semibold hover:text-[#0166DA] hover:font-bold transition-all delay-150 ease-linear"
              to="/about"
            >
              About
            </NavLink>
            <NavLink to="/planet-tech/signup">
              <button
                type="button"
                className="bg-[#0066ff] text-white text-[15px] mt-4 font-semibold px-6 py-1 md:text-xl md:py-2 rounded-md hover:bg-[#0116da] hover:scale-90 transition-all delay-150 ease-in-out"
              >
                Logout
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
