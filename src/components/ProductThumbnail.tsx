
const ProductThumbnail = (props: { image: string, productName: string}) => {
    return (
        <div className="ProductThumbnail">
            <img src={props.image} alt={props.productName} />
        </div>
    );
};

export default ProductThumbnail;