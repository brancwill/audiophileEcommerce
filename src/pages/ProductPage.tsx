import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { retrieveProduct } from "../utility/Functions";
import ProductAddToCart from "../components/ProductAddToCart";
import ProductDetails from "../components/ProductDetails";
import Gallery from "../components/Gallery";
import LikeProducts from "../components/LikeProducts";
import CategoryIconList from "../components/CategoryIconList";
import PageEnder from "../components/PageEnder";
import { useProductContext } from "../context/ProductContext";

const ProductPage = ( props: { toggleCart: Function } ) => {

    let { productCategory, productSlug } = useParams();
    const { setCurrentProduct } = useProductContext();
    const navigate = useNavigate();

    useEffect(() => {
        const product = retrieveProduct(productCategory, productSlug);

        if(product !== undefined) {
            setCurrentProduct(product);
        }
        else {
            navigate("/page-not-found");
        }
    }, [productSlug])

    const handleGoBack: Function = ():void => {
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