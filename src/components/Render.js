import React from "react";

const Render = (props) => {
  const { test, test2, test3 } = props;
  return (
    <div>
      <p>{test}</p>
      <p>{test2}</p>
      <p>{test3}</p>
    </div>
  );
};

export default Render;
