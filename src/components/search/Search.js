// components/Search.js
import {
  faExchangeAlt,
  faLocationArrow,
  faMagnifyingGlass,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Dialog from "../dialog/Dialog";
import DistrictListDialog from "../dialog/DistrictListDialog";
import { useNavigate } from "react-router-dom";

const districts = ["Thành phố Hà Nội", "Quận Hà Đông", "Quận Hoàn Kiếm", "Quận Ba Đình"];

const Search = () => {
  const [isBlock, setIsBlock] = useState(false);
  const [isSelectType, setIsSelectType] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isDistrictDialogVisible, setIsDistrictDialogVisible] = useState(false);

  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const dialogLocationRef = useRef(null);
  const dialogTypeRef = useRef(null);
  const districtDialogRef = useRef(null);
  const navigate = useNavigate();

  const onFocusInput = () => {
    if (inputValue.trim()) {
      setIsDistrictDialogVisible(true);
    }
  };

  const onBlurInput = () => {
    setTimeout(() => {
      setIsDistrictDialogVisible(false);
    }, 100);
  };

  const handleShowSearchInput = () => {
    setIsBlock(true);
    setIsSelectType(false);
  };

  const handleShowSearchSelect = (event) => {
    event.preventDefault();
    setIsBlock(true);
    setIsSelectType(true);
  };

  // set value when choose
  const handleDistrictClick = (district) => {
    setInputValue(district);
    setIsDistrictDialogVisible(false);
  };

  const handleClickOutside = (event) => {
    if (
      dialogLocationRef.current &&
      !dialogLocationRef.current.contains(event.target) &&
      dialogTypeRef.current &&
      !dialogTypeRef.current.contains(event.target) &&
      !inputRef.current.contains(event.target) &&
      !selectRef.current.contains(event.target) &&
      !districtDialogRef.current.contains(event.target)
    ) {
      setIsBlock(false);
      setIsSelectType(false);
      setIsDistrictDialogVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (inputValue.trim()) {
      setIsDistrictDialogVisible(true);
      setIsSelectType(false);
    } else {
      setIsDistrictDialogVisible(false);
    }
  }, [inputValue]);

  // switch page
  const switchPageCourtExchange = () => {
    const newLink = "/search";
    navigate(newLink);
  }
  return (
    <>
      <div className="search-container items-center bg-white rounded-full p-5 shadow-md mb-4 w-1/3">
        <div className="w-full flex">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onClick={handleShowSearchInput}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            placeholder="Nhập địa điểm"
            className="location-input bg-transparent text-gray-500 mr-4 outline-none px-3 border-r border-[#ccc] border-solid"
          />
          <div
            ref={selectRef}
            className="activity-select border-none bg-transparent text-black mr-4 outline-none flex w-full items-center cursor-pointer"
            onClick={handleShowSearchSelect}
          >
            Giao lưu
          </div>
          <button className="search-button bg-red-600 text-white rounded-full p-2 flex items-center justify-center outline-none hover:bg-red-700" onClick={switchPageCourtExchange}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="relative">
          {/* District list dialog */}
          <DistrictListDialog
            ref={districtDialogRef}
            isVisible={isDistrictDialogVisible}
            districts={districts}
            onDistrictClick={handleDistrictClick}
          />

          {/* Sub location input - Hidden when district dialog is visible */}
          <Dialog
            ref={dialogLocationRef}
            isVisible={!isDistrictDialogVisible && !isSelectType && isBlock}
          >
            <div className="current-location flex items-center text-red-600 font-bold px-3 py-3 hover:bg-[#ccc] hover:cursor-pointer rounded-full">
              <FontAwesomeIcon icon={faLocationArrow} />
              <span className="ml-2" onClick={() => handleDistrictClick("Dùng vị trí hiện tại")}>
                Dùng vị trí hiện tại
              </span>
            </div>
            <div className="popular-addresses px-3 py-3">
              <h3 className="mb-2">Địa chỉ phổ biến</h3>
              <button className="address-button bg-transparent border border-gray-300 rounded-full mr-2 px-4 py-2 hover:border-red-600 text-black" onClick={() => setInputValue("Hà Nội")}>
                Hà Nội
              </button>
              <button className="address-button bg-transparent border border-gray-300 rounded-full mr-2 px-4 py-2 hover:border-red-600 text-black" onClick={() => setInputValue("Hồ Chí Minh")}>
                Hồ Chí Minh
              </button>
            </div>
          </Dialog>

          <Dialog
            ref={dialogTypeRef}
            isVisible={!isDistrictDialogVisible && isSelectType && isBlock}
          >
            <h3 className="mb-4">Loại</h3>
            {/* Giao lưu */}
            <div className="option flex items-center border border-gray-300 rounded-lg p-3 mb-2 cursor-pointer hover:border-red-600 hover:bg-red-100">
              <div className="option-icon mr-4">
                <FontAwesomeIcon icon={faExchangeAlt} />
              </div>
              <div className="option-content">
                <h4 className="text-base font-bold">Giao lưu</h4>
                <p className="text-sm text-gray-500">
                  Tìm ca giao lưu (vãng lai) cầu lông gần bạn
                </p>
              </div>
            </div>
            {/* Sân đánh */}
            <div className="option flex items-center border border-gray-300 rounded-lg p-3 mb-2 cursor-pointer hover:border-red-600 hover:bg-red-100">
              <div className="option-icon mr-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="option-content">
                <h4 className="text-base font-bold">Sân đấu</h4>
                <p className="text-sm text-gray-500">
                  Tìm sân cầu lông gần bạn
                </p>
              </div>
            </div>
            {/* Giải */}
            <div className="relative option flex items-center border border-gray-300 rounded-lg p-3 mb-2 cursor-pointer hover:border-red-600 hover:bg-red-100">
              <div className="option-icon mr-4">
                <img
                  className="w-5 absolute"
                  src="/static/images/icon_tourments.jpg"
                  alt="Giải đấu"
                  style={{ top: "38%", left: "2%" }}
                />
              </div>
              <div className="option-content ml-3">
                <h4 className="text-base font-bold">Giải đấu</h4>
                <p className="text-sm text-gray-500">
                  Tìm giải đấu đang chuẩn bị tổ chức
                </p>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Search;
