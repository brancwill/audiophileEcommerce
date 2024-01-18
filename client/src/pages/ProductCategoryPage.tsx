//Imports ------------

//React/Router Imports
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Component Imports
import CategoryIconList from "../components/CategoryIconList";
import PageEnder from "../components/PageEnder";
import ProductListing from "../components/ProductListing";

//Context Imports
import { useProductContext } from "../context/ProductContext";

//Component --------------
const ProductCategoryPage = () => {

    const getProducts = () => {
        fetch(`http://localhost:8800/api/${productCategory}`)
            .then(res => res.json())
            .then(data => setCurrentCategory(data));
    }

    //React Hooks -----------

    //Context
    const { currentCategory, setCurrentCategory } = useProductContext();

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
                            currentCategory ? 
                            currentCategory.map((product, index) => {
                                return <ProductListing product={product} 
                                                       isLeftOriented={index % 2 !== 0 ? true : false} 
                                                       key={index} 
                                        />
                            })
                        :
                            //If category isn't immediately set.
                            <h1>Loading...</h1>
                    }
                </div>
                <CategoryIconList />
                <PageEnder />
                </div>
        </div>
    );
};

export default ProductCategoryPage;