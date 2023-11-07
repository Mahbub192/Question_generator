import { FaStar } from "react-icons/fa6";
import image1 from "../../../assets/images/Home/1.png";
import image2 from "../../../assets/images/Home/2.png";
import image3 from "../../../assets/images/Home/3.png";
import image4 from "../../../assets/images/Home/4.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Home = () => {
  const{OutLatImage} = useContext(AuthContext)
  return (
    <div className="bg-gray-100 pb-10" style={{
        backgroundImage: `url(${OutLatImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%', // Set the height to 100% of the viewport height
      }}
    >
      <div className="px-10 pt-12">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full text-center text-2xl py-2"
        />
      </div>
      <div>
        <div className="flex w-full  items-center justify-center bg-grey-lighter">
          <label className="w-[600px] flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer  mt-16">
            <svg
              className="w-40 h-60"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="flex gap-8 mt-10 px-5">
      <div className="w-1/2">
        <div className="flex">
          <img className="rounded" src={image1} alt="" />
          <input
            type="text"
            placeholder="Add answer 1"
            className="input input-bordered w-full rounded py-12 text-xl pl-10"
          />
        </div>
        <div className="flex mt-10">
          <img className="rounded" src={image2} alt="" />
          <input
            type="text"
            placeholder="Add answer 2"
            className="input input-bordered w-full rounded py-12 text-xl pl-10"
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex">
          <img className="rounded" src={image3} alt="" />
          <input
            type="text"
            placeholder="Add answer 3"
            className="input input-bordered w-full rounded py-12 text-xl pl-10"
          />
        </div>
        <div className="flex mt-10">
          <img className="rounded" src={image4} alt="" />
          <input
            type="text"
            placeholder="Add answer 4"
            className="input input-bordered w-full rounded py-12 text-xl pl-10"
          />
        </div>
      </div>
      </div>
      <div className="flex items-center justify-center gap-3 bg-[#665052] text-white w-96 mx-auto mt-5 py-3">
      <p className='px-2 py-2 rounded-full bg-[#028282] text-white'><FaStar /></p>
      <h1 className="underline text-center ">Add more answer</h1>
      </div>
    </div>
  );
};

export default Home;
