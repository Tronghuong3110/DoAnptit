import { Button } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import StickyHeadTable from "../table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PostRental = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTIme] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const columns = [
    { id: "STT", label: "STT", minWidth: 70 },
    { id: "date", label: "Ngày", minWidth: 130 },
    {
      id: "startTime",
      label: "Start time",
      minWidth: 100,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "endTime",
      label: "End time",
      minWidth: 100,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "number",
      label: "Số sân",
      minWidth: 50,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "action",
      label: "Action",
      minWidth: 50,
      align: "center",
      format: (value) => value.toFixed(2),
    },
  ];

  const deleteItem = (index) => {
    setTimeSlot((pre) => (
       pre.filter((item) => item.STT !== index)
    ));
  };

  const updateCaDanh = (stt, date, newStartTime, newEndTime) => {
    setTimeSlot((prevTimeSlot) =>
      prevTimeSlot.map((item) => {
        if (item.STT === stt) {
          return {
            ...item,
            date:
              date != null ? (
                <DatePicker
                  className="w-full"
                  dateFormat={"dd/MM/yyyy"}
                  selected={date}
                  onChange={(date) =>
                    updateCaDanh(timeSlot.length + 1, date, null, null)
                  }
                />
              ) : (
                item.date
              ),
            startTime:
              newStartTime != null ? (
                <DatePicker
                  className="w-full"
                  showTimeSelect
                  showTimeSelectOnly
                  dateFormat={"HH:mm"}
                  selected={newStartTime}
                  onChange={(time) =>
                    updateCaDanh(timeSlot.length + 1, null, time, null)
                  }
                />
              ) : (
                item.startTime
              ),
            endTime:
              newEndTime != null ? (
                <DatePicker
                  className="w-full"
                  showTimeSelect
                  showTimeSelectOnly
                  dateFormat={"HH:mm"}
                  selected={newEndTime}
                  onChange={(time) =>
                    updateCaDanh(timeSlot.length + 1, null, null, time)
                  }
                />
              ) : (
                item.endTime
              ),
          };
        }
        return item;
      })
    );
  };

  const addCaDanh = () => {
    const obj = {
      STT: timeSlot.length + 1,
      date: (
        <DatePicker
          className="w-full"
          dateFormat={"dd/MM/yyyy"}
          selected={startDate}
          onChange={(date) =>
            updateCaDanh(timeSlot.length + 1, date, null, null)
          }
        />
      ),
      startTime: (
        <DatePicker
          className="w-full"
          showTimeSelect
          showTimeSelectOnly
          dateFormat={"HH:mm"}
          selected={startTime}
          onChange={(time) =>
            updateCaDanh(timeSlot.length + 1, null, time, null)
          }
        />
      ),
      endTime: (
        <DatePicker
          className="w-full"
          showTimeSelect
          showTimeSelectOnly
          dateFormat={"HH:mm"}
          selected={endTime}
          onChange={(time) =>
            updateCaDanh(timeSlot.length + 1, null, null, time)
          }
        />
      ),
      number: (
        <input
          type="number"
          placeholder="Số sân"
          className="w-full border-[1px] solid border-[#ccc] px-1 rounded-r-sm"
          min={0}
        />
      ),
      action: (
        <div onClick={() => deleteItem(timeSlot.length + 1)}>
          <FontAwesomeIcon icon={faTrash} className="text-red-500" />
        </div>
      ),
    };
    setTimeSlot([...timeSlot, obj]);
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
          <div className="time-detail grid grid-cols-7 py-4 gap-3 items-center">
            <div className="date border-[1px] border-solid border-[#ccc] rounded-md px-3 pt-3.5 pb-3 flex mr-1 items-center col-span-2">
              <label className="mr-1">Ngày: </label>
              <DatePicker
                dateFormat={"dd/MM/yyyy"}
                className="w-full items-center z-50"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="start-time border-[1px] border-solid border-[#ccc] rounded-md px-3 pt-3.5 pb-3 flex mr-1 items-center col-span-2">
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

            <div className="end-time border-[1px] border-solid border-[#ccc] rounded-md px-3 pt-3.5 pb-3 flex items-center col-span-2">
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

            <div className="btn btn-save">
              <Button
                variant="contained"
                onClick={() => {
                  addCaDanh();
                }}
              >
                Thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="font-semibold text-lg text-black-ish-200">
        Danh sách các ca cho thuê
      </div>
      <div className="border-[1px] solid border-[#ccc]">
        <StickyHeadTable columns={columns} rows={timeSlot} />
      </div>
    </>
  );
};

export default PostRental;
