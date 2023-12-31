//Imports -----------

//Utility Imports
import { Product } from "./ProductTypes";

//Interface Definitions -----------
export interface CartItem {
    product: Product;
    quantity: number;
}
export interface CartContextValues {
    items: CartItem[];
    setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
    updateCartItem: Function;
    emptyCart: Function;
    isCartOpen: boolean;
    setIsCartOpen: Function;
}