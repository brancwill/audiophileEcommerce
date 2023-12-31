//Imports ------------

//React/Router Imports
import { useState } from "react";
import { Link } from "react-router-dom";

//Component Imports
import CartItem from "./CartItemComponent";

//Context Imports
import { useCartContext } from "../context/CartContext";

//Utility Imports
import { toPriceFormat } from "../utility/Functions";

//Component -------------
const CheckoutSuccess = ( props: { setIsOpen: Function, grandTotal: number } ) => {

    //React Hooks -----------

    //Context
    const { items } = useCartContext();

    //State
    const [ showMore, setShowMore ] = useState<boolean>();

    //Functions ------------

    //Handlers
    const handleClick = () => {
        //Closes modal
        props.setIsOpen(false);
    }

    return (
        <div className="CheckoutSuccess">
            <img className="check" src="/assets/checkout/icon-order-confirmation.svg" alt="" />
            <div className="thanks">
                <h3>Thank You</h3>
                <h3>For Your Order</h3>
            </div>
            <p className="receive">You will receive an email confirmation shortly.</p>
            <div className={ !showMore ? 'orderDetails' : 'orderDetails orderDetailsExpanded' }>
                <div className="detailsLeft">
                    <div className="top">
                        <CartItem cartItem={items[0]} index={0} type="Checkout" />
                        {
                            items.length > 1 && showMore ?
                                <div className="itemsExpanded">
                                    <div className="itemsList">
                                        {items.map((item, index) => {
                                            if(index > 0) {
                                                return <CartItem cartItem={item} index={index} type="Checkout" key={index} />
                                            }
                                        })}
                                    </div>
                                </div>
                            :
                                <span></span>
                        }
                    </div>
                    <div className="toggles">
                        {
                            items.length <= 1 ?
                                <span></span>
                            : items.length > 1 && !showMore ?
                                <p className="displayToggle" onClick={() => setShowMore(true)}>and {items.length - 1} other item(s).</p>
                            :
                                <p className="displayToggle" onClick={() => setShowMore(false)}>View Less</p>
                        }
                    </div>
                </div>
                <div className="detailsRight">
                    <div className="totalInfo">
                        <p className="valueTitle">Grand Total</p>
                        <p className="valueAmount">{toPriceFormat(props.grandTotal)}</p>
                    </div>
                </div>
            </div>
            <Link className="buttonLink" to="/"><button onClick={handleClick} className="button1">Back To Home</button></Link>
        </div>
    );
};

export default CheckoutSuccess;