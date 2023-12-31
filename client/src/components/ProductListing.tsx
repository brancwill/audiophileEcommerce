//Imports ------------

//React/Router Imports
import { Link } from "react-router-dom";

//Component Imports
import ProductThumbnail from "./ProductThumbnail";

//Utility Imports
import { Product } from "../utility/customTypes/ProductTypes";

//Component -------------
const ProductListing = (props: { product: Product, isLeftOriented: boolean }) => {
    return (
        <div className={ props.isLeftOriented ? "ProductListing ProductListingLeft" : "ProductListing"}>
            <ProductThumbnail image={props.product.image.desktop} productName={props.product.name} />
            <div className="productInfo">
                { props.product.new ? <p className="Overline newProduct">New Product</p> : <p> </p> }
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <Link to={props.product.slug}><button className="button1">See Product</button></Link>
            </div>
        </div>
    );
};

export default ProductListing;