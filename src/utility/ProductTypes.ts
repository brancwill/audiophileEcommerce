// //XX99 Mark II
// import XX99MarkIIprimaryImage from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
// import XX99MarkIIsideImage1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
// import XX99MarkIIsideImage2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
// import XX99MarkIIbigImage from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

// //XX99 Mark I
// import XX99MarkIprimaryImage from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
// import XX99MarkIsideImage1 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
// import XX99MarkIsideImage2 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
// import XX99MarkIbigImage from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

// // XX59
// import XX59primaryImage from "../assets/product-xx59-headphones/desktop/image-product.jpg";
// import XX59sideImage1 from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
// import XX59sideImage2 from "../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
// import XX59bigImage from "../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";

// // ZX9
// import ZX9primaryImage from "../assets/product-zx9-speaker/desktop/image-product.jpg";
// import ZX9sideImage1 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
// import ZX9sideImage2 from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
// import ZX9bigImage from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";

// // ZX7
// import ZX7primaryImage from "../assets/product-zx7-speaker/desktop/image-product.jpg";
// import ZX7sideImage1 from "../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
// import ZX7sideImage2 from "../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
// import ZX7bigImage from "../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";

// // YX1
// import YX1primaryImage from "../assets/product-yx1-earphones/desktop/image-product.jpg";
// import YX1sideImage1 from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
// import YX1sideImage2 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
// import YX1bigImage from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";

interface ImageList {
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
    others: Other[]
}