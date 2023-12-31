//Imports ----------------

//Utility Imports
import { CartItem } from "./customTypes/CartTypes";

//Functions -----------

//Number Handling
export const toPriceFormat: Function = (price: number): string => {

    if ( price % 1 === 0 ) {
        return "$ " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return "$ " + price.toLocaleString('en-US', { minimumFractionDigits: 2 }).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
export const calculateTotal: Function = (items: CartItem[]): number => {
    let total: number = 0;

    items.forEach(item => {
        total += ( item.product.price * item.quantity )
    });

    return total;
}

//Page Maneuvering
export const toTopOfPage = () => {
    window.scrollTo(0, 0);
}

