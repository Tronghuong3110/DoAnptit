import React from "react";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";

const Home = () => {
  return (
    <div className="relative">
      {/* Header */}
      <div className="background w-full h-800px z-10 relative">
        <div className="header fixed w-[100%] z-10 pt-5 top-0">
          <Header textColor={"text-white"}/>
        </div>
        {/* Body */}
        <div className="content">
          {/* background image */}
          <div className="absolute top-1/3 z-[9999] text-white w-full">
            {/* text */}
            <div>
              <h1 className="flex text-6xl justify-center w-full font-bold">
                GIAO LƯU CẦU LÔNG
              </h1>
              <p className="flex justify-center text-lg mt-3">
                Tìm kiếm cơ hội giao lưu vào phát triển cầu lông của bản thân
              </p>
            </div>
            {/* search input */}
            <div className="flex justify-center mt-5">
              <Search/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
