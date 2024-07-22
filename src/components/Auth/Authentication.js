import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Authentication = ( props ) => {
    const textColor = props.textColor;
  return (
    <>
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
        <FontAwesomeIcon
          className="icon"
          icon={faUserPlus}
          style={{ color: "#ffffff" }}
        />
        <p className={`${textColor} ml-2`}>Register</p>
      </div>
    </>
  );
};

export default Authentication;
