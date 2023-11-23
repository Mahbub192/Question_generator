import { FaEllipsisVertical, FaStar } from "react-icons/fa6"; 
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const TypeAnswer = () => {
  const { OutLatImage } = useContext(AuthContext);
  const handleMenu =()=>{
    console.log(handleMenu)
  }
  return (
    <div
      className="bg-gray-100 pb-10  h-[calc(100vh-155px)]"
      style={{
        backgroundImage: `url(${OutLatImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // width: '100%',
        // height: '100%', // Set the height to 100% of the viewport height
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

      <div className="w-1/2 mx-auto mt-10">
        <div className="">
          <input
            type="text"
            placeholder="Add answer 1"
            className="input input-bordered w-full rounded py-3 pl-3 text-lg md:py-10 md:text-xl md:pl-10"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 bg-[#665052] text-white w-60 rounded-lg md:w-96 mx-auto mt-5 py-1 md:py-3">
        <p className="px-2 py-2 rounded-full bg-[#028282] text-white">
          <FaStar />
        </p>
        <h1 className="underline text-center ">Other accepted answers</h1>
      </div>
      <div className="md:flex gap-8 mt-6 px-5 pb-5">
        <div className=" mt-3 md:mt-0 md:w-4/12 flex">
          <input
            type="text"
            placeholder="Add answer 1"
            className="input input-bordered w-full rounded py-3 pl-3 text-lg md:py-10 md:text-xl md:pl-10"
          />
        </div>
        <div className=" mt-3 md:mt-0 md:w-4/12 flex ">
          <input
            type="text"
            placeholder="Add answer 2"
            className="input input-bordered w-full rounded py-3 pl-3 text-lg md:py-10 md:text-xl md:pl-10"
          />
        </div>
        <div className=" mt-3 md:mt-0 md:w-4/12 flex ">
          <input
            type="text"
            placeholder="Add answer 3"
            className="input input-bordered w-full rounded py-3 pl-3 text-lg md:py-10 md:text-xl md:pl-10"
          />
        </div>
      </div>
      
    </div>
  );
};

export default TypeAnswer;
