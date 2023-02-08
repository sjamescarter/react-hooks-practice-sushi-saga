import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, onEat, cash }) {
  const [conveyor, setConveyor] = useState(0)

  return (
    <div className="belt">
      {sushis.slice(conveyor, conveyor + 4)
        .map(sushi => { return <Sushi key={sushi.id} sushi={sushi} onEat={onEat} cash={cash} />})}
      <MoreButton conveyor={conveyor} setConveyor={setConveyor} sushis={sushis} />
    </div>
  );
}

export default SushiContainer;
