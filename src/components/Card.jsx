import React, { useState } from "react";

const Card = (prop) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className="card">
      <div className="top-wrap">
        <h3>{prop.title}</h3>
        <button onClick={() => setIsExpand(!isExpand)}>
          {!isExpand ? "+" : "-"}
        </button>
      </div>
      {isExpand && <p>{prop.info}</p>}
    </div>
  );
};

export default Card;
