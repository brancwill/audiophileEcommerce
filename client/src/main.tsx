import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CartContextProvider } from './context/CartContext.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
