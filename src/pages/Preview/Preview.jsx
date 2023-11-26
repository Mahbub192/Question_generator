import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/TopNavbar/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const Preview = () => {
  const { items } = useContext(AuthContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMainContent, setCurrentMainContent] = useState(items[0]?.mainContent);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [items.length]); // Use items.length as a dependency to avoid stale closure

  useEffect(() => {
    setCurrentMainContent(items[currentIndex]?.mainContent);
  }, [currentIndex, items]);

  return (
    <div className="bg-blue-400">
      <div className="container mx-auto">
        {/* top */}
        <div className="flex items-center justify-between">
          <div>
            <img className="w-44" src={logo} alt="" />
          </div>
          <div>
            <p className="border-2 py-5 text-2xl font-bold px-5">2 : 00 min</p>
          </div>
          <div className="flex items-center gap-10">
            <div className="">
              <h1 className="bg-gray-300 rounded-full shadow-2xl text-center px-5 py-8">
                Total <br />
                Participant
              </h1>
            </div>
            <div className="">
              <h1 className="bg-gray-300 rounded-full shadow-2xl text-center px-8 py-8">
                Total <br /> Answer
              </h1>
            </div>
          </div>
        </div>
        {/* middle */}
        <div className="h-[calc(100vh - 100px)]">{currentMainContent}</div>
        {/* bottom */}
        <div className="flex items-center justify-between">
          <div>
            <img className="w-44" src={logo} alt="" />
          </div>
          <div>
            <img className="w-44" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
