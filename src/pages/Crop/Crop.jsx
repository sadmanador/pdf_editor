import React, { useContext } from "react";
import { PDFDataContext } from "../../contexts/DataContext/DataContext";

const Crop = () => {
  const { currentPage } = useContext(PDFDataContext);

  return (
    <div>
        <div className="text-3xl">Crop</div>
      <img
        className="max-h-fit w-[500px]"
        src={currentPage.imgUrl}
        alt="current page"
      />
    </div>
  );
};

export default Crop;
