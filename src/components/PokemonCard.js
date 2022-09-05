import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon;
  const [frontCard, setFrontCard] = useState(true); // toggle
 
  // provided function, do I munipulate?
  function handleClick(e) {
    // e.preventDefault()
    setFrontCard((frontCard) => !frontCard);
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={frontCard ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
