import { FaAngleDown, FaHeadSideVirus, FaLayerGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import TypeAnswer from "../../../pages/TypeAnswer/TypeAnswer";
import Puzzle from "../../../pages/Puzzle/Puzzle";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import QuizSlide from "../../LeftNavbar/QuizSlide/QuizSlide";
import TrueOrFalseSlide from "../../../pages/TrueOrFalse/TrueOrFalseSlide/TrueOrFalseSlide";
import Home from "../../../pages/Home/Home/Home";
import TrueOrFalse from "../../../pages/TrueOrFalse/TrueOrFalse";

const TestKnowledge = [
  {
    id: "01",
    name: "Quiz",
    linkThrow: "quiz",
    slide: <QuizSlide />,
    route: <Home />,
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "02",
    name: "True of False",
    linkThrow: "trueOrFalse",
    slide : <TrueOrFalseSlide />,
    route: <TrueOrFalse />,
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "03",
    name: "Type answer",
    linkThrow: 'typeAnswer',
    slide: <TypeAnswer />,
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "04",
    name: "Slide",
    // route: <Slide />,
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "05",
    name: "Puzzle",
    linkThrow: 'puzzle',
    slide: <Puzzle />,
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "06",
    name: "Fill in the blanks",
    // route: <FillInTheBlanks />,
    icon: <FaLayerGroup></FaLayerGroup>,
  },
];

const CollectOpinions = [
  {
    id: "01",
    name: "Poll",
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "02",
    name: "Drop pin",
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "03",
    name: "Word cloud",
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "04",
    name: "Open-ended",
    icon: <FaLayerGroup></FaLayerGroup>,
  },
];


const QuestionType = () => {
  const {setMainSlide, setItems} = useContext(AuthContext)

  const handleLinkClick = (category) => {
    // You can add more logic here if needed before updating the items array
    setItems((prevItems) => [
      ...prevItems,
      { id: prevItems.length, text: category?.slide, mainContent: category?.route },
    ]);
    setMainSlide(category?.route)
  };
  return (
    <div className="mt-5">
      <label className="label">
        <span className="label-text flex items-center">
          {" "}
          <FaHeadSideVirus />{" "}
          <span className="pl-2 text-lg font-medium">Question type </span>
        </span>
      </label>
      <details className="dropdown">
        <summary className="m-1 btn bg-white hover:bg-white border-2 w-72  flex items-center justify-between ">
          <span>Quiz</span>{" "}
          <span>
            <FaAngleDown></FaAngleDown>
          </span>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-72">
          <h1 className="text-lg pb-2 font-medium">Test Knowledge</h1>
          <div className="grid grid-cols-2 gap-2 ">
            {TestKnowledge.map((category) => (
              <Link to={`/${category.linkThrow}`} key={category.id}>
                <li onClick={() => handleLinkClick(category)} className="">
                  <div className="flex flex-col hover:border-2 border-blue-500 hover:px-0">
                    <h1 className="text-2xl ">{category.icon}</h1>
                    <h1 className="text-lg text-center w-28">
                      {category.name}
                    </h1>
                  </div>
                </li>
              </Link>
            ))}
          </div>

          {/* Collect opinions */}
          <h1 className="text-lg py-2 font-medium">Collect opinions</h1>
          <div className="grid grid-cols-2 gap-2 ">
            {CollectOpinions.map((category) => (
              <li key={category.id} className="">
                <div className="flex flex-col hover:border-2 border-blue-500 hover:px-0">
                  <h1 className="text-2xl ">{category.icon}</h1>
                  <h1 className="text-lg text-center w-28">{category.name}</h1>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </details>
    </div>
  );
};

export default QuestionType;
