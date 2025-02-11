import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="letter ">
        <div className="bg-[#111] h-[500px] w-[500px] m-auto rounded-[5%] relative top-50">
          <div className="bg-[crimson] absolute m-auto h-[500px] w-[50px] inset-x-0 top-0"></div>
          <div className="bg-[crimson] absolute m-auto h-[50px] w-[500px] inset-x-0 top-55"></div>
        </div>
        <div className="bg-[#111] absolute m-auto h-[70px] w-[500px] inset-x-0 top-50 rounded-tl-[23px] rounded-tr-[23px]">
          <div className="bg-[crimson] absolute m-auto h-[70px] w-[50px] inset-x-0 top-0"></div>
          
        </div>
        <div class="relative w-20 h-20">
            <div class="absolute top-[10px] bg-black left-0 w-54 h-50  rounded-full"></div>
            <div class="absolute right-0 w-54 h-50 inset-x-10 inset-y-10 bg-black rounded-full"></div>
          </div>
      </div>
    </>
  );
}

export default App;
