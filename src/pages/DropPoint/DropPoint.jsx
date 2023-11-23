import { FaEllipsisVertical, FaMapLocationDot } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const DropPoint = () => {
  const { OutLatImage } = useContext(AuthContext);

  const handleMenu = () => {
    console.log(handleMenu);
  };
  return (
    <div>
      <div
        className="bg-gray-100 pb-10 h-screen"
        style={{
          backgroundImage: `url(${OutLatImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: "calc(100vh - 170px)",
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
            <span
              onClick={handleMenu}
              className="text-white text-3xl font-bold"
            >
              <FaEllipsisVertical />
            </span>
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
        <div className="mx-5  md:flex md:w-[600px] md:mx-auto mt-10 bg-white items-center gap-10 py-2 px-3 md:px-10 md:py-10 rounded-md">
          <div className="text-6xl">
            <FaMapLocationDot />
          </div>
          <div>
            <h4 className="text-lg">
              Players will drop pins on an image. The pins will be shown
              together on the big screen.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropPoint;
