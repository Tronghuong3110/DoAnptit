import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";
import React from "react";

const Court = () => {
  return (
    <div className=" rounded-lg shadow border-[1px] solid border-[#ccc] px-5 py-3">
        <div className="court flex relative cursor-pointer">
      <div className="image contents">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgjQv_zLxA8iyHJJi36MH1znm3qFHf4qfKg&s"
          alt="Ảnh sân default"
          className="w-[175px] h-[210px] object-fill"
        />
      </div>
      <div className="border-x-[1px] solid mx-3 border-[#e6e3e3]"></div>

      <div className="info grid grid-flow-row gap-2">
        <div className="distance flex">
          <Icon
            icon="game-icons:path-distance"
            width="1.2em"
            height="1.2em"
            style={{ color: "red" }}
          />
          <span className="ml-2">Cách bạn khoảng ~ 1km</span>
        </div>
        <div className="name flex">
          <Icon
            icon="material-symbols:distance-outline"
            width="1.2em"
            height="1.2em"
            style={{ color: "red" }}
          />
          <span className="ml-2">Sân 300 Nguyễn Xiển</span>
        </div>
        <div className="participant-number flex">
          <Icon
            icon="bi:people"
            width="1.2em"
            height="1.2em"
            style={{ color: "red" }}
          />
          <span className="ml-2">4 - Nam và nữ</span>
        </div>
        <div className="level flex">
          <Icon
            icon="carbon:skill-level-advanced"
            width="1.2em"
            height="1.2em"
            style={{ color: "red" }}
          />
          <span className="ml-2">Trung bình - Trung bình khá</span>
        </div>
        <div className="time flex">
          <Icon
            icon="mingcute:time-line"
            width="1.2em"
            height="1.2em"
            style={{ color: "red" }}
          />
          <span className="ml-2">14/08/2024, Ca 20h-22h</span>
        </div>
        <div className="price flex">
          <Icon
            icon="material-symbols:attach-money"
            width="1.2em"
            height="1.2em"
            style={{ color: "red" }}
          />
          <span className="ml-2">Nam: 80k, Nữ: 40k</span>
        </div>
      </div>

      <div className="button absolute right-0 bottom-0">
        {/* <Button variant="contained" className="h-[40px]">Hủy đăng ký</Button> */}
        <Button variant="contained" className="h-[40px]">
          Đăng ký
        </Button>
      </div>

      <div className="name-author grid grid-flow-col gap-2 absolute right-0 top-0 hover:opacity-75 cursor-pointer items-center">
        <div className="avatar">
          <img
            src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/445046703_1899151220523801_6024436370293723393_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=SJm2Af6mNooQ7kNvgFVBTwl&_nc_ht=scontent.fhan20-1.fna&cb_e2o_trans=t&oh=00_AYA10rz2MDiJv0JHq6JAJC9vaWh5kiJ12lk3kALBUemKWA&oe=66C17C73"
            alt="Ảnh đại diện tác giả"
            className="h-[30px] object-fill rounded-[50%]"
          />
        </div>
        <div className="username">
            <span>Nguyễn Trọng Hướng</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Court;
