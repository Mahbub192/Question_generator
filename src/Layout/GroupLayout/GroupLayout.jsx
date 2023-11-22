import { Outlet } from "react-router-dom";
import LeftSide from "../../pages/CreateGroupSection/LeftSide/LeftSide";
import TopSide from "../../pages/CreateGroupSection/TopSide/TopSide";

const GroupLayout = () => {
  return (
    <div className="flex container mx-auto gap-5">
      <div className="w-2/12">
        <LeftSide />
      </div>
      <div className="10/6">
        <TopSide />
        <Outlet />
      </div>
    </div>
  );
};

export default GroupLayout;
