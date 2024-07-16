import {
  faExchangeAlt,
  faLocationArrow,
  faMagnifyingGlass,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [isBlock, setIsBlock] = useState(false);
  const [isSelectType, setIsSelectType] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);
  const [focusedSelect, setFocusedSelect] = useState(false);
  const onFocusInput = () => setFocusedInput(true);
  const onBlurInput = () => setFocusedInput(false);
  const onFocusSelect = () => setFocusedSelect(true);
  const onBlurSelect = () => setFocusedSelect(false);

  const handleShowSearchInput = () => {
    setIsBlock(true);
    setIsSelectType(false);
  };
  const handleShowSearchSelect = () => {
    setIsBlock(true);
    setIsSelectType(true);
  };
  const handleDialogClick = (e) => {
    e.stopPropagation();
    console.log("disable");
  };

  useEffect(() => {
    if (!focusedInput && !focusedSelect) {
      setIsBlock(false);
      setIsSelectType(false);
    }
  }, [focusedInput, focusedSelect]);

  return (
    <>
      <div className="search-container items-center bg-white rounded-full p-2 shadow-md mb-4 w-1/3">
        <div className="w-full flex">
          <input
            type="text"
            onClick={() => handleShowSearchInput()}
            onFocus={() => onFocusInput()}
            onBlur={() => onBlurInput()}
            placeholder="Nhập địa điểm"
            className="location-input bg-transparent text-gray-500 mr-4 outline-none px-3 border-r border-[#ccc] border-solid"
          />
          <input
            className="activity-select border-none bg-transparent text-black mr-4 outline-none flex w-full items-center"
            placeholder="Giao lưu"
            onClick={() => handleShowSearchSelect()}
            onFocus={() => onFocusSelect()}
            onBlur={() => onBlurSelect()}
          />
          <button className="search-button bg-red-600 text-white rounded-full p-2 flex items-center justify-center outline-none hover:bg-red-700">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="relative">
          {/* Sub location input*/}
          <dialog
            className={`menu rounded-3xl w-full bg-white text-sm z-10 left-0 top-3 px-4 py-6 sm:px-6 ${
              !isSelectType && isBlock ? "block" : "" 
            }`}
            onClick={handleDialogClick}
          >
            <div className="current-location flex items-center text-red-600 font-bold mb-4 px-3 py-3 hover:bg-[#ccc] hover:cursor-pointer rounded-full">
              <FontAwesomeIcon icon={faLocationArrow} />
              <span className="ml-2">Dùng vị trí hiện tại</span>
            </div>
            <div className="popular-addresses px-3 py-3">
              <h3 className="mb-2">Địa chỉ phổ biến</h3>
              <button className="address-button bg-transparent border border-gray-300 rounded-full px-3 py-1 mr-2 mb-2 hover:border-red-600 text-black">
                Hà Nội
              </button>
              <button className="address-button bg-transparent border border-gray-300 rounded-full px-3 py-1 mr-2 mb-2 hover:border-red-600 text-black">
                Hồ Chí Minh
              </button>
            </div>
          </dialog>
          {/* sub select type */}
          <dialog
            className={`menu rounded-3xl w-full bg-white text-sm z-10 left-0 top-3 px-4 py-6 sm:px-6 ${
              isSelectType && isBlock ? "block" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4">Loại</h3>
            <div className="option flex items-center border border-gray-300 rounded-lg p-3 mb-2 cursor-pointer hover:border-red-600 hover:bg-red-100" >
              <div className="option-icon text-red-600 mr-4">
                <FontAwesomeIcon icon={faExchangeAlt} />
              </div>
              <div className="option-content">
                <h4 className="text-base font-bold">Giao lưu</h4>
                <p className="text-sm text-gray-500">
                  Tìm ca giao lưu (vãng lai) cầu lông gần bạn
                </p>
              </div>
            </div>
            <div className="option flex items-center border border-gray-300 rounded-lg p-3 mb-2 cursor-pointer hover:border-red-600 hover:bg-red-100">
              <div className="option-icon text-red-600 mr-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="option-content">
                <h4 className="text-base font-bold">Sân đấu</h4>
                <p className="text-sm text-gray-500">
                  Tìm sân cầu lông gần bạn
                </p>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default Search;
