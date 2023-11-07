import { Outlet } from "react-router-dom";
import TopNavbar from "../../share/TopNavbar/TopNavbar";
import RightNavbar from "../../share/RightNavbar/RightNavbar";
import LeftNavbar from "../../share/LeftNavbar/LeftNavbar";
import FrequentlyChangeThem from "../../share/TopNavbar/FrequentlyChangeThem/FrequentlyChangeThem";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ManLayout = () => {
  const{rightNav} = useContext(AuthContext)
  return (
    <div>
      <TopNavbar />
      <div className="flex flex-wrap">
        <div className="w-1/12">
          <LeftNavbar />
        </div>
        <div className="w-9/12">
          <Outlet />
        </div>
        <div className="2/12">
          {rightNav ? <FrequentlyChangeThem /> : <RightNavbar />}
          
        </div>
      </div>
    </div>
  );
};

export default ManLayout;
