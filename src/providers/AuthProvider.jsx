import { createContext, useEffect, useState } from "react";
import QuizSlide from "../share/LeftNavbar/QuizSlide/QuizSlide";
import Home from "../pages/Home/Home/Home";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [rightNav, setRightNav] = useState(false);
  const [singleGroupName, setSingleGroupName]= useState()
  const [groupNameArray, setGroupNameArray] = useState([])
  const [sendSingleGroup, setSendSingleGroup] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  // const groupNameSet = []
  const [smallScreen, setSmallScreen] = useState(false);
  const [copySlide, setCopySlide] = useState();
  const [mainSlide, setMainSlide] = useState(<Home />);
  const [manLayout, setManLayout] = useState();
  const [deleteSlide, setDeleteSlide] = useState();
  const [number, setNumber] = useState(0);
  const [AddButtonHidden, setAddButtonHidden] = useState(true);
  const [addQuestionModalSubPart, setAddQuestionModalSubPart] = useState();
  const [addSlideButton, setAddSlideButton] = useState();
  const [formData, setFormData] = useState({
    question: "",
    image: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
  });

  const [items, setItems] = useState([
    { id: number, text: <QuizSlide />, mainContent: <Home />, data: formData },
  ]);
  const [OutLatImage, setOutLateImage] = useState(
    "https://media.istockphoto.com/id/1158735721/vector/arrows-up-with-speed-line-on-blue-background.jpg?s=612x612&w=0&k=20&c=pqNZeeTSr2NFp4YNtrgCZyt_f4kp0wmbMwrCXNIo39Y="
  );


  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    if (copySlide !== undefined) {
      setNumber((prevNumber) => prevNumber + 1);
      setItems((prevItems) => [
        ...prevItems,
        { id: prevItems.length, text: copySlide, mainContent: mainSlide },
      ]);
    }
  }, [copySlide]);

  useEffect(()=>{
    setNumber((prevNumber) => prevNumber + 1);
    setGroupNameArray((prevItems) => [
      ...prevItems,
      {id: prevItems.length, group: 'Owned Groups', name :singleGroupName },
    ]);
   
  }, [singleGroupName])



  const authInfo = {
    setRightNav,
    rightNav,
    setOutLateImage,
    OutLatImage,
    setCopySlide,
    copySlide,
    setDeleteSlide,
    deleteSlide,
    number,
    setNumber,
    items,
    setItems,
    mainSlide,
    setMainSlide,
    setManLayout,
    manLayout,
    AddButtonHidden,
    setAddButtonHidden,
    setAddQuestionModalSubPart,
    addQuestionModalSubPart,
    addSlideButton,
    setAddSlideButton,
    setSmallScreen,
    smallScreen,
    formData,
    setFormData,
    groupNameArray, 
    setGroupNameArray,
    singleGroupName, 
    setSingleGroupName,
    showModal,
    closeModal,
    modalVisible,
    sendSingleGroup, setSendSingleGroup,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
