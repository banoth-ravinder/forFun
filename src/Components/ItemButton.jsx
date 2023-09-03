import React from "react";
import "../App.css";

export const ItemButton = ({ id, onClick, count, countId, title }) => {
  return (
    <div className="buttonClass">
      <button className="itemButton" id={id} onClick={onClick}>
        {title}
      </button>
      <div className="notificationCount" id={countId}>
        {count}
      </div>
    </div>
  );
};
