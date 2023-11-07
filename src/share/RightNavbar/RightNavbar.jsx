import AnswerOptions from "./AnswerOptions/AnswerOptions";
import Points from "./Points/Points";
import QuestionType from "./QuestionType/QuestionType";
import TimeLimit from "./TimeLimit/TimeLimit";


const RightNavbar = () => {
    return (
        <div className=" px-5 mt-5 w-72">
            <QuestionType />
            <TimeLimit />
            <Points />
            <AnswerOptions />
        </div>
    );
};

export default RightNavbar;