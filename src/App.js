import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Shopping Cart</h1>        
      </header>
      <main>
        <ProductList /> 
        <Cart />
        
      </main>
    </div>
  );
}

export default App;
