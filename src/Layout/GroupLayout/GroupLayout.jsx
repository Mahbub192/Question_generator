import { Outlet } from "react-router-dom";
import LeftSide from "../../pages/CreateGroupSection/LeftSide/LeftSide";

const GroupLayout = () => {
  return (
    <div className="flex container mx-auto gap-5">
      <div className="w-2/12 hidden md:block">
        <LeftSide />
      </div>
      <div className="10/6">
        
        <Outlet />
      </div>
    </div>
  );
};

export default GroupLayout;
