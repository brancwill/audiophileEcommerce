//Context Imports
import { useProductContext } from "../context/ProductContext";

//Component
const Gallery = () => {

    const { currentProduct } = useProductContext();
    return (
        <div className="Gallery">
            <div className="sideImages">
                <img className="sideImage" src={ currentProduct.gallery.first.desktop } alt="" />
                <img className="sideImage" src={currentProduct.gallery.second.desktop} alt="" />
            </div>
            <img className="bigImage" src={currentProduct.gallery.third.desktop} alt="" />
        </div>
    );
};

export default Gallery;