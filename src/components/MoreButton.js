import React from "react";

function MoreButton({ conveyor, setConveyor, sushis }) {
  function handleConveyor() {
    if(conveyor + 4 >= sushis.length){
      setConveyor(0)
    } else {
      setConveyor(conveyor + 4)
    }
  }

  return <button onClick={handleConveyor}>More sushi!</button>;
}

export default MoreButton;
