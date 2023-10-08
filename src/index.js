import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import Pizza from "./components/Pizza";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
     <Header />
    {pizzaData.map((pizza) => {
      return <Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName}/>
    })}
    <Footer />
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
