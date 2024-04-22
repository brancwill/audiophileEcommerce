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
import { emptyProduct } from "../utility/customTypes/ProductTypes";
import Loader from "../components/Loader";

// Utility
import { Product } from "../utility/customTypes/ProductTypes";
import productData from "../data.json"

//Component ----------------
const ProductPage = ( props: { toggleCart: Function } ) => {

    //React Hooks ------------

    //Context
    const { currentProduct, setCurrentProduct, clearProduct } = useProductContext();

    //Router
    const navigate = useNavigate();
    let { productCategory, productSlug } = useParams();
    
    //Functions ---------------

    // Handles fetched data, and sets isLoaded for animation.
    // const handleAfterFetch: Function = (data: Product[]): void => {
    //     if ( data.length > 0 ) {
    //         setCurrentProduct(data[0]);
    //         onComplete();
    //     } else {
    //         navigate("/page-not-found");
    //     }
    // }

    //Product Retrieval
    // const getProduct = async () => {
    //     clearProduct();
    //     await fetch(`https://mockecommerceapi.onrender.com/api/${productCategory}/${productSlug}`, {
    //         method: "GET",
    //         mode: 'cors'
    //     })
    //         .then(res => res.json())
    //         .then(data => handleAfterFetch(data))
    // }

    const getProduct = () => {
        clearProduct();
        const product = productData.find((product: Product) => {
            return product.slug === productSlug
        })
        if (product) {
            setCurrentProduct(product);
        }
        onComplete();
    }

    const onComplete: Function = (): void => {
        setTimeout(() => {
            window.scrollTo({
                top: 200,
                left: 0,
                behavior: "smooth"
            });
        }, 200)
    }

    useEffect(() => {
        getProduct();
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
            { currentProduct && currentProduct !== emptyProduct ?
                    <div>
                            <ProductAddToCart toggleCart={props.toggleCart} />
                    </div>
                :
                    <div>
                            <Loader />
                    </div>
            }
            <ProductDetails />
            <Gallery />
            <LikeProducts />
            <CategoryIconList />
            <PageEnder />
        </div>
    );
};

export default ProductPage;