import info from "./data";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { FaQuoteRight } from "react-icons/fa";
import { useState } from "react";

export default function Cards() {
  const [previewId, setPreviewId] = useState(0);

  function handleClick(amount) {
    setPreviewId((prevState) => {
      if (prevState === 0 && event.target.id === "prev") {
        return 3;
      } else if (prevState === 3 && event.target.id === "next") {
        return 0;
      } else {
        return prevState + amount;
      }
    });
  }

  function handleRandom() {
    let randomNumber = Math.floor(Math.random() * 3);
    setPreviewId(randomNumber);
  }

  return (
    <div className="bg-white w-full h-8/12 flex flex-wrap  justify-center align-center p-8 mt-10 shadow-xl">
      <div className="w-36 h-36 flex justify-center relative">
        <img src={info[previewId].image} alt="" className="w-full h-full rounded-full object-cover z-10 relative " />
        <div className="w-36 h-36 rounded-full bg-blue-500 absolute z-0 -top-1 -right-2 "></div>
        <div className="absolute z-10 top-1 left-0.5 text-white bg-blue-500  w-9 h-9 flex justify-center items-center rounded-full">
          <FaQuoteRight />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl capitalize font-medium pt-4">{info[previewId].name}</h2>
        <h3 className="uppercase text-blue-400 ">{info[previewId].job}</h3>
        <p className="text-gray-500 text-lg font-medium pt-2">{info[previewId].text}</p>
      </div>
      <div className="pt-6 ">
        <button className="mr-8" onClick={() => handleClick(-1)}>
          <FcPrevious className="text-2xl" id="prev" />
        </button>
        <button onClick={() => handleClick(1)}>
          <FcNext className="text-2xl" id="next" />
        </button>
        <button className="flex w-full justify-center bg-blue-50 text-blue-400 px-4 py-1 rounded-xl hover:bg-blue-400 hover:text-black transition-colors ease-in delay-75" onClick={handleRandom}>
          Random
        </button>
      </div>
    </div>
  );
}
