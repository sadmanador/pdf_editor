/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { PDFDataContext } from "../../contexts/DataContext/DataContext";
import { FaPlusCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const PDFPreview = ({ images, setCurrentPage }) => {
  const { data, setData } = useContext(PDFDataContext);

  const handleCurrentPage = (id) => {
    const currentPage = data.find((d) => d.id == id);
    setCurrentPage(currentPage);
  };

  const handleAddAPage = (takenId) => {
    const newId = data.length;
    const blankPage = {
      id: newId + 1,
      takenPosition: takenId,
      imgUrl: "assets/blank.avif",
    };
    const currentPage = data.find((d) => d.id == takenId);
    const restPages = data.filter((d) => d.id != takenId);
    const newData = [currentPage, blankPage, ...restPages];
    setData(newData);
    console.log(data);
  };
  const removePage = (takenId) => {
    const restPages = data.filter((d) => d.id != takenId);
    console.log(restPages);
    setData(restPages);
  };

  return (
    <div>
      <div className="p-4" onClick={() => handleCurrentPage(images.id)}>
        <img src={images.imgUrl} alt="img" />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <button
          type="button"
          className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300"
          onClick={() => handleAddAPage(images.id)}
        >
          <FaPlusCircle />
        </button>
        <button
          type="button"
          className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300"
          onClick={() => removePage(images.id)}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default PDFPreview;
