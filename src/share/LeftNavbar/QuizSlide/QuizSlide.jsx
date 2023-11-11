import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const QuizSlide = () => {
    const {setCopySlide} = useContext(AuthContext)
  return (
    <div className=" bg-[#eaf4fc]">
      <div className="">
        <div className="flex gap-1 px-2">
          <div className="mt-10">
            <button onClick={()=>setCopySlide(<QuizSlide />)} className="text-xl p-0">
              <FaRegCopy />
            </button>
            <button className="mt-4 text-xl p-0">
              {" "}
              <AiOutlineDelete />
            </button>
          </div>
          <div className="h-28 border-2 border-gray-400 w-28 ">
           <div className="">
           <div className="w-16 mx-auto mt-1 border-gray-500">
              <input
              className="w-full "
              />
            </div>
            <div>
              <div className="flex w-full  items-center justify-center bg-grey-lighter">
                <label className="w-[15px] flex flex-col items-center  bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="flex pl-1">
              <div className="w-1/2">
                <div className="">
                  <input
                    className="border-2 w-10 h-5"
                  />
                </div>
                <div className="">
                  <input
                    className="border-2 w-10 h-5"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="">
                  <input
                    className="border-2 w-10 h-5"
                  />
                </div>
                <div className="">
                  <input
                    className="border-2 w-10 h-5"
                  />
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSlide;
