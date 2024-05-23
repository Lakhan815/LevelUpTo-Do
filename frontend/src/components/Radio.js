import React from "react";

export const Radio = ({ inputs, category, handleChange }) => {
  return (
    <div>
      {inputs.map((input, index) => (
        <label key={index}>
          <input
            id={input}
            type="radio"
            value={input}
            name={category}
            onChange={() => handleChange(category, input)}
          />
          {input}
        </label>
      ))}
    </div>
  );
};
