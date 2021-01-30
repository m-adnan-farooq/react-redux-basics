import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE, UPDATE_USER } from "./actions"

const initialState = {
    counter: 0,
    user: {
        name: "Adnan"
    }    
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case INCREMENT:{
            return{
                ...state, counter: state.counter+1
            }
        }
        case DECREMENT:{
            return {
            ...state, counter: state.counter-1
        }
        }
        case INCREMENT_BY_VALUE:{
            return {
                ...state, counter: state.counter + action.data
            }
        }
        case UPDATE_USER:{
            return {
                ...state, user:{...state.user, name: action.data}
            }
        }
        default : {
            return state
        }
    }
}