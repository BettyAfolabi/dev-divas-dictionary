import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="top">
          <h1>{props.title}</h1>
        </div>

        <div className="btm">
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
