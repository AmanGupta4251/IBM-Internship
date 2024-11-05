import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id } });
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {items.length === 0 ? (
          <li>Your cart is empty</li>
        ) : (
          items.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} - ${item.price} x {item.quantity}
              </span>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
