//Imports ------------

//React/Router Imports
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Component Imports
import CategoryIconList from "../components/CategoryIconList";
import PageEnder from "../components/PageEnder";
import ProductListing from "../components/ProductListing";

//Context Imports
import { useProductContext } from "../context/ProductContext";

//Utility Imports
import { Product } from "../utility/customTypes/ProductTypes";

//Component --------------
const ProductCategoryPage = () => {

    //React Hooks -----------

    //Context
    const { retrieveProductCategory } = useProductContext();

    //Router
    let { productCategory } = useParams();
    const navigate = useNavigate();

    //State
    const [ retrievedCategory, setRetrievedCategory ] = useState<Product[]>();

    //useEffect
    useEffect(() => {
        //Retrieves category information to pupulate page.
        const chosenProductCategory = retrieveProductCategory(productCategory);

        //If category is found, populates page.
        if( chosenProductCategory.length >= 1 ) {
            setRetrievedCategory(chosenProductCategory);
        }
        //If not, redirects to "Not Found" page.
        else {
            navigate("/page-not-found");
        }
    }, [productCategory])

    return (
        <div className='ProductCategoryPage'>
            <h2 className="pageTitle">{productCategory}</h2>
            <div className="underBar">
                <div className="productListings">
                    {
                            retrievedCategory ? 
                            retrievedCategory.map((product, index) => {
                                return <ProductListing product={product} 
                                                       isLeftOriented={index % 2 === 0 ? true : false} 
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