import React from 'react';
import ProductCard from './ProductCard';

function App() {
  const products = [
    {
      name: "Product 1",
      price: 100,
      description: "This is a cool product.",
    },
    {
      name: "Product 2",
      price: 150,
      description: "This product is even cooler!",
    },
    {
      name: "Product 3",
      price: 200,
      description: "The coolest product of all!",
    },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;