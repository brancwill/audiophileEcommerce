//React/Router Imports
import { Link } from 'react-router-dom';

//Component Imports
import CartItem from './CartItemComponent';

//Context Imports
import { useCartContext } from '../context/CartContext';

//Utility Imports
import { calculateTotal } from '../utility/Functions';
import { toPriceFormat } from '../utility/Functions';


//Component
const Cart = ( props: { isOpen: boolean, setIsOpen: Function }) => {

    //React Hooks -------

    //Context
    const { emptyCart, items } = useCartContext();

    //Functions
    const removeAllFromCart = () => {
        items.forEach(item => {
            emptyCart(item.product.name);
        });
    } 

    return (
            <div className='Cart'>
                <div className="container">
                    <div className="cartTop">
                        <h6>Cart ({items.length})</h6>
                        <div className="removeAllButton" onClick={removeAllFromCart}>
                            <p>Remove All</p>
                        </div>
                    </div>
                    <div className="itemList">
                        {
                            items.map((item, index) => {
                                return <CartItem cartItem={item} index={index} key={index} type="Cart" />
                            })
                        }
                    </div>
                    <div className="cartBottom">
                        <div className="total">
                            <p>TOTAL</p>
                            <h6>{toPriceFormat(calculateTotal(items))}</h6>
                        </div>
                        <Link to="/checkout"><button onClick={() => props.setIsOpen(!props.isOpen)} className='button1'>Checkout</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Cart;