import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Free = [
  {
    id: "01",
    name: "Spring",
    imageURL: "https://i.ibb.co/6RLTSkQ/spring.jpg",
  },
  {
    id: "02",
    name: "Winter",
    imageURL: "https://i.ibb.co/VvzXdKQ/winter.jpg",
  },
  {
    id: "03",
    name: "Autumn",
    imageURL: "https://i.ibb.co/yQMhPMF/autumn.webp",
  },
  {
    id: "04",
    name: "Standard",
    imageURL: "https://i.ibb.co/YNj3RV2/standard.jpg",
  },
];

const Professional = [
  {
    id: "01",
    name: "Desert",
    imageURL: "https://i.ibb.co/P631QX7/Desert.png",
  },
  {
    id: "02",
    name: "Dark",
    imageURL: "https://i.ibb.co/PG72HcQ/Dark.webp",
  },
  {
    id: "03",
    name: "Technology",
    imageURL: "https://i.ibb.co/0qCrZ8t/Technology.jpg",
  },
  {
    id: "04",
    name: "Skyscrapers",
    imageURL: "https://i.ibb.co/pw0pJnw/Skyscrapers.jpg",
  },
];

const Festive = [
  {
    id: "01",
    name: "Technology",
    imageURL: "https://i.ibb.co/0qCrZ8t/Technology.jpg",
  },
  {
    id: "02",
    name: "Skyscrapers",
    imageURL: "https://i.ibb.co/pw0pJnw/Skyscrapers.jpg",
  },

  {
    id: "03",
    name: "Winter",
    imageURL: "https://i.ibb.co/VvzXdKQ/winter.jpg",
  },
  {
    id: "04",
    name: "Autumn",
    imageURL: "https://i.ibb.co/yQMhPMF/autumn.webp",
  },
];

const Sports = [
  {
    id: "01",
    name: "Football",
    imageURL: "https://i.ibb.co/gVpKyf1/Football.jpg",
  },
  {
    id: "02",
    name: "Cricket",
    imageURL: "https://i.ibb.co/C6TZNLj/Cricket.jpg",
  },
  {
    id: "03",
    name: "Sport",
    imageURL: "https://i.ibb.co/7RG6FWM/Sport.jpg",
  },
];

const FrequentlyChangeThem = () => {
    const {setOutLateImage, smallScreen,setSmallScreen,rightNav, setRightNav } = useContext(AuthContext);
  const handleTheme = ()=>{
    setRightNav(!rightNav)
    setSmallScreen(!smallScreen)
  }
  return (
    <div className="h-[calc(100vh-220px)] w-full px-5 md:w-72 md:px-2 mt-10">
      <div className="collapse collapse-arrow  border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-medium">
          Your themes{" "}
          <span className="px-3 py-2 bg-gray-200 shadow-2xl rounded-md text-xl font-medium">
            +
          </span>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-medium">Free</div>
        <div className="collapse-content">
          <div className="grid grid-cols-2 gap-3">
            {Free.map((singleImage) => (
              <div
                key={singleImage.id}
                className="h-24 relative cursor-pointer"
                onClick={()=>setOutLateImage(singleImage.imageURL)}
              >
                <img
                  className="h-20 w-44 object-cover"
                  src={singleImage.imageURL}
                  alt=""
                />
                <p className="absolute bottom-0 text-center bg-gray-200 w-full">
                  {singleImage.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-medium">Professional</div>
        <div className="collapse-content">
          <div className="grid grid-cols-2 gap-3">
            {Professional.map((singleImage) => (
              <div
                key={singleImage.id}
                className="h-24 relative cursor-pointer"
                onClick={()=>setOutLateImage(singleImage.imageURL)}
              >
                <img
                  className="h-20  w-44 object-cover"
                  src={singleImage.imageURL}
                  alt=""
                />
                <p className="absolute bottom-0 text-center bg-gray-200 w-full">
                  {singleImage.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-medium">Festive</div>
        <div className="collapse-content">
          <div className="grid grid-cols-2 gap-3">
            {Festive.map((singleImage) => (
              <div
                key={singleImage.id}
                className="h-24 relative cursor-pointer"
                onClick={()=>setOutLateImage(singleImage.imageURL)}
              >
                <img
                  className="h-20 w-44 object-cover"
                  src={singleImage.imageURL}
                  alt=""
                />
                <p className="absolute bottom-0 text-center bg-gray-200 w-full">
                  {singleImage.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-medium">Sports</div>
        <div className="collapse-content">
          <div className="grid grid-cols-2 gap-3">
            {Sports.map((singleImage) => (
              <div
                key={singleImage.id}
                className="h-24 relative cursor-pointer"
                onClick={()=>setOutLateImage(singleImage.imageURL)}
              >
                <img
                  className="h-20 w-44 object-cover"
                  src={singleImage.imageURL}
                  alt=""
                />
                <p className="absolute bottom-0 text-center bg-gray-200 w-full">
                  {singleImage.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden w-24 ml-auto mt-5">
        <button onClick={handleTheme} className="rounded-lg shadow-2xl text-lg text-center font-bold px-3 py-2 bg-blue-400 text-white">Cancel</button>
      </div>
    </div>
  );
};

export default FrequentlyChangeThem;
