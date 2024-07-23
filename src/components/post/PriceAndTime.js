import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../input/Input";
import Switch from '@mui/material/Switch';

const PriceAndTime = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTIme] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const onChangeSwitch = (event) => {
    setIsChecked(event.target.checked);
    console.log(event);
  }
  return (
    <>
      <div className="font-semibold text-lg text-black-ish-200">
        Thông tin về giá và thời gian
      </div>

      {/* Thông tin về thời gian */}
      <div className="time border-2 border-solid border-[#ccc]">
        <div className="time-detail flex justify-between px-4 py-2">
          <div className="date border-[1px] border-solid border-[#ccc] rounded-md px-3 py-1 flex z-50 w-[33.33%] mr-1 items-center">
            <label className="mr-1">Ngày: </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="start-time border-[1px] border-solid border-[#ccc] rounded-md px-3 py-1 flex z-50 w-[33.33%] mr-1 items-center">
            <label className="mr-1">Giờ bắt đầu: </label>
            <DatePicker
              showTimeSelect
              showTimeSelectOnly
              dateFormat="HH:mm"
              timeIntervals={10}
              selected={startTime}
              onChange={(time) => setStartTime(time)}
            />
          </div>
          <div className="end-time border-[1px] border-solid border-[#ccc] rounded-md px-3 py-1 flex z-50 w-[33.33%] items-center">
            <label className="mr-1">Giờ kết thúc: </label>
            <DatePicker
              showTimeSelect
              showTimeSelectOnly
              dateFormat="HH:mm"
              timeIntervals={10}
              selected={endTime}
              onChange={(time) => setEndTIme(time)}
            />
          </div>
        </div>
        <div className="number px-4 py-2 flex justify-between">
          <div className="isRepeat">
            <label>Lặp lại: </label>
            <Switch {...label} onChange={onChangeSwitch}/>
          </div>
          <Input
            title={"Số sân đánh"}
            margin={"mt-4 rounded-md w-1/2"}
            id={"numberField"}
            type={"number"}
          >
            <span className="text-red-400 ml-1">*</span>
          </Input>
        </div>
      </div>

      {/* Thông tin về giá */}
      <div className="price"></div>
    </>
  );
};

export default PriceAndTime;
