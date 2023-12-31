//React/Router Imports
import { useState, ChangeEvent } from "react";

//Interface Imports
import { InputInformation } from "../pages/CheckoutPage";

//Component
const Input = ( props: { inputData: InputInformation, setValue: Function, length?: string } ) => {

  //React Hooks -------------

  //State
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  //Variables
  const name = props.inputData.name;
  const value = props.inputData.value;
  const error = props.inputData.error;
  const placeholder = props.inputData.placeholder;

  //Functions -------------

  //Input Control
  const formatPhoneNumber = (value: string): string => {
      const numericValue: string = value.replace(/\D/g, ''); // Remove non-numeric characters
  
      let formattedValue: string = '';
      if (numericValue.length > 0) {
        formattedValue += '+' + numericValue.substring(0, 1);
      }
      if (numericValue.length > 1) {
        formattedValue += ' (' + numericValue.substring(1, 4);
      }
      if (numericValue.length > 4) {
        formattedValue += ') ' + numericValue.substring(4, 7);
      }
      if (numericValue.length > 7) {
        formattedValue += '-' + numericValue.substring(7, 11);
      }
  
      setPhoneNumber(formattedValue);
      return formattedValue;
    };
  
  //Handlers
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setValue(name, "value", formatPhoneNumber(event.target.value));
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.setValue(name, "value", (event.currentTarget as HTMLInputElement).value);
  };

  return ( 
      <div className={ props.length === "full" ? "Input InputFull" : "Input"}>
          <div className="aboveBorder">
              <label style={ error ? { color: "red" } : { color: "black" } } htmlFor={name}>{name}</label>
              <p className={error ? "error errorActive" : "error"}>{error}</p>
          </div>
          {
              props.inputData.name === "phone" ?
                  <input className={ !error ? "input" : "input inputError" } name={name} id={name} type="text" value={ phoneNumber } onChange={(e) => handlePhoneChange(e)} placeholder={placeholder} />
              :
                  <input className={ !error ? "input" : "input inputError" } name={name} id={name} type="text" value={ value } onChange={(e) => handleChange(e) } placeholder={placeholder} />
          }
          
      </div>
  );
}
 
export default Input;