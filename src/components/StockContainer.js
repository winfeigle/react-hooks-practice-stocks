import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {

  const renderStocks = stocks.map(stock => {
    return <Stock stock={stock}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
