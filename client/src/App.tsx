import { useEffect, useState } from 'react';
import { useCartContext } from './context/CartContext';

//Component Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Page Imports
import Home from './pages/Home';
import ProductCategoryPage from './pages/ProductCategoryPage';
import ProductPage from './pages/ProductPage';

//Style Imports
import './styles/styles.css';

//Context Imports
import { ProductContextProvider } from './context/ProductContext';
import NotFoundPage from './pages/NotFoundPage';
import CheckoutPage from './pages/CheckoutPage';
import CartModal from './components/CartModal';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const { setItems } = useCartContext();
  const [ isCartOpen, setIsCartOpen ] = useState<boolean>(false);

  const toggleCart: Function = (): void => {
    setIsCartOpen(!isCartOpen);
  }

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if(cartData) {
      setItems(JSON.parse(cartData));
    } else {
      localStorage.setItem("cart", JSON.stringify([]))
    }
  }, [])

  return (
    <BrowserRouter>
      <ProductContextProvider>
          <Navbar isOpen={isCartOpen} setIsOpen={setIsCartOpen}/>
          <ScrollToTop />
          <CartModal isOpen={isCartOpen} setIsOpen={setIsCartOpen}/>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/:productCategory" element={<ProductCategoryPage />} />
              <Route path="/:productCategory/:productSlug" element={<ProductPage toggleCart={toggleCart}/>} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path='/page-not-found' element={<NotFoundPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          <Footer />
      </ProductContextProvider>
    </BrowserRouter>
  )
}

export default App
