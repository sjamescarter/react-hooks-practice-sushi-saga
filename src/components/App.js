import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [cash, setCash] = useState(100);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushis(data))
  }, [])

  function onEat(id) {
    setPlates([...plates, id])
    const sushi = sushis.find(sushi => sushi.id === id)
    setCash(cash - sushi.price)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEat={onEat} cash={cash} />
      <Table plates={plates} cash={cash} />
    </div>
  );
}

export default App;
