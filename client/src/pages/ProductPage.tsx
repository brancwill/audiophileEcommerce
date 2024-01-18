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
    const { currentProduct, setCurrentProduct } = useProductContext();

    //Router
    const navigate = useNavigate();
    let { productCategory, productSlug } = useParams();
    
    //Functions ---------------

    //Product Retrieval
    const getProduct = () => {
        fetch(`https://mockecommerceapi.onrender.com/api/${productCategory}/${productSlug}`, {
            method: "GET",
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => setCurrentProduct(data[0]))
    }

    useEffect(() => {
        //If product is found, populates page.
        if(currentProduct !== undefined) {
            getProduct();
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