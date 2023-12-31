import { Product } from "./ProductTypes";
import data from "../data.json";
import { CartItem } from "../context/CartContext";

// const allProducts: Product[] = JSON.parse(data.toString());

export const toPriceFormat: Function = (price: number): string => {

    if ( price % 1 === 0 ) {
        return "$ " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return "$ " + price.toLocaleString('en-US', { minimumFractionDigits: 2 }).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
export const retrieveProductCategory: Function = (givenCategory: string): Product[] => {
    return data.filter((product) => product.category === givenCategory)
}
export const retrieveProduct: Function = ( productCategory: string, productSlug: string): Product => {
    const singleProductArray = retrieveProductCategory(productCategory).filter((product: Product) => product.slug === productSlug);
    return singleProductArray[0]
}
export const toTopOfPage = () => {
    window.scrollTo(0, 0);
}

export const calculateTotal: Function = (items: CartItem[]): number => {
    let total: number = 0;

    items.forEach(item => {
        total += ( item.product.price * item.quantity )
    });

    return total;
}