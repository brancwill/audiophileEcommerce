//Imports -----------

//React/Router Imports
import { Link } from "react-router-dom";

//Context Imports
import { useProductContext } from "../context/ProductContext";

// Utility Imports
import useMediaQuery from "../hooks/useMediaQuery";
import { ImageList } from "../utility/customTypes/ProductTypes";

//Component ------------
const ProductSuggestion = (props: { index: number }) => {

    //React Hooks -------------

    // Media Query
    const { view } = useMediaQuery();

    //Context
    const { currentProduct } = useProductContext();

    //Variables ------------
    const thisProduct = currentProduct.others[props.index];

    return (
        <div className="ProductSuggestion">
            <div className="productSuggestionImage" 
                 style={{ backgroundImage: `url(${thisProduct.image[view as keyof ImageList]}` }}> 
            </div>
            <h5>{thisProduct.name}</h5>
            <Link to={ "/" + thisProduct.category + "/" + thisProduct.slug }>
                <button className="button1">See Product</button>
            </Link> 
        </div>
    );
};

export default ProductSuggestion;