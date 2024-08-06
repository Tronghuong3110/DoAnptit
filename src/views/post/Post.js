import React, { useState } from "react";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/input/Input";
import Modal from "../../components/modal/Modal";
import PostGL from "../../components/post/PostGL";
import { Button } from "@mui/material";
import Footer from "../../components/footer/Footer";
import PostRental from "../../components/post/PostRental";
import MultipleSelect from "../../components/select/Select";

const Post = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalTypeOpen, setIsModalTypeOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [participant, setparticipant] = useState("");
  const [postType, setPostType] = useState({});
  const [timeRepeat, setTimeRepeat] = useState({});
  const data = [
    {id: 1, name: "Tuyển giao lưu"},
    {id: 2, name: "Cho thuê sân đánh"},
    {id: 3, name: "Tổ chức giải đấu"}
  ]

  const handleOpenCloseModalType = () => {
    setIsModalTypeOpen(!isModalTypeOpen);
  };
  const handleOpenCloseModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleSubmit = () => {
    setIsModalTypeOpen(false);
    setModalOpen(false);
  };

  //=================================save======================================
  const handleSave = () => {
    console.log(participant);
  };

  // ============================= choose image ===================================
  const chooseFile = () => {
    const inputFile = document.querySelector("#image");
    const res = inputFile.click();
    // console.log(res);
  };

  const handleChangeFile = (e) => {
    const image = e.target.files[0];
    if (image) {
      const obj = {
        type: image.type,
        name: URL.createObjectURL(image),
      };
      setFiles([...files, obj]);
    }
  };

  const handleDelete = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* headers */}
      <nav className="fixed w-full top-0 z-50 bg-white">
        <div className="header shadow py-3">
          <Header textColor={"text-black"} />
        </div>
      </nav>

      <main className="mt-[30%] md:mt-[13%] lg:mt-[8%] w-full">
        {/* container */}
        <div className="container max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="my-4 sm:my-6 rounded-2xl border-2 flex flex-col md:flex-row gap-6 p-4 sm:p-6">
            {/* info */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="font-semibold text-lg text-black-ish-200">
                Thông tin chung
              </div>
              {/* type post */}
              {/* <div className="type-post border h-10 border-solid border-[#ccc] px-3 py-6 flex items-center cursor-pointer w-full relative"> */}
                  <MultipleSelect
                    width={"100%"}
                    title={"Chọn loại bài đăng"}
                    id={"postType"}
                    data={data}
                    setValue={setPostType}
                    style={{marginTop: "25px"}}
                  />
              {/* </div> */}
              {/* name */}
              <Input
                title={"Tên sân"}
                margin={"mt-5"}
                id={"title"}
                type={"text"}
              >
                <span className="text-red-400 ml-1">*</span>
              </Input>
              {/* address */}
              <div className="select--address border h-10 border-solid border-[#ccc] px-3 py-6 flex items-center cursor-pointer w-full relative mt-5">
                {/* text */}
                <div
                  className="text flex flex-col w-11/12 border-r-[1px] border-[#ccc]"
                  onClick={handleOpenCloseModal}
                >
                  Địa chỉ sân
                </div>
                {/* icon dropdown */}
                <div className="icon-drop-down absolute right-[2%] flex">
                  {/* <FontAwesomeIcon icon={faAngleDown} className="text-lg" /> */}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-lg text-red-500"
                  />
                </div>
              </div>
              {isModalOpen && (
                <Modal
                  title="Chọn địa chỉ"
                  // isOpen={isModalOpen}
                  onClose={handleOpenCloseModal}
                  onSubmit={handleSubmit}
                >
                  {/* Modal Content */}
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm text-gray-700"
                      >
                        Chọn tỉnh thành
                      </label>
                      <select
                        id="city"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="">Chọn tỉnh thành</option>
                        {/* Add options here */}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="district"
                        className="block text-sm text-gray-700"
                      >
                        Chọn quận huyện
                      </label>
                      <select
                        id="district"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="">Chọn quận huyện</option>
                        {/* Add options here */}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm text-gray-700"
                      >
                        Điền địa chỉ cụ thể
                      </label>
                      <textarea
                        id="address"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex justify-end mt-6 space-x-4">
                    <button
                      onClick={handleOpenCloseModal}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                    >
                      Hủy
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
                    >
                      Xong
                    </button>
                  </div>
                </Modal>
              )}
              {/* descriptionn */}
              <div class="relative mt-5 border-[1px]">
                <textarea
                  id="description"
                  placeholder=" "
                  required
                  class="block w-full px-2.5 pb-2.5 pt-4 text-16 text-gray-900 bg-white rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                ></textarea>
                <label
                  for="description"
                  class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2.5 text-[16px]"
                >
                  Mô tả chi tiết
                  <span className="text-red-400 ml-1 gap-3">*</span>
                </label>
              </div>
              {/* Các yêu cầu chi tiết */}
              {/* <PostGL setValue={setparticipant} participant={participant}/> */}

              {postType.id === 2 && 
                <PostRental/>
              }

              {postType.id === 1 &&
                <PostGL setValue={setparticipant} participant={participant} setTimeRepeat={setTimeRepeat}/>
              }
            </div>

            {/* image and video and contact */}
            <div className="flex flex-col gap-4 md:w-1/3 w-full relative">
              <div className="font-semibold text-lg text-black-ish-200">
                Thông tin liên hệ
              </div>
              {/* info contact */}
              <div className="contact flex-col gap-4 flex">
                <Input title={"Số điện thoại"} id={"contact"} type={"number"}>
                  <span className="text-red-400 ml-1">*</span>
                </Input>

                <Input
                  title={"Link facebook"}
                  margin={"mt-5"}
                  id={"facebook"}
                  type={"text"}
                >
                  <span className="text-red-400 ml-1">*</span>
                </Input>
              </div>

              {/* image and video */}
              <div className="flex flex-col gap-4">
                <div className="font-semibold text-lg text-black-ish-200 mt-2">
                  Hình ảnh và video mô tả
                </div>
                <div
                  className="w-full h-[25vh] border-[2px] border-dashed border-[#ccc] flex flex-col hover:opacity-80 hover:cursor-pointer"
                  onClick={chooseFile}
                >
                  <div className="flex justify-center items-center h-3/5">
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ color: "#000", height: "50px" }}
                    />
                  </div>
                  <div className="flex justify-center items-center text-2xl">
                    Thêm ảnh hoặc video
                  </div>
                  <input
                    type="file"
                    hidden
                    multiple
                    id="image"
                    onChange={handleChangeFile}
                  />
                </div>
                {/* hiển thị danh sách ảnh và video đã chọn */}
                {files.length > 0 && (
                  <div className="mt-2 grid gap-3 grid-cols-3">
                    {files.map((file, index) => {
                      return (
                        <div
                          key={index}
                          className="relative inline-block text-sm text-gray-600"
                        >
                          <button
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-[50%] w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:bg-blend-darken z-50"
                            onClick={() => handleDelete(index)}
                          >
                            X
                          </button>
                          {file.type.startsWith("video") ? (
                            <video controls className="w-auto h-auto">
                              <source src={file.name} type="video/mp4" />
                            </video>
                          ) : (
                            <img
                              src={`${file.name}`}
                              alt="ảnh test"
                              className="w-auto h-auto "
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* button cancel or save */}
          <div className="my-4 sm:my-6 flex flex-col md:flex-row gap-12 mt-4 justify-center">
            <div className="btn btn-cancel">
              <Button variant="outlined">Hủy bỏ</Button>
            </div>

            <div className="btn btn-save" onClick={handleSave}>
              <Button variant="contained">Đăng tin</Button>
            </div>
          </div>
        </div>
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Post;
