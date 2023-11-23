import { FaDiamond, FaEllipsisVertical } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { TbSquareRounded } from "react-icons/tb";
import { TiTick } from "react-icons/ti";



const TrueOrFalse = () => {
  const { OutLatImage } = useContext(AuthContext);

  const handleMenu =()=>{
    console.log(handleMenu)
  }
  return (
    <div
      className="bg-gray-100  h-[calc(100vh-155px)]"
      style={{
        backgroundImage: `url(${OutLatImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="px-10 pt-12 flex items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full text-center text-2xl py-2"
          />
          <div className="md:hidden">
          <span onClick={handleMenu} className="text-white text-3xl font-bold"><FaEllipsisVertical /></span>
        </div>
        </div>
        <div>
          <div className="flex w-full  items-center justify-center bg-grey-lighter">
            <label className="w-[300px] md:w-[600px] flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer mt-10 md:mt-16">
              <svg
                className="w-40 h-20 md:h-60"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Select a file
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      <div className=" md:flex gap-8 mt-20 px-5">
        <div className="flex md:w-1/2 py-5 px-3 md:py-16  md:px-10 items-center justify-between rounded-lg shadow-2xl bg-[#1368ce]">
          <div className="flex items-center gap-5">
            <p className="text-3xl font-medium font-serif text-white">
              <FaDiamond />
            </p>
            <p className="text-3xl font-medium font-serif text-white">True</p>
          </div>
          <div className="relative">
          <button className="text-6xl text-white "><TbSquareRounded/></button>
          <p className="text-5xl text-white absolute top-2 left-2 opacity-0 hover:opacity-100"><TiTick/></p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 flex md:w-1/2 py-5 px-3  md:py-16  md:px-10 items-center justify-between rounded-lg shadow-2xl bg-[#e21b3c]">
          <div className="flex items-center gap-5">
            <p className="text-3xl font-medium font-serif text-white">
              <FaDiamond />
            </p>
            <p className="text-3xl font-medium font-serif text-white">False</p>
          </div>
          <div className="relative">
          <button className="text-6xl text-white "><TbSquareRounded/></button>
          <p className="text-5xl text-white absolute top-2 left-2 opacity-0 hover:opacity-100"><TiTick/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueOrFalse;
