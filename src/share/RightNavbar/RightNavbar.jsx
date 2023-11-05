import AnswerOptions from "./AnswerOptions/AnswerOptions";
import Points from "./Points/Points";
import QuestionType from "./QuestionType/QuestionType";


const RightNavbar = () => {
    return (
        <div className="h-screen px-5">
            <h2 className="text-xl font-medium">Question type</h2>
            <QuestionType />
            <Points />
            <AnswerOptions />
        </div>
    );
};

export default RightNavbar;