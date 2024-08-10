import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, removeItem } from '../redux/cartSlice';

const Cart = () => {
  const { items, totalPrice, totalQuantity } = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 && <p>No items in the cart.</p>}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>
              <strong>{item.title}</strong> - ${item.price.toFixed(2)} x {item.quantity}
            </div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
