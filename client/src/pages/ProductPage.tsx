//Imports -----------

//React/Router
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Components
import CategoryIconList from "../components/CategoryIconList";
import Gallery from "../components/Gallery";
import LikeProducts from "../components/LikeProducts";
import PageEnder from "../components/PageEnder";
import ProductAddToCart from "../components/ProductAddToCart";
import ProductDetails from "../components/ProductDetails";

//Context
import { useProductContext } from "../context/ProductContext";

//Component ----------------
const ProductPage = ( props: { toggleCart: Function } ) => {

    //React Hooks ------------

    //Context
    const { retrieveProduct, setCurrentProduct } = useProductContext();

    //Router
    const navigate = useNavigate();
    let { productCategory, productSlug } = useParams();
    

    useEffect(() => {
        //Retrieves product information to pupulate page.
        const product = retrieveProduct(productCategory, productSlug);

        //If product is found, populates page.
        if(product !== undefined) {
            setCurrentProduct(product);
        }
        //If not, redirects to "Not Found" page.
        else {
            navigate("/page-not-found");
        }
    }, [productSlug])

    const handleGoBack: Function = ():void => {
        //Takes user to the previous page.
        navigate(-1);
    }

    return (
        <div className="ProductPage">
            <div className="backButton" onClick={() => handleGoBack()}>
                <p>Go Back</p>
            </div>
            <ProductAddToCart toggleCart={props.toggleCart} />
            <ProductDetails />
            <Gallery />
            <LikeProducts />
            <CategoryIconList />
            <PageEnder />
        </div>
    );
};

export default ProductPage;