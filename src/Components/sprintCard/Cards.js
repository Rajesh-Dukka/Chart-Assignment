import React from "react";
import sprintCardData from "../../Data/CardData";
import "./Cards.css";
import "../../GlobalStyles/styles.css";

const SprintsCard = () => {
  return (
    <div className="card-container">
      {sprintCardData.map((card, i) => {
        return (
          <div key={i} className="sprint-card">
            <h2 className="card-text">{card.sprint_name}</h2>
            <h2 className="card-value">{card.sprint_value}</h2>
            <p className="card-note">{card.note}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SprintsCard;