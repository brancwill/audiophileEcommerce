//Imports ------------

//Component Imports
import CategoryIcon from "./CategoryIcon";

//Component
const CategoryIconList = () => {
    return (
        <div className="CategoryIconList">
            <CategoryIcon image={"/assets/shared/desktop/image-category-thumbnail-headphones.png"} title="headphones"/>
            <CategoryIcon image={"/assets/shared/desktop/image-category-thumbnail-speakers.png"} title="speakers"/>
            <CategoryIcon image={"/assets/shared/desktop/image-category-thumbnail-earphones.png"} title="earphones"/>
        </div>
    );
};

export default CategoryIconList;