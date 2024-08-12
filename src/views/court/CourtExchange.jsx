import React from "react";
import Header from "../../components/header/Header";
import Condition from "../../components/filter/Condition";
import Input from "../../components/input/Input";

const CourtExchange = () => {
  // các điều kiện cần lặp: Thời gian đăng gần nhất, thời gian diễn ra gần nhất - button
  // khoảng cách, trình độ, đối tượng, loại bài đăng - select
  // giá sân(giao lưu) - range
  // tên sân, tên người đăng - input
  const titlesOfButton = ["Mới nhất", "Sắp diễn ra"];
  const titlesOfSelect = ["Khoảng cách", "Trình độ", "Đối tượng", "Loại"];
  const titlesOfInput = ["Tên sân", "Tên người đăng"];
  return (
    <>
      {/* Header */}
      <nav className="header fixed w-full shadow py-3 grid grid-flow-row gap-9">
        <div className="header-content ">
          <Header />
        </div>

        {/* filter condition*/}
        <div className="condition-list h-10 mb-3 w-full flex items-center justify-evenly">
          <div className="consition-left contents">
            {/* button */}
            {Array(2)
              .fill()
              .map((_, index) => {
                return (
                  <div className="court-item" key={index}>
                    <Condition title={titlesOfButton[index]} />
                  </div>
                );
              })}
            {/* input */}
            <div className="w-[8%]">
              <input
                className="w-full px-7 py-3 border-[1px] solid rounded-[30px] border-[#ccc]"
                type="text"
                placeholder={"Tên sân"}
              />
            </div>
            <div className="w-[11%]">
              <input
                className="w-full px-7 py-3 border-[1px] solid rounded-[30px] border-[#ccc]"
                type="text"
                placeholder={"Tên người đăng"}
              />
            </div>
          </div>

          <div className="condition-center contents">
            <div className="input-search court-item">
              <input
                type="text"
                placeholder="Search"
                className="px-7 py-3 border-[1px] solid rounded-[30px] border-[#ccc]"
              />
            </div>
          </div>

          <div className="condition-right contents gap-2">
            {/* selectt */}
            {Array(4)
              .fill()
              .map((_, index) => {
                return <Condition title={titlesOfSelect[index]}></Condition>;
              })}
          </div>
        </div>
      </nav>

      {/* main */}
      <main className="main">
        <div className="content-main">
          <div className="list-court"></div>

          {/* map */}
          <div className="map"></div>
        </div>
      </main>

      {/* footer */}
      <footer className="footer"></footer>
    </>
  );
};

export default CourtExchange;


