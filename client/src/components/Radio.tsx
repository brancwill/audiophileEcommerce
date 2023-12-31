//Component ------------
const Radio = (props: { active: string, handleRadio: Function, index: string, text: string }) => {

    //Functions -------------

    //Handlers
    const handleClick = () => {
        props.handleRadio(props.index);
    }

    return (
        <div onClick={() => handleClick()} className={ props.active == props.index ? 
            "Radio RadioActive" 
            : "Radio"
        }>
            <span className="radioCircle">
                <span className={ props.active == props.index ? 
                                    "radioCircleCenter radioCircleCenterActive" 
                                  : 
                                    "radioCircleCenter" 
                      }>
                </span>
            </span>
            <p className='optionText'>{props.text}</p>
        </div>
    );
};

export default Radio;