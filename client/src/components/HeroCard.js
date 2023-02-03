import React from "react";

const HeroCard = ({ hero, doFunction, type, nickname }) => {
  let text;
  if (type === "delete") {
    text = "REMOVE FROM TEAM";
  } else if (type === "add") {
    text = "ADD TO TEAM";
  }

  return (
    <div className="card">
      <h3 className="title">{hero.name}</h3>
      {nickname ? <p>{nickname}</p> : null}
      <div className="card-image-container">
        <img className="image" alt="broken hero image" src={hero.image} />
      </div>
      <ul>
        <li>Full name: {hero.full_name}</li>
        <li>Publisher: {hero.publisher}</li>
        <li>
          Power level: <strong>{hero.power_level}</strong>
        </li>
      </ul>
      {type === "blank" ? null : (
        <button onClick={() => doFunction(hero)}>{text}</button>
      )}
    </div>
  );
};

export default HeroCard;
