//Interface Definitions ----------
export interface ImageList {
    mobile: string,
    tablet: string,
    desktop: string
}

interface Gallery {
    first: ImageList,
    second: ImageList,
    third: ImageList
}

interface Included {
    quantity: number,
    item: string
}

export interface Other {
    slug: string,
    name: string,
    category: string,
    image: ImageList
  }

export interface Product {
    id: number,
    slug: string,
    name: string,
    shortenedName: string,
    image: ImageList
    category: string,
    categoryImage: ImageList
    new: boolean,
    price: number,
    description: string,
    features: string,
    includes: Included[],
    gallery: Gallery,
    others: Other[],
    titleName: string
}
export interface ProductState {
    currentProduct: Product;
    setCurrentProduct: React.Dispatch<React.SetStateAction<Product>>; 
    currentCategory: Product[];
    setCurrentCategory: React.Dispatch<React.SetStateAction<Product[]>>;
    clearCategory: Function;
    clearProduct: Function;
}

//Empty Interfaces
export const emptyProduct: Product = {
    //Initializes state.
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
    others: [],
    titleName: ""
}