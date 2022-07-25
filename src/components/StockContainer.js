import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock }) {

  const renderStocks = stocks.map(stock => {
    return <Stock key={stock.ticker} stock={stock} onStockClick={onAddStock}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
