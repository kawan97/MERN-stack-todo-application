import axios from "axios";

export const setAuthentication = (data) => {
    return (dispatch) => {
        dispatch({
            type: "setAuthentication",
            payload: data
        });
    }
}


export const setToken = (data) => {
    return (dispatch) => {
        localStorage.setItem('user', data);

        dispatch({
            type: "setToken",
            payload: data
        });
    }
}

export const setLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('user');
        dispatch({
            type: "setLogout"
        });
    }
}

export const getLocalStrorage = () => {
    return (dispatch) => {
        const token = localStorage.getItem('user');
        axios.get('http://localhost:3000/authcheck/' + token)
            .then(response => {
                if (response.data) {
                    dispatch({
                        type: "setToken",
                        payload: token
                    });
                    axios.get('http://localhost:3000/tokenn/' + token)
                        .then(response => {
                            if (response.data !== 'sorry! you are not login') {
                                dispatch({
                                    type: "setAuthentication",
                                    payload: { ...response.data, auth: true }
                                });


                            }
                        })

                }

            })



    }
}
