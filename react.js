src/
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-green-700 font-bold">₹{product.price}</p>
      <button 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };
 




    
