import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";

function App() {
  return (
    <div>
      <h1>Hey, React!</h1> <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h2> Pizza </h2>
      {pizzaData.map((pizza) => <h3 key={pizza.name}> {pizza.name} </h3>)}
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
