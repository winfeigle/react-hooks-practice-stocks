import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(res => res.json())
      .then(setStocks)
  }, [])

  const handleAddStock = (stockToAdd) => {
    // This find will return with the first item that matches the value
    const stockInPortfolio = portfolio.find((stock) =>
      stock.id === stockToAdd.id);

    // So if a stock in the current portfolio doesnt have the same id (ticker symbol) as 
    // the stockToAdd, it will add the new stock to the portfolio:
    if(!stockInPortfolio) {
      setPortfolio([...portfolio, stockToAdd])
    };
  };

  const handleRemoveStock = (stockToRemove) => {
    
  }


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onAddStock={handleAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} onRemoveStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
