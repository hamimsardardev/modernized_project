import React, { useState, useEffect } from "react"; // useEffect import করো
import HeaderLogo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBarsProgress } from "react-icons/fa6";

const Header = () => {
  let { pathname } = useLocation();
  let [navbarshow, setNavbarshow] = useState(false);
  function handleshownavbar() {
    setNavbarshow(!navbarshow);
  }

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
              {/* rexponsive */}
              {navbarshow ? (
                <AiOutlineCloseCircle
                  onClick={handleshownavbar}
                  className="text-black lg:hidden h-[30px] w-[30px]"
                />
              ) : (
                <FaBarsProgress
                  onClick={handleshownavbar}
                  className="text-black lg:hidden h-[30px] w-[30px]"
                />
              )}
              <ul className="hidden lg:flex flex-col md:flex-row gap-4 md:gap-[44px] p-4 md:p-0">
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
              {navbarshow && (
                <ul className="absolute top-full w-full justify-center bg-white md:static md:flex md:w-auto md:bg-transparent }">
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
              )}

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
