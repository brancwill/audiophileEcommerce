//Imports -------------

//React/Router Imports
import { Link } from 'react-router-dom';

//Component Imports
import CartItemComponent from './CartItemComponent';

//Context Imports
import { useCartContext } from '../context/CartContext';

//Utility Imports
import { calculateTotal } from '../utility/Functions';
import { toPriceFormat } from '../utility/Functions';


//Component ---------
const Cart = ( props: { isOpen: boolean, setIsOpen: Function }) => {

    //React Hooks -------

    //Context
    const { emptyCart, items } = useCartContext();

    return (
            <div className='Cart'>
                <div className="container">
                    <div className="cartTop">
                        <h6>Cart ({items.length})</h6>
                        {
                            items.length >= 1 ?
                                <div className="removeAllButton" onClick={() => emptyCart()}>
                                    <p>Remove All</p>
                                </div>
                            :
                                <span></span>

                        }
                    </div>
                    <div className="itemList">
                        {
                            items.map((item, index) => {
                                return <CartItemComponent 
                                            cartItem={item} 
                                            index={index} 
                                            key={index} 
                                            type="Cart" 
                                        />
                            })
                        }
                    </div>
                    <div className="cartBottom">
                        <div className="total">
                            <p>TOTAL</p>
                            <h6>{toPriceFormat(calculateTotal(items))}</h6>
                        </div>
                        {
                            items.length >= 1 ?
                                <Link to="/checkout">
                                    <button onClick={() => props.setIsOpen(!props.isOpen)}
                                            className='button1'
                                    >
                                        Checkout
                                    </button>
                                </Link>
                            :
                                <span></span>
                        }
                    </div>
                </div>
            </div>
    );
};

export default Cart;