//Context Imports
import { CartItem, useCartContext } from "../context/CartContext";

//Component
const CartCounter = (props: { cartItem: CartItem, index: number }) => {

    //React Hooks ---------

    //Context
    const { updateCartItem } = useCartContext();

    //Functions
    const handleCartUpdate: Function = ( increaseOrDecrease: string ): void => {

        if ( increaseOrDecrease === "increase" ) {
            if ( props.cartItem.quantity < 99) {
                updateCartItem( props.cartItem.product, 1, "increase");
            }
        } else if ( increaseOrDecrease === "decrease" ) {
                updateCartItem( props.cartItem.product, 1, "decrease");
        }
    }

    return (
        <div className="CartCounter">
            <div className="counterButton" onClick={ () => handleCartUpdate("decrease") }>
                <p className="counterButtonText">-</p>
            </div>
            <p>{props.cartItem.quantity}</p>
            <div className={ props.cartItem.quantity < 99 ? "counterButton" : "counterButton counterButtonDisabled" } onClick={ () => handleCartUpdate("increase") }>
                <p className="counterButtonText">+</p>
            </div>
        </div>
    );
};

export default CartCounter;