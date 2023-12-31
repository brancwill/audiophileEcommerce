//React/Router Imports

//Component Imports
import CartCounter from "./CartCounter";

//Context Imports
import { CartItem } from "../context/CartContext";

//Utility Imports
import { toPriceFormat } from "../utility/Functions";

//Component
const CartItemComponent = ( props: { cartItem: CartItem, index: number, type: string } ) => {

    //React Hooks -----------

    return (
            props.cartItem ?
                <div className={`CartItem CartItem${props.type}`}>
                <div className="leftContainer">
                    <img src={ props.cartItem.product.image.desktop }/>
                    <div className="productInfo">
                        <p className="cartItemTitle">{ props.cartItem.product.shortenedName}</p>
                        <p className="cartItemPrice">{toPriceFormat(props.cartItem.product.price)}</p>
                    </div>
                </div>
                {
                    props.type === "Cart" ?
                        <CartCounter cartItem={props.cartItem} index={props.index} />
                    : props.type === "Checkout" ?
                        <p className="quantity">{"x" + props.cartItem.quantity}</p>
                    : <div></div>
                }
                </div>
            :
                <h6>Loading...</h6>
    );
};

export default CartItemComponent;