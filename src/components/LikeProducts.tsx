//Component Imports
import ProductSuggestion from "./ProductSuggestion";

//Context Imports
import { useProductContext } from "../context/ProductContext";

//Component
const LikeProducts = () => {

    //React Hooks --------

    //Context
    const { currentProduct } = useProductContext();

    return (
        <div className="LikeProducts">
            <h3>You May also like</h3>
            <div className="productsShown">
                {currentProduct.others.map((_product, index) => {
                    return <ProductSuggestion key={index} index={index} />
                })}
            </div>
        </div>
    );
};

export default LikeProducts;