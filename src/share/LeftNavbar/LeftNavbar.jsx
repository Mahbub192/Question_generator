import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

const LeftNavbar = () => {
  return (
    <div className="mt-5">
      <div className="bg-[#eaf4fc]">
      <div className="text-sm font-bold pl-7 mb-1">1 Quiz</div>
      <div className="flex gap-1 px-2">
        <div className="mt-10">
          <p className="text-xl">
            <FaRegCopy />
          </p>
          <p className="mt-4 text-xl">
            {" "}
            <AiOutlineDelete />
          </p>
        </div>
        <p className="h-24 border-2 border-black w-28"></p>
      </div>
      </div>
      <div className="text-center mt-4">
        <button className="bg-[#1368ce] text-white px-3 py-2 text-lg rounded-lg shadow-xl hover:bg-[#163c6b] font-medium">
          Add Question
        </button>
      </div>
      <div className="text-center mt-5">
        <button className="bg-gray-300  px-7 py-2 text-lg rounded-lg shadow-2xl  font-medium">
          Add Slide
        </button>
      </div>
    </div>
  );
};

export default LeftNavbar;
