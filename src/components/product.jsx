import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product">   
      <img src={product.image} alt={product.title} style={{ width: '100%' ,height: '200px'}}/>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
