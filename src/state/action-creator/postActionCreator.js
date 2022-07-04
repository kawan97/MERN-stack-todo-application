import axios from "axios";
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}

export const fetch = (data) => {
    return (dispatch) => {
        axios.get('http://localhost:3000/post').then(response => {
            dispatch({
                type: "fetch",
                payload:response.data
            });
        })  

       
    }
}