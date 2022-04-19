import React from "react";

const darkmode = () => {
  return (
    <div className="ml-20">
      <div className="bg-white dark:bg-blue-800 rounded-lg px-6 py-8 ring-1 mt-20  mb-20 ring-slate-900/5 shadow-2xl w-96 ml-20">
        <div className="dark w-23">
          <div className="flex flex-wrap justify-center items-center bg-indigo gap-8  ">
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg ">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              ></svg>
            </span>
            <h2 className="text-lg font-bold text-green-800 dark:text-red-400 ">
              Hello this is tarun
            </h2>
          </div>
        </div>
      </div>

      {/* None Dark mode */}
      <div className="bg-white  rounded-lg px-6 py-8 ring-1   ring-slate-900/5 shadow-2xl w-96 ml-20">
        <div className=" w-23">
          <div className="flex flex-wrap justify-center items-center bg-indigo gap-8  ">
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg ">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              ></svg>
            </span>
            <h2 className="text-lg font-bold text-gray-800 dark:text-green-400 ">
              Hello this is tarun
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default darkmode;
