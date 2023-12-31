//Imports -------------

//Context Imports
import { useCartContext } from "../context/CartContext";
import { CartItem } from "../utility/customTypes/CartTypes";

//Component -----------
const CartCounter = (props: { cartItem: CartItem, index: number }) => {

    //React Hooks ---------

    //Context
    const { updateCartItem } = useCartContext();

    //Functions ---------

    //Handlers
    const handleCartUpdate: Function = ( increaseOrDecrease: string ): void => {
        if ( increaseOrDecrease === "increase" ) {
            //Limits max quantity of an item to 99
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