import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WishProvider } from './comoponents/layouts/WishContext';
import { CartProvider } from './comoponents/layouts/CartContext';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Blog from "./pages/blog/Blog";
import Wish from "./pages/wishlist/Wish";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <CartProvider>
      <WishProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/wish" element={<Wish />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </WishProvider>
    </CartProvider>
  );
}

export default App;
