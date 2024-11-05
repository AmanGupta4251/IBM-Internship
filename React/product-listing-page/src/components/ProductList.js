import React from "react";
import { useDispatch } from "react-redux";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} className="product-item">
          <span>
            {product.name} - ${product.price}
          </span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
