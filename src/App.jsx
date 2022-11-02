import { useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-sky-50 flex justify-center align-center">
      <section className="w-6/12 h-6/12 flex items-center justify-center flex-col ">
        <h1 className="text-center  text-4xl mb-2 font-sans font-bold">Our Reviews</h1>
        <div className="w-20 h-1  bg-blue-500 rounded-r-sm"></div>
        <Cards />
      </section>
    </div>
  );
}

export default App;
