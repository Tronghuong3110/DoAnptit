import {
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Header = ( props ) => {
  const textColor = props.textColor;
  return (
    <div className="flex justify-around font-bold">
      {/* Logo */}
      <div className="flex items-center">
        <Icon
          icon="hugeicons:badminton-shuttle"
          className={`text-4xl ${textColor}`}
        />
        <p className={`text-xl ${textColor}`}>Giao Lưu cầu Lông</p>
      </div>

      {/* Menu */}
      <div className={`flex justify-around items-center w-[40%] ${textColor}`}>
        <h6 className="hover-click px-2 py-2">HOME</h6>
        <h6 className="hover-click px-2 py-2 ">ABOUT US</h6>
        <h6 className="hover-click px-2 py-2">EVENT</h6>
        <h6 className="hover-click px-2 py-2">POST</h6>
        <h6 className="hover-click px-2 py-2">CONTACT</h6>
      </div>

      {/* sign up and login */}
      <div className="relative items-center flex">
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff"}} className="absolute top-[17px] left-[6px]"/>
          <input placeholder="Search" className=" border-[1px] border-[#cccccc] rounded-[15px] px-[30px] py-[3px]"/> */}
        <div className="login flex items-center hover-click px-2 py-2">
          <Icon
            className={`text-2xl icon ${textColor}`}
            icon="lets-icons:key-light"
          />
          <p className={`${textColor} ml-1 hover-click`}>Sign in</p>
        </div>
        {/*  */}
        <div className="w-[1px] ml-3 mr-3 mt-1 mb-1 bg-[#716a6a]"></div>
        {/* icon register */}
        <div className="register flex items-center hover-click px-2 py-2">
          <FontAwesomeIcon className="icon" icon={faUserPlus} style={{ color: "#ffffff" }} />
          <p className={`${textColor} ml-2`}>Register</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
