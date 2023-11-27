import { useContext } from "react";
import { FaListCheck, FaPeopleGroup, FaTrophy } from "react-icons/fa6";
import { AuthContext } from "../../../providers/AuthProvider";

const SingleGroupDesign = () => {
  const { sendSingleGroup } = useContext(AuthContext);
  console.log(8, sendSingleGroup);
  return (
    <div>
        <div><h1 className=" my-5 md:my-10 text-xl md:text-3xl font-bold">{sendSingleGroup?.name}</h1></div>
      <div className="flex items-center gap-10">
        
        <div>
          <div className="md:flex gap-16 hidden md:block">
            <div>
              <h1 className="text-2xl">
                <FaPeopleGroup />
              </h1>
              <h1 className="text-lg font-serif mt-2">Invite users</h1>
            </div>
            <div>
              <h1 className="text-2xl">
                <FaListCheck />
              </h1>
              <h1 className="text-lg font-serif mt-2">Assign</h1>
            </div>
            <div>
              <h1 className="text-2xl">
                <FaTrophy />
              </h1>
              <h1 className="text-lg font-serif mt-2">Create Post</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
            <div><button className="text-xl md:text-2xl font-medium font-serif border-2 px-5 py-2">Activity</button></div>
            <div><button className="text-xl md:text-2xl font-medium font-serif border-2 px-5 py-2">Shared</button></div>
            <div><button className="text-xl md:text-2xl font-medium font-serif border-2 px-5 py-2">Assignment</button></div>
        </div>
        <div>
            <button className="text-xl md:text-2xl font-medium px-5 py-2 bg-blue-500 text-white rounded-md">Invite</button>
        </div>
      </div>
    </div>
  );
};

export default SingleGroupDesign;
