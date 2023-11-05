import { FaAngleDown, FaBorderNone } from "react-icons/fa6";

const AnswerOptions = () => {
  return (
    <div className="mt-5">
      <label className="label">
        <span className="label-text flex items-center">
          {" "}
          <FaBorderNone />{" "}
          <span className="pl-2 text-lg font-medium">Answer options </span>
        </span>
      </label>
      <details className="dropdown">
        <summary className="m-1 btn bg-white hover:bg-white border-2 w-72  flex items-center justify-between ">
          <span>Single select</span>{" "}
          <span>
            <FaAngleDown></FaAngleDown>
          </span>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-72">
          <li>
            <div className="flex-row">
              <h1>
                <span className="text-lg font-medium">Single select</span> <br />
                Players can only select one of the answers
              </h1>
            </div>
          </li>
          <li>
            <div className="flex-row">
              <h1>
                <span className="text-lg font-medium">Multi-select</span> <br />
                Give twice as many points for correct answers.
              </h1>
            </div>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default AnswerOptions;
