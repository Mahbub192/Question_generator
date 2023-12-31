import { FaEllipsisVertical, FaStar } from "react-icons/fa6";
import image1 from "../../assets/images/Home/1.png";
import image2 from "../../assets/images/Home/2.png";
import image3 from "../../assets/images/Home/3.png";
import image4 from "../../assets/images/Home/4.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Puzzle = () => {
  const { OutLatImage } = useContext(AuthContext);

  const handleMenu =()=>{
    console.log(handleMenu)
  }

  return (
    <div
      className="bg-gray-100 pb-10 md:h-[calc(100vh - 50px)]"
      style={{
        backgroundImage: `url(${OutLatImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-10">
      <div className="flex items-center justify-center gap-3 bg-[#665052] text-white md:w-2/5 mx-auto  py-3 ">
        <p className="px-2 py-2 rounded-full bg-[#028282] text-white">
          <FaStar />
        </p>
        <h1 className="underline text-center ">
          Puzzle is a Kahoot!+ Start feature.Upgrade to access this feature
        </h1>
      </div>
      </div>
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
      <div className="md:flex items-center py-10">
        <div className=" md:w-1/2 md:ml-5">
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
        <div className=" md:w-1/2 mx-5 md:mx-0 md:pr-10 mt-5 md:mt-3">
          <div className="grid grid-cols-1 md:gap-5">
          <div className="flex relative mt-4 md:mt-10">
            <img className="absolute h-10 w-5 md:h-24 md:w-10 md:static rounded" src={image1} alt="" />
              <input
                type="text"
                placeholder="Add answer 1"
                className="input input-bordered w-full rounded py-9 md:py-12 text-xl pl-10"
              />
            </div>
            <div className="flex relative mt-4 md:mt-10">
            <img className="absolute h-10 w-5 md:h-24 md:w-10 md:static rounded" src={image2} alt="" />
              <input
                type="text"
                placeholder="Add answer 2"
                className="input input-bordered w-full rounded py-9 md:py-12 text-xl pl-10"
              />
            </div>
            <div className="flex relative mt-4 md:mt-10">
            <img className="absolute h-10 w-5 md:h-24 md:w-10 md:static rounded" src={image3} alt="" />
              <input
                type="text"
                placeholder="Add answer 3"
                className="input input-bordered w-full rounded py-9 md:py-12 text-xl pl-10"
              />
            </div>
            <div className="flex relative mt-4 md:mt-10">
            <img className="absolute h-10 w-5 md:h-24 md:w-10 md:static rounded" src={image4} alt="" />
              <input
                type="text"
                placeholder="Add answer 4"
                className="input input-bordered w-full rounded py-9 md:py-12 text-xl pl-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puzzle;
