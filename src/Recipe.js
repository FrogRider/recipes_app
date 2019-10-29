import React from "react";

const recipe = props => {
  return (
    <div className="dish">
      {props.label}
      <br />
      <img src={props.image} alt="" />
      <hr />
    </div>
  );
};

export default recipe;
