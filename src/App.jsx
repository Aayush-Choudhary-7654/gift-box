import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="letter z-1 ">
        <div className="bg-[#111] h-[300px] w-[300px] m-auto rounded-[5%] relative top-50">
          <div className="bg-[crimson] absolute m-auto h-[300px] w-[50px] inset-x-0 top-0"></div>
          <div className="bg-[crimson] absolute m-auto h-[50px] w-[300px] inset-x-0 top-30"></div>
        </div>
        <div className="bg-[#111] absolute m-auto h-[70px] w-[300px] inset-x-0 top-50 rounded-tl-[23px] rounded-tr-[23px]">
          <div className="bg-[crimson] absolute m-auto h-[70px] w-[50px] inset-x-0 top-0"></div>
          
        </div>
        
      </div>
      <div className="bow-tie relative top-10 -z-10 ">
      <div class="absolute w-20 h-20 top-[-300px] left-[-100px]">
            <div class="absolute bg-black w-50 left-[280px] h-50 rounded-full"></div>
            <div class="absolute bg-black w-50 left-[150px] h-50 rounded-full"></div>
      
      <div class="absolute w-20 h-20 left-[10px]">
            <div class="absolute bg-white w-42 top-1.5 left-[280px] h-46 rounded-full"></div>
            <div class="absolute bg-white w-42 top-1.5 left-[160px] h-46 rounded-full"></div>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
