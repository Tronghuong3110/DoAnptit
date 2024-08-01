import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../input/Input";
import Switch from "@mui/material/Switch";
import MultipleSelect from "../select/Select";

const PriceAndTime = ({ participant }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTIme] = useState(new Date());
  const [isRepeat, setIsRepeat] = useState(false);
  const [dayOfWeeksRepeat, setDayOfWeeksRepeat] = useState([]);
  const [isMan, setIsMan] = useState(false);
  const [isWomen, setIsWomen] = useState(false);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const repeatData = ["Lặp lại 1 tuần", "Lặp lại hàng tuần"];
  const dayOfWeeks = [
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ 7",
    "Chủ nhật",
  ];
  const shuttlecockTypes = [
    "Cầu thành công 77",
    "Cầu thành công 76",
    "Cầu ba sao proX",
    "Cầu victor lark 5",
    "Cầu Vina Star",
    "Cầu Bubadu",
    "Cầu lông 88",
    "Cầu yonex Mavis 10",
    "Cầu victor NCS",
    "Cầu pro petrel",
    "Cầu lining AN01",
    "Cầu Attack ATD-01",
    "Cầu PTM 911 pro",
    "Cầu sao mai",
    "Cầu tiến bộ",
    "Cầu lê quang",
    "Cầu taro",
    "Cầu xsmash",
    "Cầu hytec s90",
    "Cầu yonex AS50",
  ];

  // if (participant && participant.toLowerCase().includes("nam")) {
  //   setIsMan(true);
  // }
  // if (participant && participant.toLowerCase().includes("nu")) {
  //   setIsWomen(true);
  // }
  useEffect(() => {
    if (participant && participant.toLowerCase() === "nam") {
      setIsMan(true);
      setIsWomen(false);
    }
    else if (participant && participant.toLowerCase() === "nữ") {
      setIsWomen(true);
      setIsMan(false);
    }
    else if(participant && participant.toLowerCase() === "cả nam và nữ") {
      setIsWomen(true);
      setIsMan(true);
    }
  }, [participant]);

  const onChangeSwitch = (event) => {
    setIsRepeat(event.target.checked);
    console.log(event);
  };

  const chooseDayOfWeek = (element) => {
    const checked = element.target.checked;
    if (checked) {
      setDayOfWeeksRepeat(...dayOfWeeksRepeat, element.target.value);
    }
  };

  const submit = () => {
    console.log(dayOfWeeksRepeat);
  };

  return (
    <>
      <div className="font-semibold text-lg text-black-ish-200">
        Thông tin về thời gian
      </div>

      {/* Thông tin về thời gian */}
      <div className="time border-2 border-solid border-[#ccc] pb-2">
        <div className="px-4">
          {/* time */}
          <div className="time-detail grid grid-cols-3 py-4 gap-3 items-center">
            <div className="date border-[1px] border-solid border-[#ccc] rounded-md px-3 pt-3.5 pb-3 flex mr-1 items-center">
              <label className="mr-1">Ngày: </label>
              <DatePicker
                dateFormat={"dd/MM/yyyy"}
                className="w-full items-center"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="start-time border-[1px] border-solid border-[#ccc] rounded-md px-3 pt-3.5 pb-3 flex mr-1 items-center">
              <label className="mr-1">Giờ bắt đầu: </label>
              <DatePicker
                className="w-full"
                showTimeSelect
                showTimeSelectOnly
                dateFormat="HH:mm"
                timeIntervals={10}
                selected={startTime}
                onChange={(time) => setStartTime(time)}
              />
            </div>

            <div className="end-time border-[1px] border-solid border-[#ccc] rounded-md px-3 pt-3.5 pb-3 flex items-center">
              <label className="mr-1">Giờ kết thúc: </label>
              <DatePicker
                className="w-full"
                showTimeSelect
                showTimeSelectOnly
                dateFormat="HH:mm"
                timeIntervals={10}
                selected={endTime}
                onChange={(time) => setEndTIme(time)}
              />
            </div>
          </div>

          {/* số sân + lặp lại */}
          <div
            className={`number py-2 items-center mt-3 ${
              isRepeat ? "grid grid-cols-3 gap-3" : "flex justify-between"
            }`}
          >
            {/* lặp lại hay không */}
            <div className="isRepeat">
              <label>Lặp lại: </label>
              <Switch {...label} onChange={onChangeSwitch} />
            </div>

            {/* chọn điều kiện lặp lại ==> hàng tuần hoặc một tuần, chọn các ngày lặp lại */}
            {isRepeat && (
              <div className="">
                <MultipleSelect
                  width={"100%"}
                  title={"Lặp lại"}
                  data={repeatData}
                  id={"repeat"}
                />
              </div>
            )}

            {/* điền số lượng sân đối đánh */}
            {/* <div> */}
            <Input
              title={"Số sân đánh"}
              margin={` rounded-md ${isRepeat ? "w-full" : "w-1/2"}`}
              id={"numberField"}
              type={"number"}
            >
              <span className="text-red-400 ml-1">*</span>
            </Input>
            {/* </div> */}
          </div>

          {/* chọn những ngày lặp lại */}

          {isRepeat && (
            <div className="grid grid-cols-3 py-4 gap-3">
              <div className="col-span-1"></div>
              <div className="flex justify-between col-span-2">
                {Array.from({ length: 7 }, (_, i) => (
                  <div className="grid grid-flow-row gap-2">
                    <label>{dayOfWeeks[i]}</label>
                    <input
                      type="checkbox"
                      placeholder=""
                      value={dayOfWeeks[i]}
                      onClick={(element) => chooseDayOfWeek(element)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thông tin về giá */}

      <div className="font-semibold text-lg text-black-ish-200">
        Thông tin về giá cả
      </div>

      <div className="time border-2 border-solid border-[#ccc]">
        <div className={`px-4 py-4 ${isMan || isWomen ? "grid grid-cols-3 gap-3" : ""}`}>
          <div className="shuttlecockType">
            <MultipleSelect
              width={"100%"}
              title={"Loại cầu"}
              data={shuttlecockTypes}
              id={"shuttlecockType"}
            />
          </div>

          {isMan && (
            <div className="price-man">
              <Input
                title={"Giá nam(VND)"}
                margin={" rounded border-[#ccc] border-solid"}
                id={"priceMan"}
                type={"number"}
              >
                <span className="text-red-400 ml-1">*</span>
              </Input>
            </div>
          )}

          {isWomen && (
            <div className="price-women">
              <Input
                title={"Giá nữ(VND)"}
                margin={" rounded border-[#ccc] border-solid"}
                id={"priceWomen"}
                type={"number"}
              >
                <span className="text-red-400 ml-1">*</span>
              </Input>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PriceAndTime;
