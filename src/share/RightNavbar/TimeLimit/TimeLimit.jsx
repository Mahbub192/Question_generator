import  { useState } from "react";
import { useForm } from "react-hook-form";
import { FaClock } from "react-icons/fa6";


const TimeLimit = () => {
    const { register } = useForm();
  // eslint-disable-next-line no-unused-vars
  const [selectedValue, setSelectedValue] = useState(""); // Initialize a state variable to store the selected value

  // Event handler to update the selected value when the user makes a selection
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("Selected value:", event.target.value); // Log the selected value
  };

  return (
    <div>
      <div className="form-control mt-5 w-72 ">
        <label className="label">
          <span className="label-text flex items-center">
            {" "}
            <FaClock />{" "}
            <span className="pl-2 text-lg font-medium">Time limit </span>
          </span>
        </label>
        <select
          {...register("gender")}
          className="input input-bordered border-2 w-full mt-2 py-2 px-2"
          onChange={handleSelectChange} // Add the onChange event handler
        >
          <option value="Health & Beauty">5 Second</option>
          <option value="Men's & Boy's Fashion">10 Second</option>
          <option value="Electronic Device">15 Second</option>
          <option value="Sports & Outdoor">20 Second</option>
          <option value="Home & Lifestyle">25 Second</option>
          <option value="Groceries">30 Seconds</option>
          <option value="Girl's Fashion">40 Second</option>
          <option value="Vehicle & Accessories">50 Second</option>
          <option value="Kids Fashion">50 Second</option>
          <option value="All Categories">2 Minute</option>
        </select>
      </div>
    </div>
  );
};

export default TimeLimit;