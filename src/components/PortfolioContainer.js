import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onRemoveStock }) {

  const renderPortfolio = stocks.map(stock => {
    return <Stock key={stock.ticker} stock={stock} onStockClick={onRemoveStock}/>;
  })


  return (
    <div>
      <h2>My Portfolio</h2>
      {
        renderPortfolio
      }
    </div>
  );
}

export default PortfolioContainer;
