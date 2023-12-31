//Imports ---------

//React/Router
import { useRef } from "react";

//Component ----------
const Counter = (props: { count: number, setCount: Function, index: number }) => {

    //React Hooks --------

    //Ref
    const inputRef = useRef<HTMLInputElement>(null);

    //Functions -------

    //Input Control
    const handleUserInput = () => {
        //Sets input value to 1 if user leaves it blank.
        if (inputRef.current) {
            const value = inputRef.current.value.trim();
            if (value === '') {
              props.setCount(1);
            } else if ( Number(value) >= 100 ) {
                props.setCount(99)
            }
          }
    }

    //Handlers
    const handleClick: Function = ( incrementOrDecrement: string ): void => {

        const currentCount = Number(props.count.toString())

        if ( incrementOrDecrement === "increment" ) {
            if ( props.count < 99) {
                props.setCount(currentCount + 1);
            }
        } else if ( incrementOrDecrement === "decrement" ) {
            if ( props.count > 1) {
                props.setCount(currentCount - 1);
            }
        }
    }
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        props.setCount(e.currentTarget.value)
    }

    return (
        <div className="Counter">
            <div className={ props.count > 1 ? 
                                "counterButton" 
                            : 
                                "counterButton counterButtonDisabled" 
                            } 
                 onClick={ () => handleClick("decrement") }
            >
                <p className="counterButtonText">-</p>
            </div>
            <input ref={inputRef} 
                   name={`counter${props.index}`} 
                   className="counterNumber" 
                   type="number" 
                   min={1} 
                   max={99} 
                   value={props.count}
                   onBlur={() => handleUserInput()}
                   onChange={(e) => handleChange(e)} 
            />
            <div className={ props.count < 99 ? 
                                "counterButton" 
                            : "counterButton counterButtonDisabled" 
                           } 
                 onClick={ () => handleClick("increment") }
            >
                <p className="counterButtonText">+</p>
            </div>
        </div>
    );
};

export default Counter;