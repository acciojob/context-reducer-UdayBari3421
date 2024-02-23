import React from "react";

const Compo = ({ Text, compNo }) => {
  return (
    <div>
      <h1>
        {Text} {compNo}
      </h1>
    </div>
  );
};

export default Compo;
