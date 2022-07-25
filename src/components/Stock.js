import React, { useState } from "react";

function Stock({ stock, onStockClick }) {
  const { ticker, name, type, price } = stock;

  const handleClick = () => {
    onStockClick(stock)
  }

  return (
    <div>
      <div className="card">
        <div onClick={handleClick} className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
