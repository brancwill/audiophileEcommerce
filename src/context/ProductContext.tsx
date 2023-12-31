import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../utility/ProductTypes";

export interface ProductState {
    currentProduct: Product;
    setCurrentProduct: React.Dispatch<React.SetStateAction<Product>>; 
}

export const ProductContext = createContext<ProductState | undefined>(undefined);

export const useProductContext = () => {
    const product = useContext(ProductContext);

    if (!product) {
        throw new Error("useProductContext must be used with a ProductContext");
    }

    return product;
}

export const ProductContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ currentProduct, setCurrentProduct ] = useState<Product>({
        id: 0,
        slug: "",
        name: "",
        shortenedName: "",
        image: {
            mobile: "",
            tablet: "",
            desktop: ""
        },
        category: "",
        categoryImage: {
            mobile: "",
            tablet: "",
            desktop: ""
        },
        new: false,
        price: 0,
        description: "",
        features: "",
        includes: [],
        gallery: {
            first: {
                mobile: "",
                tablet: "",
                desktop: ""
            },
            second: {
                mobile: "",
                tablet: "",
                desktop: ""
            },
            third: {
                mobile: "",
                tablet: "",
                desktop: ""
            }
        },
        others: []
    });

    const contextValue: ProductState = {
      currentProduct,
      setCurrentProduct
    }
  
    return (
      <ProductContext.Provider value={contextValue}>
        {children}
      </ProductContext.Provider>
    );
};