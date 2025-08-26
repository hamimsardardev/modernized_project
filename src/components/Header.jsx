import React from "react";
import HeaderLogo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  let { pathname} = useLocation();
  return (
    <>
      <header className="fixed w-full z-[9999]">
        <nav className="bg-[#FFFFFF]/80 absolute w-full">
          <div className="container">
            <div className="flex justify-between items-center">
              <div>
               <Link to="/"> <img src={HeaderLogo} alt="HeaderLogo" /></Link>
              </div>
              <div>
                <ul className="flex gap-[44px]">
                  <li className={pathname === "/" ? "list active " : "list"}>
                    <Link to="/">Home </Link>
                  </li>
                  <li className={pathname === "/ContactPart" ? "list active " : "list"}>
                    <Link to="/ContactPart">Contact Us</Link>
                  </li>
                  <li className={pathname === "/SuccessPart" ? "list active " : "list"}>
                    <Link to="/SuccessPart">Team Success</Link>
                  </li>
                  <li className={pathname === "/Webdevelop" ? "list active " : "list"}>
                    <Link to="/Webdevelop">Web Development </Link>
                  </li>
                  <li className={pathname === "/SocialMedia" ? "list active " : "list"}>
                    <Link to="/SocialMedia">Social Media </Link>
                  </li>
                  <li className={pathname === "/Govermentpart" ? "list active " : "list"}>
                    <Link to="/Govermentpart">Government Contracting</Link>
                  </li>
                </ul>
              </div>
              <div>
                <button className="bg-[#FFB000] border-2 border-transparent text-white py-[13px] px-[40px] rounded-[6px] text-[18px] font-medium cursor-pointer hover:border-2 hover:border-[#FFB000] hover:bg-white hover:text-black hover:transition-all ">
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
