import React, { useState } from "react";
import Input from "../input/Input";
import MultipleSelect from "../select/Select";

const PostGL = ({ setValue }) => {
  const data = [
    "Yếu",
    "TB-",
    "TB+",
    "TB++",
    "TB+++",
    "Trung Bình Khá",
    "Khá",
    "Chuyên nghiệp",
  ];
  const participants = ["Nam", "Nữ", "Cả nam và nữ"];
  // const [value, setValue] = useState("");
  return (
    <>
      <div className="font-semibold text-lg text-black-ish-200">
        Yêu cầu chi tiết
      </div>

      {/* Số lượng cần tuyển và đối tượng cần tuyển */}
      <div className="flex justify-between items-center">
        {/* Số lượng tuyển */}
        <Input
          title={"Số lượng cần tuyển"}
          margin={"w-[48%] rounded border-[#ccc] border-solid"}
          id={"numberGL"}
          type={"number"}
        >
          <span className="text-red-400 ml-1">*</span>
        </Input>

        {/* Đối tượng cần tuyển */}
        <MultipleSelect
          width={"48%"}
          title={"Đối tượng"}
          data={participants}
          id={"participants"}
          setValue = {setValue}
        />
      </div>

      {/* Trình độ cần tuyển */}
      <div className="flex justify-between">
        {/* trình độ tối thiểu */}
        <MultipleSelect
          width={"48%"}
          title={"Trình độ tối thiểu"}
          data={data}
          id={"minimun-level"}
        />

        {/* Trình độ tối đa */}
        <MultipleSelect
          width={"48%"}
          title={"Trình độ tối đa"}
          data={data}
          id={"maximun-level"}
        />
      </div>

      {/* Mô tả thêm */}
      <div class="relative mt-5 border-[1px]">
        <textarea
          id="description-team"
          placeholder=" "
          required
          class="block w-full px-2.5 pb-2.5 pt-4 text-16 text-gray-900 bg-white rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        ></textarea>
        <label
          for="description-team"
          class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2.5 text-[16px]"
        >
          Mô tả thêm về đội
        </label>
      </div>
    </>
  );
};

export default PostGL;
