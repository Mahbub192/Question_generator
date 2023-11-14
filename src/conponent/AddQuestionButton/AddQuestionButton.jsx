import { useContext, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { AuthContext } from "../../providers/AuthProvider";
import QuizSlide from "../../share/LeftNavbar/QuizSlide/QuizSlide";
import Home from "../../pages/Home/Home/Home";
import { FaLayerGroup } from "react-icons/fa6";
import TrueOrFalseSlide from "../../pages/TrueOrFalse/TrueOrFalseSlide/TrueOrFalseSlide";
import TrueOrFalse from "../../pages/TrueOrFalse/TrueOrFalse";
import TypeAnswer from "../../pages/TypeAnswer/TypeAnswer";
import Puzzle from "../../pages/Puzzle/Puzzle";
import QuestionBank from "./QuestionBank/QuestionBank";
import QuestionGenerator from "./QuestionGenerator/QuestionGenerator";

const btnOption = [
  {
    id: "01",
    name: "+ Add Question",
    rout:'',
  },
  {
    id: "02",
    name: "Question bank ",
    rout: <QuestionBank />,
  },
  {
    id: "03",
    name: "Question Generator",
    rout: <QuestionGenerator />
  },
];

const TestKnowledge = [
  {
    id: "01",
    name: "Quiz",
    linkThrow: "quiz",
    slide: <QuizSlide />,
    route: <Home />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Give players several answer alternatives to choose from.",
  },
  {
    id: "02",
    name: "True of False",
    linkThrow: "trueOrFalse",
    slide: <TrueOrFalseSlide />,
    route: <TrueOrFalse />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Let players decide if the statement is true or false.",
  },
  {
    id: "03",
    name: "Type answer",
    linkThrow: "typeAnswer",
    slide: "",
    route: <TypeAnswer />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Ask players to type a short correct answer.",
  },
  {
    id: "04",
    name: "Slide",
    // route: <Slide />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Let players guess the number on the slider.",
  },
  {
    id: "05",
    name: "Puzzle",
    linkThrow: "puzzle",
    slide: "",
    route: <Puzzle />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Ask players to place answers in the correct order.",
  },
  {
    id: "06",
    name: "Fill in the blanks",
    // route: <FillInTheBlanks />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "",
  },
];

const CollectOpinions = [
  {
    id: "01",
    name: "Poll",
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Get players to choose from up to 6 opinions.",
  },
  {
    id: "02",
    name: "Drop pin",
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Ask players to drop pins on an image.",
  },
  {
    id: "03",
    name: "Word cloud",
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Collect short free-form poll responses.",
  },
  {
    id: "04",
    name: "Open-ended",
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Ask players to type a long free-form response.",
  },
];

const AddQuestionButton = () => {
  const { AddButtonHidden, setAddQuestionModalSubPart, addQuestionModalSubPart } = useContext(AuthContext);
  const [individualImage, setIndividualImage] = useState(<QuizSlide />);
  const [itemName, setItemName] = useState("Quiz");
  const [itemInfo, setItemInfo] = useState(
    "Give players several answer alternatives to choose from."
  );
  const { setMainSlide, setItems } = useContext(AuthContext);

  const handleLinkClick = (category) => {
    // You can add more logic here if needed before updating the items array
    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length,
        text: category?.slide,
        mainContent: category?.route,
      },
    ]);
    setMainSlide(category?.route);
  };
  const handleModalSubPart = (singleBtn)=>{
    setAddQuestionModalSubPart(singleBtn?.rout)
  }
  const handleMenuHover = (category) => {
    // Set the itemName and itemInfo when a category is hovered
    setItemName(category?.name);
    setIndividualImage(category?.slide);
    setItemInfo(category?.info);
  };
  return (
    <div
      className={`row-span-0 col-span-0 order-1 bg-gray-200 rounded-xl md:row-span-4 md:col-span-2 md:h-[590px]  overflow-hidden  ${
        AddButtonHidden ? "hidden" : ""
      }`}
    >
      {/* drawer start */}
      <div className="drawer lg:drawer-open z-10 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
        </div>
        <div className="drawer-side w-[600px]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div>
            <div className="flex items-center justify-between mt-3 mx-5 text-lg font-medium w-[600px]">
              {btnOption.map((singleBtn) => (
                <div key={singleBtn.id}>
                  <button onClick={()=>handleModalSubPart(singleBtn)} className="bg-blue-500 px-2 py-1 rounded-lg text-white">
                    {singleBtn?.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {addQuestionModalSubPart ? addQuestionModalSubPart : <div className="flex">
            <ul className="menu p-4 w-72 md:w-64 rounded-lg text-base-content ">
              {/* Sidebar content here */}
              <div className="flex justify-between mb-5">
                <h2 className="font-bold text-lg text-gray-500">
                  Test knowledge
                </h2>
                <MdKeyboardDoubleArrowRight className="text-2xl mr-5 mt-1 text-gray-500"></MdKeyboardDoubleArrowRight>
              </div>

              {TestKnowledge.map((category) => (
                <li
                  key={category.id}
                  onMouseEnter={() => handleMenuHover(category)}
                >
                  <a
                    onClick={() => handleLinkClick(category)}
                    className="font-semibold text-base"
                  >
                    {category.icon} {category?.name}
                  </a>
                </li>
              ))}
              <div className="my-3 text-xl text-black">
                <h3>Collect opinions</h3>
              </div>

              {CollectOpinions.map((category) => (
                <li
                  key={category.id}
                  onMouseEnter={() => handleMenuHover(category)}
                >
                  <a className="font-semibold text-base">
                    {category.icon} {category?.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="w-72 mt-10 ">
              <div className="">
                <p>{individualImage}</p>
              </div>
              <div className="mt-5">
                <h1 className="text-xl font-semibold">{itemName}</h1>
                <p className="mt-2 ">{itemInfo}</p>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default AddQuestionButton;
