import { Outlet } from "react-router-dom";
import TopNavbar from "../../share/TopNavbar/TopNavbar";
import RightNavbar from "../../share/RightNavbar/RightNavbar";
import LeftNavbar from "../../share/LeftNavbar/LeftNavbar";

const ManLayout = () => {
  return (
    <div>
      <TopNavbar />
      <div className="flex">
        <div className="w-1/12">
          <LeftNavbar />
        </div>
        <div className="w-9/12">
          <Outlet />
        </div>
        <div className="2/12">
          <RightNavbar />
        </div>
      </div>
    </div>
  );
};

export default ManLayout;
