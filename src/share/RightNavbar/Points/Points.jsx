import { FaAngleDown, FaHeadSideVirus } from "react-icons/fa6";

const Points = () => {
  return (
    <div className="mt-5">
      <label className="label">
        <span className="label-text flex items-center">
          {" "}
          <FaHeadSideVirus />{" "}
          <span className="pl-2 text-lg font-medium">Points </span>
        </span>
      </label>
      <details className="dropdown">
        <summary className="m-1 btn bg-white hover:bg-white border-2 w-72  flex items-center justify-between ">
          <span>Standard</span>{" "}
          <span>
            <FaAngleDown></FaAngleDown>
          </span>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-72">
          <li>
            <div className="flex-row">
              <h1>
                <span className="text-lg font-medium">Standard</span> <br />
                Award correct answers with the normal amount of points.
              </h1>
            </div>
          </li>
          <li>
            <div className="flex-row">
              <h1>
                <span className="text-lg font-medium">Double points</span> <br />
                Give twice as many points for correct answers.
              </h1>
            </div>
          </li>
          <li>
            <div className="flex-row">
              <h1>
                <span className="text-lg font-medium">No points</span> <br />
                Lower the stakes of the question and remove points/
              </h1>
            </div>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Points;
