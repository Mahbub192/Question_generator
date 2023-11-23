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
import AddSlide from "../AddSlide/AddSlide";
import Classic from "../AddSlide/Classic/Classic";
import TypeAnswerSlide from "../TypeAnswerSlide/TypeAnswerSlide";
import PuzzleSlide from "../PuzzleSlide/PuzzleSlide";
import BigTitleSlide from "../BigTitleSlide/BigTitleSlide";
import BigTitle from "../../pages/BigTitle/BigTitle";
import Quote from "../../pages/Quote/Quote";
import QuoteSlide from "../QuoteSlide/QuoteSlide";
import BigMedia from "../../pages/BigMedia/BigMedia";
import DropPointSlide from "../../pages/DropPoint/DropPointSlide";
import DropPoint from "../../pages/DropPoint/DropPoint";
import WordCloudSlide from "../../pages/WordCloud/WordCloudSlide";
import WordCloud from "../../pages/WordCloud/WordCloud";
import OpenEndedSlide from "../../pages/OpenEnded/OpenEndedSlide";
import OpenEnded from "../../pages/OpenEnded/OpenEnded";

const btnOption = [
  {
    id: "01",
    name: "+ Add Question",
    icon: <FaLayerGroup></FaLayerGroup>,
    rout: "",
  },
  {
    id: "02",
    name: "Question bank ",
    icon: <FaLayerGroup></FaLayerGroup>,
    rout: <QuestionBank />,
  },
  {
    id: "03",
    name: "Question Generator",
    icon: <FaLayerGroup></FaLayerGroup>,
    rout: <QuestionGenerator />,
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
    slide: <TypeAnswerSlide />,
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
    slide: <PuzzleSlide />,
    route: <Puzzle />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Ask players to place answers in the correct order.",
  },
  // {
  //   id: "06",
  //   name: "Fill in the blanks",
  //   // route: <FillInTheBlanks />,
  //   icon: <FaLayerGroup></FaLayerGroup>,
  //   info: "",
  // },
];

const CollectOpinions = [
  {
    id: "01",
    name: "Poll",
    slide: <QuizSlide />,
    route: <Home />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Get players to choose from up to 6 opinions.",
  },
  {
    id: "02",
    name: "Drop pin",
    linkThrow: "dropPoint",
    slide: <DropPointSlide />,
    route: <DropPoint />,
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "03",
    name: "Word cloud",
    linkThrow: "wordCloud",
    slide: <WordCloudSlide />,
    route: <WordCloud />,
    icon: <FaLayerGroup></FaLayerGroup>,
  },
  {
    id: "04",
    name: "Open-ended",
    linkThrow: "openEnded",
    slide: <OpenEndedSlide />,
    route: <OpenEnded />,
    icon: <FaLayerGroup></FaLayerGroup>,
  },
];

const addSlider = [
  {
    id: "01",
    name: "Classic",
    icon: <FaLayerGroup></FaLayerGroup>,
    slide: <Classic />,
    route: <AddSlide />,
    info: "Give players more context or additional explanation.",
  },
  {
    id: "02",
    name: "Big title",
    slide: <BigTitleSlide />,
    route: <BigTitle />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: " Write a title and subtitle for the start of a presentation.",
  },
  {
    id: "03",
    name: "Title and text",
    slide: <BigTitleSlide />,
    route: <BigTitle />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Add a paragraph to give players more context.",
  },
  {
    id: "04",
    name: "Bullet points",
    slide: <BigTitleSlide />,
    route: <BigTitle />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Write a list of points instead of a paragraph.",
  },
  {
    id: "05",
    name: "Quote",
    slide: <QuoteSlide />,
    route: <Quote />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Share a memorable quote and display the author's name.",
  },
  {
    id: "06",
    name: "Big media",
    slide: <BigTitleSlide />,
    route: <BigMedia />,
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Present a large image, video, or GIF to boost engagement.",
  },
];

const addSlideText = [
  {
    id: "01",
    name: "Big Title",
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Write a title and subtitle for the start of a presentation.",
  },
  {
    id: "02",
    name: "Title and text",
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Add a paragraph to give players more context.",
  },
  {
    id: "03",
    name: "Bullet points",
    icon: <FaLayerGroup></FaLayerGroup>,
    info: " Write a list of points instead of a paragraph.",
  },
  {
    id: "04",
    name: "Quote",
    icon: <FaLayerGroup></FaLayerGroup>,
    info: "Share a memorable quote and display the author's name.",
  },
];

const AddQuestionButton = () => {
  const {
    AddButtonHidden,
    setAddQuestionModalSubPart,
    addQuestionModalSubPart,
    addSlideButton,
  } = useContext(AuthContext);
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
  const handleModalSubPart = (singleBtn) => {
    setAddQuestionModalSubPart(singleBtn?.rout);
  };
  const handleMenuHover = (category) => {
    // Set the itemName and itemInfo when a category is hovered
    setItemName(category?.name);
    setIndividualImage(category?.slide);
    setItemInfo(category?.info);
  };
  return (
    <div
  className={`row-span-0 col-span-0 order-1 bg-gray-200 rounded-xl md:row-span-4 md:col-span-2 md:h-[690px] overflow-hidden ${
    AddButtonHidden ? "" : ""
  }`}
>
  {/* drawer start */}
  <div className="">
    <div className="">
        <div className="flex items-center justify-between mt-3 mx-5 text-lg font-medium w-[300px] md:w-[600px]">
          {btnOption.map((singleBtn) => (
            <div key={singleBtn.id}>
              <button
                onClick={() => handleModalSubPart(singleBtn)}
                className="bg-blue-500 px-2 py-1 rounded-lg text-white"
              >
               <span>{singleBtn.icon}</span> <span className="hidden md:block">{singleBtn?.name}</span>
              </button>
            </div>
          ))}
        </div>
      {addQuestionModalSubPart ? (
        addQuestionModalSubPart
      ) : (
        <div className="flex">
          <ul className="menu p-4 w-72 md:w-64 rounded-lg text-base-content">
            {/* Sidebar content here */}
            <div className="flex justify-between mb-5">
              <h2 className="font-bold text-lg text-gray-500">
                Test knowledge
              </h2>
              <MdKeyboardDoubleArrowRight className="text-2xl mr-5 mt-1 text-gray-500"></MdKeyboardDoubleArrowRight>
            </div>

            {addSlideButton ?  (
              <>
                {addSlider.map((category) => (
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
                  <h3>Tex</h3>
                </div>
                {addSlideText.map((category) => (
                  <li
                    key={category.id}
                    onMouseEnter={() => handleMenuHover(category)}
                  >
                    <a className="font-semibold text-base">
                      {category.icon} {category?.name}
                    </a>
                  </li>
                ))}
              </>
            ) : (
              <>
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
                    <a
                      onClick={() => handleLinkClick(category)}
                      className="font-semibold text-base"
                    >
                      {category.icon} {category?.name}
                    </a>
                  </li>
                ))}
              </>
            )  }
          </ul>
          <div className="hidden md:block w-72 mt-10">
            <div className="">
              <p>{individualImage}</p>
            </div>
            <div className="mt-5">
              <h1 className="text-xl font-semibold">{itemName}</h1>
              <p className="mt-2 ">{itemInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default AddQuestionButton;
