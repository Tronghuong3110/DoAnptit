import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Header = () => {
  return (
    <div className="h-12 bg-[#1A1A1A] flex">
      {/* Logo */}
      <div className="flex">
        <Icon icon="hugeicons:badminton-shuttle" className="text-4xl" style={{ color: "#ffffff" }} />
        <p className="text-xl text-white">Giao Lưu cầu Lông</p>
      </div>

      {/* Menu */}
      <div></div>

      {/* Search */}
      <div></div>
    </div>
  );
};

export default Header;
