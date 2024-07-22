import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import Authentication from "../Auth/Authentication";
import Info from "../Auth/Info";

const Header = ( props ) => {
  const textColor = props.textColor;
  const [isAuth, setIsAuth] = useState(true);

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
          {!isAuth ? <Authentication textColor={textColor}/> : <Info/>}
      </div>
    </div>
  );
};

export default Header;
