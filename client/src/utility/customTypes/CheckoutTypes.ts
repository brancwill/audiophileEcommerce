//Interface Definitions ----------
export interface FormValues {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    "state/Province": string;
    country: string;
    cashOnDelivery: boolean;
    eMoneyNumber?: string;
    eMoneyPin?: string;
}

export interface InputInformation {
    name: string;
    value: string;
    error: string;
    pattern: RegExp;
    placeholder: string;
}

export interface Pricing {
    total: number;
    shipping: number;
    VAT: number;
}

//Empty Interfaces -----------
export const emptyFormValues: FormValues = {
    //Used for initializing form value state.
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    "state/Province": "",
    cashOnDelivery: false,
    eMoneyNumber: "",
    eMoneyPin: "",
}