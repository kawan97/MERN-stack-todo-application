
const initialState = {
    auth: false,
    userName: null,
    _id: null,
    token: null
};

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "setAuthentication":
            return {
                ...state,
                auth: action.payload.auth,
                userName: action.payload.userName,
                _id: action.payload._id
            };
        case "setToken":
            return { ...state, token: action.payload };
        case "setLogout":
            return initialState
        default:
            return state
    }
}

export default reducer;