import { useContext } from "react";
import { PDFDataContext } from "../../../contexts/DataContext/DataContext";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const {currentPage} = useContext(PDFDataContext);


  return <div>
    <img className="max-h-fit w-[500px]" src={currentPage.imgUrl} alt="current page" />
  </div>;
};

export default Home;
