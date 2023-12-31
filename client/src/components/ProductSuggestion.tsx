//Imports -----------

//React/Router Imports
import { Link } from "react-router-dom";

//Context Imports
import { useProductContext } from "../context/ProductContext";

//Component ------------
const ProductSuggestion = (props: { index: number }) => {

    //React Hooks -------------

    //Context
    const { currentProduct } = useProductContext();

    //Variables ------------
    const thisProduct = currentProduct.others[props.index];

    return (
        <div className="ProductSuggestion">
            <img src={thisProduct.image.desktop} alt={thisProduct.name} />
            <h5>{thisProduct.name}</h5>
            <Link to={ "/" + thisProduct.category + "/" + thisProduct.slug }>
                <button className="button1">See Product</button>
            </Link> 
        </div>
    );
};

export default ProductSuggestion;