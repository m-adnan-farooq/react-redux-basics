
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
export const UPDATE_USER = "UPDATE_USER";

export const increment = ()=>{
    return {type: INCREMENT}
};

export const decrement = ()=>{
    return {type: DECREMENT}
};

export const incrementByValue = (value)=>{
    return {type: INCREMENT_BY_VALUE, data: Number(value)}
}

export const updateUser = (userName)=>{
    return {type: UPDATE_USER, data: userName}
}