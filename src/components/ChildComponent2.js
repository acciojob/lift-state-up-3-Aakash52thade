import React from "react";

const ChildComponent2 = ({ handleOptionChange, selectedOption }) => {
  return (
    <div>
      <h2>Child Component 2</h2>
      <button onClick={() => handleOptionChange("Option 2")}>
        Select Option 2
      </button>
    </div>
  );
};

export default ChildComponent2;
