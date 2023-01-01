import Navbar from "../components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "../components/ItemListContainer.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer.jsx";
import Cart from "../components/Cart.jsx";
import CartProvider from "../context/CartContext.jsx"

function App() {
  return (
    <div>
      <CartProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:category" element={<ItemListContainer />} />
        <Route path="/data/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
