import React from "react";

const ChildComponent1 = ({ handleOptionChange, selectedOption }) => {
  return (
    <div>
      <h2>Child Component 1</h2>
      <button onClick={() => handleOptionChange("Option 1")}>
        Select Option 1
      </button>
    </div>
  );
};

export default ChildComponent1;
