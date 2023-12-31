//Imports ----------------

//React/Router Imports
import { useState } from "react";

//Component Imports
import Counter from "./Counter";
import ProductThumbnail from "./ProductThumbnail";

//Context Imports
import { useProductContext } from "../context/ProductContext";
import { useCartContext } from "../context/CartContext";

//Utility Imports
import { toPriceFormat } from "../utility/Functions";

//Component ---------------
const ProductAddToCart = ( props: { toggleCart: Function } ) => {

    //React Hooks ---------------

    //Context
    const { currentProduct } = useProductContext();
    const { updateCartItem } = useCartContext();

    //State
    const [ count, setCount ] = useState<number>(1);

    //Functions --------------

    //Handlers
    const handleClick: Function = (): void => {
        //Adds item to cart and opens it.
        updateCartItem(currentProduct, count, "new");
        props.toggleCart();
    }

    return (
        <div className="ProductAddToCart">
            <ProductThumbnail image={currentProduct.image.desktop} productName={currentProduct.name} />
            <div className="productInfo">
                { currentProduct.new ? <p className="Overline newProduct">New Product</p> : <p> </p> }
                <div>
                    <h2>{currentProduct.name}</h2>
                    <h2>{currentProduct.category === "speakers" ? "speaker" : currentProduct.category}</h2>
                </div>
                <p>{currentProduct.description}</p>
                <h6>{ toPriceFormat(currentProduct.price) }</h6>
                <div className="buttons">
                    <Counter count={count} setCount={setCount} index={1}/>
                    <button onClick={() => handleClick()} className="button1">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductAddToCart;