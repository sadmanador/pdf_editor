import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Shared/Navbar/Navbar";
import Aside from "../../pages/Home/Shared/Aside/Aside";

const Main = () => {
  return (
    <div className="Main-layout">
      <Navbar />
      <div className="p-12">
      <Outlet />
      </div>
      <Aside />
    </div>
  );
};

export default Main;
