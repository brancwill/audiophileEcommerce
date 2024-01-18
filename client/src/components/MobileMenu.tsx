//Imports ---------------

//Components
import CategoryIconList from "./CategoryIconList";
import Modal from "./Modal";

const MobileMenu = ( props: { isOpen: boolean, setIsOpen: Function }) => {
    return (
        <div className="MobileMenu">
            <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} type="Menu">
                <CategoryIconList setIsOpen={props.setIsOpen} />
            </Modal>
        </div>
    );
};

export default MobileMenu;