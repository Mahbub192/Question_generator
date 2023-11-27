import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const SelectGroup = () => {
  const { groupNameArray } = useContext(AuthContext);
  const [selectedCourier, setSelectedCourier] = useState("");
  const [groupArray, setGroupArray] = useState([]);

  const handleCourierChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCourier(selectedValue);
  };

  useEffect(() => {
    setGroupArray(
      groupNameArray?.filter(
        (singleGroup) => singleGroup.group === selectedCourier
      )
    );
    console.log(13, { selectedCourier }, { groupNameArray }, { groupArray });
  }, [selectedCourier]);

  return (
    <div className="px-5">
      <select
        className="select select-bordered w-full text-lg"
        value={selectedCourier}
        onChange={handleCourierChange}
      >
        <option value="">Pick your courier service</option>
        <option value="Owned Groups">Owned Groups</option>
        <option value="Joined Groups">Joined Groups</option>
      </select>
      <div>
        {groupArray && (
          <ul className="bg-gray-200 pl-5 py-5">
            {groupArray?.map((singleGroup, index) => (
              <Link key={index} to='/singleGroupDesign'>
                <li className="mt-2 bg-white mr-5 px-2 py-2 text-lg hover:bg-gray-100">
                  {singleGroup.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectGroup;