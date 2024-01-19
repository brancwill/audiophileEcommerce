const Loader = () => {
    return (
        <div className="Loader">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <h5>Loading</h5>
            <p>(Please bear with the potentially long load time, I use free database hosting)</p>
        </div>
    );
};

export default Loader;