import React, { useState } from "react";
import Header from "../../components/header/Header";
import Condition from "../../components/filter/Condition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SelectLabels from "../../components/select/selectWithoutLabel";
import { dataSelectDistance } from "../../assets/dataFetch/data";
import {
  dataTD,
  participants,
  dataSelectTypePost,
} from "../../assets/dataFetch/data";
import Court from "../../components/court/court";
import Footer from "../../components/footer/Footer";
import LeafLetMap from "../../components/leafletmap/leafLetMap";
import "../../css/lifeMap.css";
import getMyLocation from "../../function/getMyLocation";

const CourtExchange = () => {
  // các điều kiện cần lặp: Thời gian đăng gần nhất, thời gian diễn ra gần nhất - button
  // khoảng cách, trình độ, đối tượng, loại bài đăng - select
  // giá sân(giao lưu) - range
  // tên sân, tên người đăng - input
  const [conditionDistance, setConditionDistance] = useState({});
  const [conditionTd, setConditionTd] = useState({});
  const [conditionParticipant, setConditionParticipant] = useState({});
  const [conditionType, setConditionType] = useState({});
  const [routerData, setRouterData] = useState({});

  const titlesOfButton = ["Mới nhất", "Sắp diễn ra"];
  const markersData = [
    {lat: 20.984472101316687, lng: 105.78928054578397}
  ]

  const location = getMyLocation();

  const handleSetRouter = (lat, lng) => {
    setRouterData({
      lat,
      lng
    })
  }

  return (
    <>
      {/* Header */}
      <nav className="header fixed w-full shadow py-3 grid grid-flow-row gap-9 top-0 z-[9999]  bg-white">
        <div className="header-content">
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
            {/* <Condition title={"Khoảng cách"}> */}
            <div className="court-item">
              <SelectLabels
                data={dataSelectDistance}
                setValue={setConditionDistance}
                id={"select-distance"}
                style={{ borderRadius: "30px", zIndex: 50 }}
                title={{ id: null, name: "Khoảng cách" }}
                width={"100%"}
              />
            </div>
            {/* </Condition> */}
          </div>

          <div className="condition-center contents">
            <div className="input-search court-item relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="px-7 py-[16.5px] border-[1px] solid rounded-[30px] border-[#ccc]"
              />
              <div className="icon-search absolute right-5">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>

          <div className="condition-right contents gap-2">
            {/* selectt */}
            <div className="court-item">
              <SelectLabels
                id={"Select-td"}
                data={dataTD}
                width={"100%"}
                setValue={setConditionTd}
                title={{ id: null, name: "Trình độ" }}
                style={{ borderRadius: "30px" }}
              />
            </div>

            <div className="court-item">
              <SelectLabels
                id={"Select-participant"}
                data={participants}
                width={"100%"}
                setValue={setConditionParticipant}
                title={{ id: null, name: "Đối tượng" }}
                style={{ borderRadius: "30px" }}
              />
            </div>

            <div className="court-item">
              <SelectLabels
                id={"Select-type"}
                data={dataSelectTypePost}
                width={"100%"}
                setValue={setConditionType}
                title={{ id: null, name: "Loại" }}
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* main */}
      <main className="main grid grid-flow-col mt-[30%] md:mt-[18%] lg:mt-[12%] w-full mb-2">
        <div className="content-main mx-[10px] relative flex">
          <div className="list-court grid grid-flow-row gap-2 max-h-[585px] w-1/2 mr-3 overflow-y-auto no-scrollbar">
            {markersData
              .map((marker, index) => {
                return <Court key={index} onclickSetRouter = {handleSetRouter} marker={marker}/>;
              })}
          </div>

          {/* map */}
          <div className="map w-1/2 ml-2 px-[1px] py-[1px] border-[1px] solid border-[#ccc] rounded-md h-[585px]">
            <LeafLetMap location={location} routerData={routerData} markersData={markersData}/>
          </div>
        </div>
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default CourtExchange;
