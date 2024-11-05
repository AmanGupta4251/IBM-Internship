import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css"; // Make sure to create this file for styling

const App = () => {
  return (
    <div className="app">
      <h1>Product Listing Page</h1>
      <div className="content">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
