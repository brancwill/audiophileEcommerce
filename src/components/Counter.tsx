//Component
const Counter = (props: { count: number, setCount: Function, index: number }) => {

    //Functions -------

    //Input Control
    const checkInput = () => {
        if (props.count < 1 || (document.querySelector(`input[name='counter${props.index}']`) as HTMLInputElement).value.length < 1) {
            props.setCount(1);
        } else if (props.count > 99) {
            props.setCount(99)
        }
    }

    //Handlers
    const handleClick: Function = ( incrementOrDecrement: string ): void => {

        const currentCount = parseInt(props.count.toString(), 10)

        if ( incrementOrDecrement === "increment" ) {
            if ( props.count < 99) {
                props.setCount(currentCount + 1);
            }
        } else if ( incrementOrDecrement === "decrement" ) {
            if ( props.count > 1) {
                props.setCount(currentCount - 1);
            }
        }
        checkInput();
    }
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        props.setCount(e.currentTarget.value)
        checkInput();
    }

    return (
        <div className="Counter">
            <div className={ props.count > 1 ? "counterButton" : "counterButton counterButtonDisabled" } onClick={ () => handleClick("decrement") }>
                <p className="counterButtonText">-</p>
            </div>
            <input name={`counter${props.index}`} className="counterNumber" type="number" min={1} max={99} value={props.count} onChange={(e) => handleChange(e)} />
            <div className={ props.count < 99 ? "counterButton" : "counterButton counterButtonDisabled" } onClick={ () => handleClick("increment") }>
                <p className="counterButtonText">+</p>
            </div>
        </div>
    );
};

export default Counter;