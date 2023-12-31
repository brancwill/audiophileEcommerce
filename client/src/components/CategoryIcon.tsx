//Imports ------------

//React/Router Imports
import { Link } from "react-router-dom";

//Component ------------
const CategoryIcon = (props: { image: string, title: string }) => {
    return (
        <Link to={"/" + props.title}>
            <div className="CategoryIcon">
                <img src={props.image} alt={props.title}/>
                <h6>{props.title}</h6>
                <p className="button3">Shop</p>
            </div>
        </Link>
    );
};

export default CategoryIcon;