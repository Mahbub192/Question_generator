import { useContext, useState } from "react";
import { FaListCheck, FaPeopleGroup, FaTrophy } from "react-icons/fa6";
import { AuthContext } from "../../../providers/AuthProvider";

const TopSide = () => {
  const { showModal, closeModal, modalVisible, setSingleGroupName } =
    useContext(AuthContext);
  const [name, setName] = useState("");

  const handleSave = () => {
    setSingleGroupName(name);
    closeModal();
  };

  return (
    <div className="mt-10  md:w-[1200px]">
      <div className="flex gap-5 md:justify-around items-center ">
        <div className="md:flex gap-16 hidden md:block">
          <div>
            <h1 className="text-2xl">
              <FaPeopleGroup />
            </h1>
            <h1 className="text-lg font-serif mt-2">Collaborate</h1>
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
            <h1 className="text-lg font-serif mt-2">Compete</h1>
          </div>
        </div>
        <div className="md:w-96">
          <input
            type="text"
            className="border-2 text-lg border-gray-500 px-5 py-3 rounded-md w-full"
            placeholder="Search..."
          />
        </div>
        <div>
          <button
            onClick={showModal}
            className="px-3 py-2 bg-blue-500 text-white md:text-lg font-bold rounded-md"
          >
            Create Group
          </button>
        </div>
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
    </div>
  );
};

export default TopSide;
