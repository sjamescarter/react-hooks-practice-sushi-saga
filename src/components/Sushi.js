import React, { useState } from "react";

function Sushi({ sushi, onEat, cash }) {
  const [eat, setEat] = useState(false)
  const { id, name, img_url, price } = sushi

  function handleEat() {
    if(cash > price) {
      setEat(true);
      onEat(id)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" value={id} onClick={handleEat}>
        {eat ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
