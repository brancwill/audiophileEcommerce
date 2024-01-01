//Imports ----------------

//React/Router Imports
import { createContext, useContext, useState, ReactNode } from "react";

//Utility Imports
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
    const [ currentCategory, setCurrentCategory ] = useState<Product[]>([]);
    const [ currentProduct, setCurrentProduct ] = useState<Product>(emptyProduct);

    //Context to pass
    const contextValue: ProductState = {
        currentProduct,
        setCurrentProduct,
        currentCategory,
        setCurrentCategory,
      }
  
    return (
      <ProductContext.Provider value={contextValue}>
        {children}
      </ProductContext.Provider>
    );
};