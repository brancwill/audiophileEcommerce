import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../utility/ProductTypes";

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

export const CartContext = createContext<CartContextValues | undefined>(undefined);

export const useCartContext = () => {
    const cart = useContext(CartContext);

    if (!cart) {
        throw new Error("useCartContext must be used with a CartContext");
    }

    return cart;
}

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [ items, setItems ] = useState<CartItem[]>([]);
    const [ isCartOpen, setIsCartOpen ] = useState<boolean>(false);

    const cartJSON = localStorage.getItem("cart");
        let currentCart: CartItem[] = [];

        if (cartJSON !== null) {
            try {
              currentCart = JSON.parse(cartJSON);
              // If the stored data is a valid JSON string, parsedData will be an array of objects
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
        }

    const findItemInCart = (productToFind: Product): CartItem | undefined => {
        return items.find( item  => item.product.id === productToFind.id )
    }
    const saveCart: Function = (cart: CartItem[]): void => {
        localStorage.setItem("cart", JSON.stringify(cart));
        setItems(cart);
    }
    const updateQuantities: Function = ( cartItem: CartItem, newQuantity: number ): CartItem[] => {

        let updatedCart: CartItem[] = [];

        if(newQuantity <= 0) {
            updatedCart = currentCart.filter( (item) => item.product.id !== cartItem.product.id );
        } else {
            updatedCart = currentCart.map(item => {
                if (item.product.id === cartItem.product.id) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        }
        return updatedCart;
    }
    const emptyCart: Function = (): void => {
        localStorage.setItem("cart", JSON.stringify([]));
        saveCart([])
    }
    const updateCartItem: Function = (givenProduct: Product, quantity: number, updateType: "increase" | "decrease" | "new" ): void => {
        const cartItem = findItemInCart(givenProduct);
        let newCart: CartItem[] = [];
        
        if( cartItem ) {
            if ( updateType === "increase" || updateType === "new" ) {
                newCart = updateQuantities(cartItem, ( cartItem.quantity + quantity ));
            } else if ( updateType === "decrease" ) {
                newCart = updateQuantities(cartItem, ( cartItem.quantity - quantity ));
            }
        }   else {
                newCart = currentCart.concat( { product: givenProduct, quantity: quantity } );
        }

        saveCart(newCart);
    }

    const contextValue: CartContextValues = {
        items,
        setItems,
        updateCartItem,
        emptyCart,
        isCartOpen,
        setIsCartOpen
    }

    return (
        <CartContext.Provider value={contextValue}>
          {children}
        </CartContext.Provider>
      );
}
