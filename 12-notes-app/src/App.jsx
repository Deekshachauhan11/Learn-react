import React, { useState } from "react";


const App = () => {
  const [title, setTitle] = useState("");
  const [detials, setDetials] = useState("");
  const [task, setTask] = useState([]);

  const func = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detials });
    setTask(copyTask);
    

    setTitle("");
    setDetials("");
  };
  
 const deleteNote = (idx) =>{
  const copyTask = [...task];
  copyTask.splice(idx,1)
  setTask(copyTask)
 }


  return (
    <div className="h-screen bg-black text-white lg:flex ">
      <form
        onSubmit={(e) => {
          func(e);
        }}
        className="flex flex-col lg:w-1/2 items-start p-10 gap-4"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          className="px-5 w-full py-2 border-2 rounded outline-none font-medium"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>

        <textarea
          className=" px-5 w-full h-32 flex items-start flex-row py-2 border-2 rounded outline-none font-medium"
          type="text"
          placeholder="Write Details here"
          value={detials}
          onChange={(e) => {
            setDetials(e.target.value);
          }}
        ></textarea>

        <button className="bg-white w-full text-black px-5 py-2 rounded outline-none font-medium active:scale-95">
          Add Notes
        </button>
      </form>
      <div className=" p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 rounded-2xl py-6 px-4 flex flex-col justify-between items-start bg-white text-black "
              >
                <div>
                <h3 className="leading-tight font-bold text-lg mb-2.5">
                  {elem.title}
                </h3>
                <p className="leading-tight text-xs text-semibold text-gray-500">
                  {elem.detials}
                </p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className="active:scale-95 w-full bg-black text-white rounded p-1 text-sm cursor-pointer">Delete </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
