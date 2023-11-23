
const QuizSlide = () => {
  return (
    <div className=" ">
      <div className="">
        <div className="flex ">
          
          <div className="h-12 md:h-28 border-2 border-gray-400 rounded-lg w-16 md:w-24 bg-[#eaf4fc]">
           <div className="">
           <div className="hidden md:block w-16 mx-auto mt-1 border-gray-500">
              <input
              className="w-full border-2"
              disabled
              />
            </div>
            <div className="block md:hidden">
              <h1 className="text-gray-300 text-sm text-center">Slide</h1>
            </div>
            <div>
              <div className="flex w-full  items-center justify-center bg-grey-lighter">
                <label className="w-[15px] flex flex-col items-center  bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="hidden md:block md:flex pl-1">
              <div className="w-1/2">
                <div className="">
                  <input
                    className="border-2 w-10 h-5"
                    disabled
                  />
                </div>
                <div className="">
                  <input
                    className="border-2 w-10 h-5"
                    disabled
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="">
                  <input
                    className="border-2 w-10 h-5"
                    disabled
                  />
                </div>
                <div className="">
                  <input
                    className="border-2 w-10 h-5"
                    disabled
                  />
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSlide;
