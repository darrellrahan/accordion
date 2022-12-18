import React from "react";
import data from "../data";
import Card from "./Card";

const App = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1 className="title">Q&A About Login</h1>
        <div>
          {data.map((value, index) => {
            const { title, info } = value;
            return <Card key={index} title={title} info={info} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
