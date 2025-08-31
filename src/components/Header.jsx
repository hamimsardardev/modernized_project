import React, { useState } from "react";
import HeaderLogo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  let { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full z-[9999]">
        <nav className="bg-[#FFFFFF]/80 absolute w-full">
          <div className="container">
            <div className="flex justify-between items-center py-4">
              <div>
                <Link to="/">
                  <img
                    src={HeaderLogo}
                    alt="HeaderLogo"
                    className="w-[120px] md:w-[150px]"
                  />
                </Link>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-2xl focus:outline-none"
                >
                  {menuOpen ? "✖" : "☰"}
                </button>
              </div>

              <div
                className={`${
                  menuOpen ? "block" : "hidden"
                } absolute top-full right-0  bg-white md:static md:flex md:w-auto md:bg-transparent`}
              >
                <ul className="flex flex-col md:flex-row gap-4 md:gap-[44px] p-4 md:p-0">
                  <li className={pathname === "/" ? "list active" : "list"}>
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={
                      pathname === "/ContactPart" ? "list active" : "list"
                    }
                  >
                    <Link to="/ContactPart">Contact Us</Link>
                  </li>
                  <li
                    className={
                      pathname === "/SuccessPart" ? "list active" : "list"
                    }
                  >
                    <Link to="/SuccessPart">Team Success</Link>
                  </li>
                  <li
                    className={
                      pathname === "/Webdevelop" ? "list active" : "list"
                    }
                  >
                    <Link to="/Webdevelop">Web Development</Link>
                  </li>
                  <li
                    className={
                      pathname === "/SocialMedia" ? "list active" : "list"
                    }
                  >
                    <Link to="/SocialMedia">Social Media</Link>
                  </li>
                  <li
                    className={
                      pathname === "/Govermentpart" ? "list active" : "list"
                    }
                  >
                    <Link to="/Govermentpart">Government Contracting</Link>
                  </li>
                </ul>
              </div>

              <div className="hidden md:block">
                <button className="bg-[#FFB000] border-2 border-transparent text-white py-[10px] px-[20px] md:py-[13px] md:px-[40px] rounded-[6px] text-[16px] md:text-[18px] font-medium cursor-pointer hover:border-2 hover:border-[#FFB000] hover:bg-white hover:text-black hover:transition-all">
                  Got an Idea
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
