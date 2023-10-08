import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import Pizza from "./components/Pizza";

function App() {
  return (
    <div>
      <h1>Hey, React!</h1> 
    {pizzaData.map((pizza) => {
      return <Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName}/>
    })}
    </div>
  );
}

//REACT v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
