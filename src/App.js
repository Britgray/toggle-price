import { useState } from "react";
import PricingCard from "./components/PricingCard";
import "./components/styles/PricingApp.css";

function App() {
  const [selectIndividual, setSelectIndividual] = useState(true);
  console.log(selectIndividual);
  return (
    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <h1 className="header-topic">Lets Compare!</h1>
          <div className="header-row">
            <p>Group</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectIndividual((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Individual</p>
          </div>
        </header>
        
        <div className="pricing-cards">
          <PricingCard
            title="Verizon Cloud"
            price={selectIndividual ? "20.99" : "188.9"}
            storage="60 GB Storage"
            users="5"
            sendUp="5"
          />
          
          <PricingCard
            title="Apple Cloud"
            price={selectIndividual ? "79.99" : "499.9"}
            storage="90 GB Storage"
            users="20"
          />
        </div>
      </div>
    </div>
  );
}

export default App;