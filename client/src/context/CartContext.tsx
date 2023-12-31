//Imports --------------
import { CartContextValues, CartItem } from "../utility/customTypes/CartTypes";

//React/Router Imports
import { createContext, useContext, useState, ReactNode } from "react";

//Utility Imports
import { Product } from "../utility/customTypes/ProductTypes";

// Context Creation -----------

//Cart Context Declaration
export const CartContext = createContext<CartContextValues | undefined>(undefined);

//Hook to use Cart Context
export const useCartContext = () => {
    const cart = useContext(CartContext);

    if (!cart) {
        throw new Error("useCartContext must be used with a CartContext");
    }

    return cart;
}

//Cart Context Provider Component
export const CartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    //React Hooks -----------

    //State
    const [ items, setItems ] = useState<CartItem[]>([]);
    const [ isCartOpen, setIsCartOpen ] = useState<boolean>(false);

    //Variables ---------
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

    // Functions ------------

    //Cart Control
    const findItemInCart = (productToFind: Product): CartItem | undefined => {
        //If item is in cart, returns it. If not, returns empty array.
        return items.find( item  => item.product.id === productToFind.id )
    }
    const saveCart: Function = (cart: CartItem[]): void => {
        //Saves cart to localstorage
        localStorage.setItem("cart", JSON.stringify(cart));
        setItems(cart);
    }
    const updateQuantities: Function = ( cartItem: CartItem, newQuantity: number ): CartItem[] => {

        let updatedCart: CartItem[] = [];

        //If item isn't in cart, adds it to the cart.
        if(newQuantity <= 0) {
            updatedCart = currentCart.filter( (item) => item.product.id !== cartItem.product.id );
        } else {
        //If item is in cart, updates the quantity of the item.
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
        //Removes all items from the cart.
        localStorage.setItem("cart", JSON.stringify([]));
        saveCart([])
    }
    const updateCartItem: Function = (givenProduct: Product, quantity: number, updateType: "increase" | "decrease" | "new" ): void => {
        //Locates Cart Item.
        const cartItem = findItemInCart(givenProduct);

        let newCart: CartItem[] = [];
        
        if( cartItem ) {
            //Adds to quantity if "increase".
            if ( updateType === "increase" || updateType === "new" ) {
                newCart = updateQuantities(cartItem, ( cartItem.quantity + quantity ));
            } else if ( updateType === "decrease" ) {
            //Reduces quantity if "decrease".
                newCart = updateQuantities(cartItem, ( cartItem.quantity - quantity ));
            }
            //Changes quantity without regard for current value otherwise.
        }   else {
                newCart = currentCart.concat( { product: givenProduct, quantity: quantity } );
        }
        saveCart(newCart);
    }

    //Context to pass
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
