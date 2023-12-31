import { useState } from "react";
import Counter from "./Counter";
import ProductThumbnail from "./ProductThumbnail";
import { toPriceFormat } from "../utility/Functions";
import { useProductContext } from "../context/ProductContext";
import { useCartContext } from "../context/CartContext";

const ProductAddToCart = ( props: { toggleCart: Function } ) => {

    const [ count, setCount ] = useState<number>(1);
    const { currentProduct } = useProductContext();
    const { updateCartItem } = useCartContext();

    const handleClick: Function = (): void => {
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