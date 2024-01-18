//Imports ------------

//React/Router Imports
import { Link } from "react-router-dom";

//Component ------------
const CategoryIcon = (props: { image: string, title: string, setIsOpen?: Function }) => {

    //Functions ---------------

    //Handlers
    const handleClick = () => {
        if( props.setIsOpen ) {
            props.setIsOpen(false);
        }
    }
    return (
        <Link to={"/" + props.title}>
            <div onClick={() => handleClick()} className="CategoryIcon">
                <img src={props.image} alt={props.title}/>
                <h6>{props.title}</h6>
                <p className="button3">Shop</p>
            </div>
        </Link>
    );
};

export default CategoryIcon;