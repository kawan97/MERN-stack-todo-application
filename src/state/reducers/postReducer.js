
const initialState = [];

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload
         case "fetch":
         return action.payload
        default:
            return state
    }
}

export default reducer;