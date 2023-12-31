//Imports ----------

//Component Imports
import Cart from "./Cart";
import Modal from "./Modal";

//Component ----------
const CartModal = ( props: { isOpen: boolean, setIsOpen: Function } ) => {

    return (
        <div className="CartModal">
            <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} type="Cart">
                <Cart isOpen={props.isOpen} setIsOpen={props.setIsOpen}/>
            </Modal>
        </div>
    );
};

export default CartModal;