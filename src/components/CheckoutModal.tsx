//Component Imports
import CheckoutSuccess from './CheckoutSuccess';
import Modal from './Modal';

//Component
const CheckoutModal = ( props: { isOpen: boolean, setIsOpen: Function, grandTotal: number } ) => {
    return (
        <div className="CheckoutModal">
            <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} type="Checkout">
                <CheckoutSuccess setIsOpen={props.setIsOpen} grandTotal={props.grandTotal} />
            </Modal>
        </div>
    );
};

export default CheckoutModal;