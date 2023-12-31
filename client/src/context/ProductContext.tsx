//Imports ----------------

//React/Router Imports
import { createContext, useContext, useState, ReactNode } from "react";

//Utility Imports
import data from "../data.json";
import { emptyProduct, Product, ProductState } from "../utility/customTypes/ProductTypes";


//Context Creation ----------

//Context Definition
export const ProductContext = createContext<ProductState | undefined>(undefined);

//Hook to use Product Context
export const useProductContext = () => {
    const product = useContext(ProductContext);

    if (!product) {
        throw new Error("useProductContext must be used with a ProductContext");
    }

    return product;
}

//Product Context Provider Component
export const ProductContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    //React Hooks ----------

    //State
    const [ currentProduct, setCurrentProduct ] = useState<Product>(emptyProduct);

    //Functions --------------
    const retrieveProductCategory: Function = (givenCategory: string): Product[] => {
        //Retrieves product category based on title of category.
        return data.filter((product) => product.category === givenCategory)
    }
    const retrieveProduct: Function = ( productCategory: string, productSlug: string): Product => {
        //Retrieves product category based on title of category and product slug.
        const singleProductArray = retrieveProductCategory(productCategory).filter((product: Product) => product.slug === productSlug);
        return singleProductArray[0]
    }

    //Context to pass
    const contextValue: ProductState = {
        currentProduct,
        setCurrentProduct,
        retrieveProductCategory,
        retrieveProduct
      }
  
    return (
      <ProductContext.Provider value={contextValue}>
        {children}
      </ProductContext.Provider>
    );
};