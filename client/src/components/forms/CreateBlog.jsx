import React from "react";
// import Spinner from "../Additionalui/Spinner"

const CreateBlog = () => {
  return (
    <div className="flex h-[100vh] w-full bg-[url('./components/assets/bg-02.webp')]  justify-center items-center selection:bg-none">
      <div
        className=" text-white flex 
    items-center h-4/6 min-w-80 shadow-slate-300 shadow-sm justify-center backdrop-blur-2xl">
        <form
          action=""
          className="flex flex-col w-3/6 h-4/5 justify-between items-center ">
          <h1>Blog</h1>
          <input
            type="text"
            className="w-72 rounded-md h-8 pl-2"
            placeholder="Title"
          />
          <textarea
            type="text"
            className=" max-h-28 min-h-28 w-72 rounded-md pl-2"
            placeholder="Description"
          />
          <input
            type="file"
            className="border border-gray-900 bg-cyan-600 rounded-md"
          />
          {/* <Spinner> */}
            <button className=" hover:bg-blue-500 bg-blue-700 h-7 w-28 rounded-md">
              create blog
            </button>
          {/* </Spinner> */}
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
