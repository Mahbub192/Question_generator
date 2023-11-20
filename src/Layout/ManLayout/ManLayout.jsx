import { Outlet } from "react-router-dom";
import TopNavbar from "../../share/TopNavbar/TopNavbar";
import RightNavbar from "../../share/RightNavbar/RightNavbar";
import LeftNavbar from "../../share/LeftNavbar/LeftNavbar";
import FrequentlyChangeThem from "../../share/TopNavbar/FrequentlyChangeThem/FrequentlyChangeThem";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AddQuestionButton from "../../conponent/AddQuestionButton/AddQuestionButton";

const ManLayout = () => {
  const{rightNav ,manLayout} = useContext(AuthContext)

  return (
    <div className="h-screen">
      <TopNavbar />
      <div className="flex flex-wrap">
        <div className="order-2 md:order-1  md:w-1/12">
          <LeftNavbar />
        </div>
        <div className="order-1 md:order-2 w-full md:w-9/12 relative">
          {
            manLayout ? <p>{manLayout}</p> : <Outlet />
          }
          <div className=" absolute  top-10 left-5">
          <AddQuestionButton />
          </div>
        </div>
        <div className="hidden order-3  w-2/12">
          {rightNav ? <FrequentlyChangeThem /> : <RightNavbar />}
          
        </div>
      </div>
    </div>
  );
};

export default ManLayout;
