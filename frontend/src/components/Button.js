import React from "react";

export const Button = ({ word, handleClick }) => {
  return (
    <div>
      <button type="submit" required onClick={handleClick}>
        {word}
      </button>
    </div>
  );
};
