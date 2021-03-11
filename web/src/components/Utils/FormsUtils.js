export function getErrors(fieldName, errors) {
    console.log(errors[fieldName]);
    if (errors[fieldName] !== undefined) {
        return {
            error: true,
            helperText: errors[fieldName]
        };
    }
}

export function notEmpty(value){
    return value !== "";
}

export function notEmptyArray(value){
    return value.length > 0;
}

export function isValidEmail(value){
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
}