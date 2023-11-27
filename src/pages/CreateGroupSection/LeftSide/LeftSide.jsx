import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const { modalVisible,sendSingleGroup, setSendSingleGroup,showModal,groupNameArray,setSingleGroupName,closeModal } = useContext(AuthContext);
  const [name, setName] = useState("");

  const handleSave = () => {
    setSingleGroupName(name);
    closeModal();
  };
  return (
    <>
    <div className="border-2 px-5 h-screen">
      
      <ul>
        <li className="text-lg font-medium bg-gray-200 hover:bg-gray-500 hover:text-white py-3 mt-3 pl-5 rounded-md">
          Owned Groups
        </li>
        {/*  */}
        <li className="text-lg font-medium bg-gray-200 hover:bg-gray-500 hover:text-white py-3 mt-3 pl-5 rounded-md">
          Joined Groups
        </li>
        <div>
          <h1 className="pl-5 text-xl font-semibold font-seri2 my-5">
            Recent Groups
          </h1>
        </div>

        {groupNameArray?.map((singleGroup, index) => (
          <div key={index}>
            <Link to={`/singleGroupDesign`}>
            <li onClick={()=> setSendSingleGroup(singleGroup)} className="text-lg font-medium bg-gray-200 hover:bg-gray-500 hover:text-white py-3 mt-3 pl-5 rounded-md">
              {singleGroup.name}
            </li></Link>
          </div>
        ))}
        <li onClick={showModal} className="text-lg font-medium bg-gray-200 hover:bg-gray-500 hover:text-white py-3 mt-3 pl-5 rounded-md">
          Create Group +
        </li>
      </ul>
    </div>
    {modalVisible && (
      <dialog className="modal" open>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create group</h3>
          <div className="form-control w-full max-w-xs">
            <form>
              <label className="label">
                <span className="label-text text-lg mt-3">Name</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Add group name"
                className="input input-bordered w-full max-w-xs "
              />
            </form>
          </div>
          <div className=" mt-10">
            <div className="flex items-center justify-around">
              <form method="dialog">
                <button
                  onClick={closeModal}
                  className="bg-gray-200 rounded-md font-semibold uppercase px-5 py-3"
                >
                  Close
                </button>
              </form>
              <div>
                <button
                  onClick={handleSave}
                  className="bg-gray-200 rounded-md font-semibold uppercase px-5 py-3"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    )}
    </>
  );
};

export default LeftSide;
