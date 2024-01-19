// Imports ------------

// React/Router Imports
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Component Imports
import CategoryIconList from "../components/CategoryIconList";
import PageEnder from "../components/PageEnder";
import ProductListing from "../components/ProductListing";

// Context Imports
import { useProductContext } from "../context/ProductContext";
import Loader from "../components/Loader";
import { Product } from "../utility/customTypes/ProductTypes";

//Component --------------
const ProductCategoryPage = () => {

    // Functions -------------

    // Handles fetched data, and sets isLoaded for animation.
    const handleAfterFetch = (data: Product[]) => {
        setCurrentCategory(data);
        onComplete();
    }

    // Fetches product data
    const getProducts = async () => {
        clearCategory();
        await fetch(`https://mockecommerceapi.onrender.com/api/${productCategory}`, {
            method: "GET",
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => handleAfterFetch(data));
    }

    const onComplete: Function = (): void => {
        setTimeout(() => {
            window.scrollTo({
                top: 200,
                left: 0,
                behavior: "smooth"
            });
        }, 100)
    }

    //React Hooks -----------

    //Context
    const { currentCategory, setCurrentCategory, clearCategory } = useProductContext();

    //Router
    let { productCategory } = useParams();
    const navigate = useNavigate();

    //Variables ----------------
    const pages: string[] = [ "earphones", "headphones", "speakers" ];

    //useEffect
    useEffect(() => {
        if (productCategory) {
            //If category is found, populates page.
            if( pages.includes( productCategory ) ) {
                getProducts();
            }
            //If not, redirects to "Not Found" page.
            else {
                navigate("/page-not-found");
            }
        }
        
    }, [productCategory])

    return (
        <div className='ProductCategoryPage'>
            <h2 className="pageTitle">{productCategory}</h2>
            <div className="underBar">
                <div className={ productCategory !== 'speakers' ? "productListings" : "productListings productListingsReverse"}>
                            {
                                currentCategory && currentCategory.length > 0 ? 
                                    <div>
                                        {
                                            currentCategory.map((product, index) => {
                                                return <ProductListing product={product} 
                                                                    isLeftOriented={index % 2 !== 0 ? true : false} 
                                                                    key={index} 
                                                        />
                                            })
                                        }
                                    </div>
                                :
                                    //If category isn't immediately set.
                                    <Loader />
                            }
                </div>
                <CategoryIconList />
                <PageEnder />
                </div>
        </div>
    );
};

export default ProductCategoryPage;