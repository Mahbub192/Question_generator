import QuizSlide from "./QuizSlide/QuizSlide";
import { useContext, useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AuthContext } from "../../providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const DraggableItem = ({ id, text, index, moveItem }) => {
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
      <div style={{ fontSize: "16px", fontWeight: "bold", color: "#4e4c4c" }}>
        {index + 1} no Slide
      </div>
      <p>{text}</p>
    </div>
  );
};

const LeftNavbar = () => {
  const { copySlide } = useContext(AuthContext);
  const [number, setNumber] = useState(0);
  const [items, setItems] = useState([{ id: number, text: <QuizSlide /> }]);
  console.log(40, items);

  console.log(42, copySlide);
  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [removedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, removedItem);
    setItems(newItems);
  };

  useEffect(() => {
    console.log(53, copySlide);

    if (copySlide === undefined) {
      return;
    } else {
      setNumber((prevNumber) => prevNumber + 1);
      setItems((prevItems) => [
        ...prevItems,
        { id: prevItems.length, text: copySlide },
      ]);
    }
  }, [copySlide]);

  return (
    <div className="mt-5">
      <DndProvider backend={HTML5Backend}>
        <div>
          {items.map((item, index) => (
            <>
              <DraggableItem
                key={item.id}
                id={item.id}
                text={item.text}
                index={index}
                moveItem={moveItem}
              />
            </>
          ))}
        </div>
      </DndProvider>

      <div className="text-center mt-4">
        <button className="bg-[#1368ce] text-white px-3 py-2 text-lg rounded-lg shadow-xl hover:bg-[#163c6b] font-medium">
          Add Question
        </button>
      </div>
      <div className="text-center mt-5">
        <button className="bg-gray-300  px-7 py-2 text-lg rounded-lg shadow-2xl  font-medium">
          Add Slide
        </button>
      </div>
    </div>
  );
};

export default LeftNavbar;
