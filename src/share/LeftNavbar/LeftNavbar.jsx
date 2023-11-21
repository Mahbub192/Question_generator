/* eslint-disable react/prop-types */
import QuizSlide from "./QuizSlide/QuizSlide";
import { useContext } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const DraggableItem = ({
  id,
  text,
  index,
  moveItem,
  handleDeleteSlide,
  mainContent,
}) => {
  const { setCopySlide, setManLayout } = useContext(AuthContext);

  const [, drag] = useDrag({
    type: "DIV",
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: "DIV",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "5px" }}
    >
      <div className="text-sm md:text-lg font-bold text-gray-400">
        {index + 1} no Slide
      </div>
      <div className="flex gap-1 ">
        <div className="hidden md:block md:mt-10 ">
          <button
            onClick={() => setCopySlide(<QuizSlide />)}
            className="text-xl p-0 "
          >
            <FaRegCopy />
          </button>
          <button
            onClick={() => handleDeleteSlide(id)}
            className=" md:mt-4 text-xl p-0"
          >
            <AiOutlineDelete />
          </button>
        </div>
        <div  onClick={() => setManLayout(mainContent)}>{text}</div>
      </div>
    </div>
  );
};

const LeftNavbar = () => {
  const { items, setItems, AddButtonHidden, setAddButtonHidden, setAddSlideButton } =
    useContext(AuthContext);

  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [removedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, removedItem);
    setItems(newItems);
  };

  console.log(items);

  const handleDeleteSlide = (id) => {
    const deleteItem = items.filter((singleItem) => singleItem.id !== id);
    setItems(deleteItem);
  };

  const handleAddQuestion =()=>{
    setAddSlideButton(false)
    setAddButtonHidden(!AddButtonHidden)
  }

  const handelAddSlide=()=>{
    setAddSlideButton(true)
    setAddButtonHidden(!AddButtonHidden)
    
  }


  return (
    <div className="md:mt-5 w-screen  flex md:flex-wrap items-center justify-between ">
      <div className="w-9/12 md:w-full md:max-h-[600px] overflow-x-auto  md:overflow-y-auto px-1 md:overflow-x-hidden">
        <DndProvider backend={HTML5Backend}>
          <div className="flex md:flex-wrap">
            {items.map((item, index) => (
              <DraggableItem
                key={item.id}
                id={item.id}
                text={item.text}
                index={index}
                moveItem={moveItem}
                handleDeleteSlide={handleDeleteSlide}
                mainContent={item.mainContent}
              />
            ))}
          </div>
        </DndProvider>
      </div>

      <div className="w-2/12 md:w-full text-center md:mt-4">
        <button
          onClick={ handleAddQuestion}
          className="bg-[#1368ce] text-white px-3 py-2 text-lg rounded-lg shadow-xl hover:bg-[#163c6b] font-medium"
        >
          <span className="hidden md:block">Add Question</span> <span className="block md:hidden">+</span>
        </button>
      </div>
      <div className="hidden md:block text-center mt-5">
        <button onClick={handelAddSlide} className="bg-gray-300  px-7 py-2 text-lg rounded-lg shadow-2xl  font-medium">
          Add Slide
        </button>
      </div>
    </div>
  );
};

export default LeftNavbar;
