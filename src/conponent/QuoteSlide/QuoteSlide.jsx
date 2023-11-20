const QuoteSlide = () => {
    return (
      <div>
        <div className="border-2 w-24 border-gray-400">
          <div className="h-28 mt-2">
            
            <div className=" overflow-hidden">
              <div className="flex w-full  items-center justify-center bg-grey-lighter">
                <label className="w-[24px] flex flex-col items-center  bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
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
            <div className="">
              <p className=" text-gray-400 text-center text-xl mt-2">Title</p>
              <p className=" text-gray-400 text-center text-lg ">Text</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default QuoteSlide;
  