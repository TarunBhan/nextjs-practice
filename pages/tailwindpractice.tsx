import React from "react";

const darkmode = () => {
  return (
    <div>
      <div
        className="bg-red-100 border bored-red-400 text-red-700 px-4 py-3 rounded relative my-5 "
        role="alert"
      >
        <strong className="font-bold">Alert</strong>
        <span className="block sm:inline  ml-9">
          {" "}
          HEY YOU HAVE A NEW MESSAGE
        </span>
      </div>

      {/* <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12"
            src="https://www.logodesign.net/images/nature-logo.png"
          />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-blue-400">Tarun</h4>
          <p className="text-base text-gray-600">You have a new message!</p>
        </div>
      </div> */}

      <div className="max-w-md mx-auto bg-white rounded-xl md:max-w-2xl drop-shadow-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              src="https://images.unsplash.com/photo-1650262673518-c31fa33dedf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3164&q=80"
              alt=""
              className="h-40 w-full object-cover md:h-full md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="fontsemi-bold  uppercase text-indigo-500 tracking-wide text-sm">
              Content ready
            </div>
            <a
              href="#"
              className="mt-1 text-lg leading-tight font-medium text-black hover:underline "
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              reprehenderit maxime. Eaque, aliquam consequuntur perferendis
              quod, necessitatibus ab sed blanditiis, repellendus minima
              voluptate accusamus architecto quis vitae vel veniam. Inventore
              consequatur quis, laborum assumenda natus numquam sapiente magnam
              quod nulla at. Architecto nesciunt esse porro assumenda, veniam
              tempora voluptatibus quia.
            </p>
            <button className="transition ease-in delay-150 bg-green-500 rounded-lg p-3 hover:scale-110  text-white duration-300 ...">
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default darkmode;
