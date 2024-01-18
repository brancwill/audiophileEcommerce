//Imports ------------

//Component Imports
import CategoryIcon from "./CategoryIcon";

//Component
const CategoryIconList = ( props: { setIsOpen?: Function } ) => {
    return (
        <div className="CategoryIconList">
            <CategoryIcon setIsOpen={props.setIsOpen} image={"/assets/shared/desktop/image-category-thumbnail-headphones.png"} title="headphones"/>
            <CategoryIcon setIsOpen={props.setIsOpen} image={"/assets/shared/desktop/image-category-thumbnail-speakers.png"} title="speakers"/>
            <CategoryIcon setIsOpen={props.setIsOpen} image={"/assets/shared/desktop/image-category-thumbnail-earphones.png"} title="earphones"/>
        </div>
    );
};

export default CategoryIconList;