import React, { useState } from "react";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/input/Input";
import Modal from "../../components/modal/Modal";

const Post = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalTypeOpen, setIsModalTypeOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleOpenCloseModalType = () => {
    setIsModalTypeOpen(!isModalTypeOpen);
  };
  // const handleCloseModalType = () => {
  //   setIsModalTypeOpen(true);
  // };
  const handleOpenCloseModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleSubmit = () => {
    setIsModalTypeOpen(false);
    setModalOpen(false);
  };

  return (
    <div>
      {/* headers */}
      <nav className="fixed w-full top-0 z-50 bg-white">
        <div className="header shadow py-3">
          <Header textColor={"text-black"} />
        </div>
      </nav>

      <main className="absolute top-[13%] w-full">
        {/* container */}
        <div className="container max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="my-4 sm:my-6 rounded-2xl border-2 flex flex-col md:flex-row gap-6 p-4 sm:p-6">
            {/* info */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="font-semibold text-lg text-black-ish-200">
                Thông tin chung
              </div>
              {/* type post */}
              <div
                className="type-post border h-10 border-solid border-[#ccc] px-3 py-6 flex items-center cursor-pointer w-full relative"
                onClick={handleOpenCloseModalType}
              >
                {/* text */}
                <div className="text flex flex-col w-11/12 border-r-[1px] border-[#ccc]">
                  Chọn loại bài đăng
                </div>
                {/* icon dropdown */}
                <div className="icon-drop-down absolute right-[2%] flex">
                  <FontAwesomeIcon icon={faAngleDown} className="text-lg" />
                </div>

                {/* Modal type post */}
                {isModalTypeOpen && (
                  <Modal
                    title="Loại bài đăng"
                    // isOpen={isModalTypeOpen}
                    onClose={()=>setIsModalTypeOpen(false)}
                    // onSubmit={()}
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
                  </Modal>
                )}
              </div>
              {/* name */}
              <Input title={"Tên sân"}>
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
              <textarea className="description"></textarea>
            </div>

            {/* image and video */}
            <div className="flex flex-col gap-4 md:w-1/3 w-full relative"></div>
          </div>
        </div>
      </main>

      {/* footer */}
      <div className="footer"></div>
    </div>
  );
};

export default Post;
