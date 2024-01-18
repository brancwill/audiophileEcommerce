//Imports ------------

//React/Router Imports
import { Link } from "react-router-dom";

//Utility Imports
import { ImageList, Product } from "../utility/customTypes/ProductTypes";
import useMediaQuery from "../hooks/useMediaQuery";

//Component -------------
const ProductListing = (props: { product: Product, isLeftOriented: boolean }) => {

    //Hooks ------------

    //Media Query
    const { view } = useMediaQuery();

    return (
        <div className={ props.isLeftOriented && view === 'desktop' ? "ProductListing ProductListingLeft" : "ProductListing"}>
            {/* <ProductThumbnail image={props.product.image.desktop} productName={props.product.name} /> */}
            <div className="productListingImage" 
                 style={{ backgroundImage: `url(${props.product.image[view as keyof ImageList]}` }}> 
            </div>
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