import { Outlet } from "react-router-dom";
import TopNavbar from "../../share/TopNavbar/TopNavbar";
import RightNavbar from "../../share/RightNavbar/RightNavbar";
import LeftNavbar from "../../share/LeftNavbar/LeftNavbar";
import FrequentlyChangeThem from "../../share/TopNavbar/FrequentlyChangeThem/FrequentlyChangeThem";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AddQuestionButton from '../../conponent/AddQuestionButton/AddQuestionButton'

const ManLayout = () => {
  const {setAddButtonHidden, AddButtonHidden,smallScreen, rightNav, manLayout } = useContext(AuthContext);
  console.log(12, smallScreen);

  const addButtonRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (addButtonRef.current && !addButtonRef.current.contains(event.target)) {
  //       setAddButtonHidden(true);
  //     }
  //   };

  //   document.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [setAddButtonHidden]);



  
  return (
    <div className="h-screen">
      <TopNavbar />
      <div className="flex flex-wrap">
        <div className="order-2 md:order-1  md:w-1/12">
          <LeftNavbar />
        </div>
        <div className="order-1 md:order-2 w-full md:w-9/12 relative">
          {manLayout ? (
            <div className="relative">
              <div
                className={`${smallScreen ? "md:z-20 hidden md:block " : " "}`}
              >
                {manLayout}
              </div>{" "}
              <div ref={addButtonRef} className={`absolute bottom-3 ${AddButtonHidden ? "hidden" : ""}`}>
              <AddQuestionButton />
            </div>
              <div
                className={`${
                  smallScreen ? "z-10 md:z-0 md:hidden" : "hidden "
                }`}
              >
                <FrequentlyChangeThem />
              </div>
            </div>
          ) : (
            <div className="relative">
              <div
                className={`${smallScreen ? "md:z-20 hidden md:block " : " "}`}
              >
                <Outlet />
              </div>{" "}
              <div ref={addButtonRef} className={`absolute bottom-3 ${AddButtonHidden ? "hidden" : ""}`}>
              <AddQuestionButton />
            </div>
              <div
                className={`${
                  smallScreen ? "z-10 md:z-0 md:hidden" : "hidden "
                }`}
              >
                <FrequentlyChangeThem />
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:block order-3  w-2/12">
          {rightNav ? <FrequentlyChangeThem /> : <RightNavbar />}
        </div>
      </div>
    </div>
  );
};

export default ManLayout;
