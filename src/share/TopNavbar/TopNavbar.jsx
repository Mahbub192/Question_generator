import { useContext } from "react";
import logo from "../../assets/images/TopNavbar/logo.png";
import { FaFileLines, FaStar, FaThemeisle } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";

const TopNavbar = () => {
  const { rightNav, setRightNav } = useContext(AuthContext);
  return (
    <div className="mt-3 flex items-center justify-between px-5 py-2 shadow-2xl">
      <div className="flex gap-10">
        <img className="w-20" src={logo} alt="" />
        <div className="flex w-96 items-center justify-between border-4 px-3 border-gray-300">
          <h3 className="text-xl font-semibold">Enter Kahoot title...</h3>
          <h2 className="text-xl font-semibold">Setting</h2>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center border-2 px-4 py-2 bg-gray-200 cursor-pointer shadow-lg rounded-md">
          <p className="text-2xl text-blue-500 font-semibold">
            <FaFileLines />
          </p>
          <h1 className="text-xl font-medium">Templates</h1>
        </div>
        <div className="flex items-center border-2 px-4 py-2 bg-gray-200 cursor-pointer shadow-lg rounded-md">
          <p className="text-2xl text-blue-500 font-semibold">
            <FaFileLines />
          </p>
          <h1 className="text-xl font-medium">Question Generator</h1>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-2">
          <p className="px-2 py-2 rounded-full bg-[#028282] text-white">
            <FaStar />
          </p>
          <h3 className="text-xl  text-[#028282]">Upgrade </h3>
        </div>
        <div
          onClick={() => setRightNav(!rightNav)}
          className="flex gap-1 bg-blue-500 px-3 py-1 rounded-lg cursor-pointer"
        >
          <p className="px-2 py-2 rounded-full  text-white">
            <FaThemeisle />
          </p>
          <h3 className="text-xl  text-white">Themes </h3>
        </div>
        <div className=" ">
          <button className="bg-gray-300 px-5 py-[6px] shadow-2xl font-medium">
            Exit
          </button>
        </div>
        <div className=" ">
          <button className="bg-gray-300 text-white px-5 py-[6px] shadow-2xl font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
