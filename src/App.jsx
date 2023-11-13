import { useState } from "react";
import "./App.css";
import Forms from "./Components/Forms";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <h4 className=" text-center text-gray-500 mt-2">
          Try <span className="fw-bold text-black">Sign</span> free for 14 days
        </h4>
        <Forms />
      </div>
    </>
  );
}

export default App;
