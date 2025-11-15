import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {

  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionChange(option) {
    setSelectedOption(option);
  }

  return (
    <div className="parent">

      <h1>Parent Component</h1>
      <p>Selected Option: {selectedOption}</p>

      <ChildComponent1 
        handleOptionChange={handleOptionChange} 
        selectedOption={selectedOption}
      />

      <ChildComponent2 
        handleOptionChange={handleOptionChange} 
        selectedOption={selectedOption}
      />

    </div>
  );
};

export default App;
