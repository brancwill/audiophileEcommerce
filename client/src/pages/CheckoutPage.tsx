//Package Imports
import { useState, useEffect } from "react";

//Context Imports
import { useCartContext } from "../context/CartContext";

//Component Imports
import CheckoutModal from "../components/CheckoutModal";
import Input from "../components/Input";
import Radio from "../components/Radio";

//Utility Imports
import { calculateTotal, toPriceFormat } from "../utility/Functions";
import CartItemComponent from "../components/CartItemComponent";
import { FormValues, InputInformation, Pricing, emptyFormValues } from "../utility/customTypes/CheckoutTypes";

//Component
const CheckoutPage = () => {

    //React Hooks ---------

    //Context
    const { items } = useCartContext();
    
    //State
    const [ activeRadio, setActiveRadio ] = useState<string>("1");
    const [ cashOnDelivery, setCashOnDelivery ] = useState<boolean>(false);
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    //Input data info.
    const RegEx = {
        name: /^[a-z ,.'-]+$/i,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/,
        address: /^(?=.*\d)[A-Za-z\d\s,'-./#&]+$/,
        area: /^[a-zA-Z\s]+$/,
        zip: /^\d{5}(?:[-\s]\d{4})?$/,
        card: /\d{9}/,
        pin: /\d{4}/
    } 
    const [ inputData, setInputData ] = useState<InputInformation[]>([
        {
            name: "name",
            value: "",
            error: "",
            pattern: RegEx.name,
            placeholder: "Alexei Ward"
        },
        {
            name: "email",
            value: "",
            error: "",
            pattern: RegEx.email,
            placeholder: "alexei@mail.com"
        },
        {
            name: "phone",
            value: "",
            error: "",
            pattern: RegEx.phone,
            placeholder: "+1 202-555-0136"
        },
        {
            name: "address",
            value: "",
            error: "",
            pattern: RegEx.address,
            placeholder: "1137 Williams Avenue"
        },
        {
            name: "zip",
            value: "",
            error: "",
            pattern: RegEx.zip,
            placeholder: "10001"
        },
        {
            name: "city",
            value: "",
            error: "",
            pattern: RegEx.area,
            placeholder: "Chicago"
        },
        {
            name: "state/Province",
            value: "",
            error: "",
            pattern: RegEx.area,
            placeholder: "Illinois"
        },
        {
            name: "country",
            value: "",
            error: "",
            pattern: RegEx.area,
            placeholder: "United States"
        },
        {
            name: "e-Money Number",
            value: "",
            error: "",
            pattern: RegEx.card,
            placeholder: "238521993"
        },
        {
            name: "e-Money Pin",
            value: "",
            error: "",
            pattern: RegEx.pin,
            placeholder: "6891"
        },
    ]);
    const [ formData, setFormData ] = useState<FormValues>(emptyFormValues)

    //useEffect
    useEffect(() => {
        setFormData({
            name: inputData[0].value,
            email: inputData[1].value,
            phone: inputData[2].value,
            address: inputData[3].value,
            zip: inputData[4].value,
            city: inputData[5].value,
            "state/Province": inputData[6].value,
            country: inputData[7].value,
            cashOnDelivery: cashOnDelivery,
            eMoneyNumber: inputData[8].value,
            eMoneyPin: inputData[9].value,
        })
    }, [inputData])

    //Variables
    const prices: Pricing = {
        total: calculateTotal(items),
        shipping: 50,
        VAT: calculateTotal(items) * 0.2
    }
    const grandTotal: number = prices.total + prices.shipping + prices.VAT; 

    //Functions ----------------

    //Form Validation
    const updateInputData = (name: string, key: string, newValue: string) => {
        //Sets value for matching key of given input.
        setInputData(prevData =>
            prevData.map(input =>
              input.name === name ? { ...input, [key as keyof InputInformation]: newValue } : input
            )
          );
    }
    const checkIfEmpty: Function = ( name: string, value: string ): boolean => {
        //Removes error if present.
        updateInputData( name, "error", "" );

        //If input isn't empty, returns true.
        if ( value ) {
            return true;
        } else {
        //If not, sets error and returns false.
            updateInputData( name, "error", "Can't be empty" );
            return false;
        }
    }
    const checkIfValid: Function = ( name: string, value: string, pattern: RegExp ): boolean => {
        //Removes error if present.
        updateInputData( name, "error", "");

        //If input follows correct format, returns true.
        if ( pattern.test(value) ) {
            return true;
        } else {
        //If not, sets error and returns false.
            updateInputData( name, "error", "Wrong format");
            return false;
        }
    }
    const checkIfAllAreValid = ( variation: number ): boolean => {
        let isError = false;

        //Checks all inputs for valid values.
        for ( let i = 0; i < (inputData.length - variation); i++ ) {

            const input = inputData[i]
            const notEmpty = checkIfEmpty( input.name, input.value)
            const notValid = checkIfValid( input.name, input.value, input.pattern )

            if ( !notEmpty || !notValid ) {
                isError = true;
            }
        }
        //If any fail the check, returns false. If not, returns true.
        if ( !isError ) {
            return true; 
        } else {
            return false;
        }
    }
    const runValidationCheck: Function = (): boolean => {
        //If "Cash on Delivery" option is selected,
        //removes related inputs from validation check.
        if ( !cashOnDelivery ) {
            return checkIfAllAreValid(0);
        } else {
            return checkIfAllAreValid(2);
        }
        
    }
    
    //Handlers
    const handleRadio: Function = ( index: string, ): void => {
        //Sets whether or not "e-Money" inputs appear,
        //and changes "cashOnDelivery" value accordingly.
        if (index === "1") {
            setActiveRadio("1");
            setCashOnDelivery(false);
        } else if (index === "2") {
            setActiveRadio("2");
            setCashOnDelivery(true);
        }
    }
    const handleSubmit: Function = (): void => {
        // Checks if information in inputs is valid.
        if ( !runValidationCheck() ) {
            //If not, exits function.
           return 
        } else {
            //If so, opens success window, and passes
            //form data to console.
            setIsOpen(!isOpen);
            console.log(formData);
        }
    }

    return (
        <>
        <CheckoutModal isOpen={isOpen} setIsOpen={setIsOpen} grandTotal={grandTotal}/>
        <div className="CheckoutPage">
            <p className="backButton">Go Back</p>
            <div className="checkoutContent">
                <div className="form">
                    <h3>Checkout</h3>
                    <div className="section">
                        <h6 className="sectionTitle SubTitle">Billing Details</h6>
                        <div className="inputs">
                            <Input inputData={inputData[0]} setValue={updateInputData} />
                            <Input inputData={inputData[1]} setValue={updateInputData} />
                            <Input inputData={inputData[2]} setValue={updateInputData} />
                        </div>
                    </div>
                    <div className="section">
                        <h6 className="sectionTitle SubTitle">Shipping Info</h6>
                        <div className="inputs">
                            <Input inputData={inputData[3]} setValue={updateInputData} length="full" />
                            <Input inputData={inputData[4]} setValue={updateInputData} />
                            <Input inputData={inputData[5]} setValue={updateInputData} />
                            <Input inputData={inputData[6]} setValue={updateInputData} />
                            <Input inputData={inputData[7]} setValue={updateInputData} />
                        </div>
                    </div>
                    <div className="section">
                        <h6 className="sectionTitle SubTitle">Payment Details</h6>
                        <div className="inputs inputsEnd">
                            <div className="paymentMethod">
                                    <p className="label">Payment Method</p>
                                    <div className="radios">
                                        <Radio active={activeRadio} 
                                               handleRadio={handleRadio} 
                                               index="1" 
                                               text="e-Money" 
                                        />
                                        <Radio active={activeRadio} 
                                               handleRadio={handleRadio} 
                                               index="2" 
                                               text="Cash on Delivery" 
                                        />
                                    </div>
                            </div>
                                {
                                    activeRadio === "1" ?
                                        <div className="paymentMethodInputs">
                                            <Input inputData={inputData[8]} setValue={updateInputData} />
                                            <Input inputData={inputData[9]} setValue={updateInputData} />
                                        </div>
                                    :
                                        <div className="cashOnDelivery">
                                            <img src="/assets/checkout/icon-cash-on-delivery.svg" alt="" />
                                            <p>The ‘Cash on Delivery’ option enables you to pay in cash 
                                                when our delivery courier arrives at your residence. 
                                                Just make sure your address is correct so that your order 
                                                will not be cancelled.
                                            </p>
                                        </div>
                                }
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <div className="summaryContainer">
                        <h6>Summary</h6>
                            <div className="checkoutItems">
                                {
                                    items.map((item, index) => {
                                        return <CartItemComponent cartItem={item} 
                                                                  index={index} 
                                                                  type="Checkout" 
                                                                  key={index} 
                                                />
                                    })
                                }
                            </div>
                            <div className="summaryInfo">
                                <div className="preCalculation">
                                    <div className="infoItem">
                                        <p className="valueTitle">Total</p>
                                        <p className="valueAmount">{ toPriceFormat( prices.total ) }</p>
                                    </div>
                                    <div className="infoItem">
                                        <p className="valueTitle">Shipping</p>
                                        <p className="valueAmount">{ toPriceFormat( prices.shipping ) }</p>
                                    </div>
                                    <div className="infoItem">
                                        <p className="valueTitle">VAT (Included)</p>
                                        <p className="valueAmount">{ toPriceFormat( prices.VAT ) }</p>
                                    </div>
                                </div>
                                <div className="infoItem">
                                        <p className="valueTitle">Grand Total</p>
                                        <p className="total">{ toPriceFormat(grandTotal) }</p>
                                    </div>
                            </div>
                            <button onClick={() => handleSubmit()} className="button1">Purchase</button>
                        </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CheckoutPage;