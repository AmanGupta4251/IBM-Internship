import React from 'react';

function ProductCard({ name, price, description }) {
  return (
    <div className="product-card" style={styles.card}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ProductCard;