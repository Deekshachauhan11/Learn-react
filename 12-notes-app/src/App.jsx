import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex flex-col justify-between items-start p-10 gap-4">
        <input
          className="px-5 w-full py-2 border-2 rounded outline-none font-medium"
          type="text"
          placeholder="Enter Notes Heading"
        ></input>
        <textarea
          className=" px-5 w-full h-32 flex items-start flex-row py-2 border-2 rounded outline-none font-medium"
          type="text"
          placeholder="Write Details"
        ></textarea>
        <button className="bg-white w-full text-black px-5 py-2 rounded outline-none font-medium">
          Add Notes
        </button>
      </form>
    </div>
  );
};

export default App;
