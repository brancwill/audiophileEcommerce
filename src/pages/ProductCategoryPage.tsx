import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { retrieveProductCategory } from "../utility/Functions";
import ProductListing from "../components/ProductListing";
import CategoryIconList from "../components/CategoryIconList";
import PageEnder from "../components/PageEnder";
import { Product } from "../utility/ProductTypes";

const ProductCategoryPage = () => {

    let { productCategory } = useParams();
    const [ retrievedCategory, setRetrievedCategory ] = useState<Product[]>();
    const navigate = useNavigate();

    useEffect(() => {
        const chosenProductCategory = retrieveProductCategory(productCategory);

        if( chosenProductCategory.length >= 1 ) {
            setRetrievedCategory(chosenProductCategory);
        }
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
                                return <ProductListing product={product} isLeftOriented={index % 2 === 0 ? true : false} key={index} />
                            })
                        :
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