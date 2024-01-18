//Imports ---------

// Context Imports
import { useProductContext } from "../context/ProductContext";

// Utility Imports
import useMediaQuery from "../hooks/useMediaQuery";
import { ImageList } from "../utility/customTypes/ProductTypes";

//Component -----------
const Gallery = () => {

    //React Hooks ----------

    // Media Query
    const { view } = useMediaQuery();

    //Context
    const { currentProduct } = useProductContext();

    return (
        <div className="Gallery">
            <div className="sideImages">
                <div className="sideImage" style={{ backgroundImage: `url(${currentProduct.gallery.first[view as keyof ImageList]}` }}>

                </div>
                <div className="sideImage" style={{ backgroundImage: `url(${currentProduct.gallery.second[view as keyof ImageList]}` }}>
                    
                </div>
            </div>
            <div className="bigImage" style={{ backgroundImage: `url(${currentProduct.gallery.third[view as keyof ImageList]}` }}>

                </div>
        </div>
    );
};

export default Gallery;