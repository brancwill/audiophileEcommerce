export const RegEx = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/,
    address: /^(?=.*\d)[A-Za-z\d\s,'-./#&]+$/,
    area: /^[a-zA-Z\s]+$/,
    zip: /^\d{5}(?:[-\s]\d{4})?$/,
    card: /\d{9}/,
    pin: /\d{4}/
} 
