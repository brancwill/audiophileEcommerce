//Component Imports
import CategoryIcon from "./CategoryIcon";

//Image Imports
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";

//Component
const CategoryIconList = () => {
    return (
        <div className="CategoryIconList">
            <CategoryIcon image={headphones} title="headphones"/>
            <CategoryIcon image={speakers} title="speakers"/>
            <CategoryIcon image={earphones} title="earphones"/>
        </div>
    );
};

export default CategoryIconList;