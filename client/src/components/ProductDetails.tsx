//Imports ----------

//Context Imports
import { useProductContext } from "../context/ProductContext";

//Component ------------
const ProductDetails = () => {

    //React Hooks -------------

    //Context
    const { currentProduct } = useProductContext();

    return (
        <div className="ProductDetails">
            <div className="features">
                <h3>Features</h3>
                <p>{currentProduct.features}</p>
            </div>
            <div className="inBox">
                <h3>In the Box</h3>
                <div className="items">
                    {
                        currentProduct.includes.map((included, index) => {
                            return (
                                <div key={index} className="item">
                                    <p className="quantity">{included.quantity}</p>
                                    <p className="name">{included.item}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;