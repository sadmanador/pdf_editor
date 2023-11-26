import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="py-10
      flex flex-wrap flex-col justify-center gap-5
        px-12 space-y-3 bg-[#D0E7D2] h-screen"
    >
      <NavLink to="/" type="button" className="btn-primary">
        Add Page, Split, Merge
      </NavLink>
      <NavLink to="/crop" type="button" className="btn-primary">
        Crop PDF
      </NavLink>
    </div>
  );
};

export default Navbar;
