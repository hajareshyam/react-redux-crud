import axios from "axios";

export const getUsers = () => {
    return (dispatch, getState) => {
        // make async call to database
        axios.get(`https://hoarding.herokuapp.com/api/users`)
            .then((response) => {
                dispatch({type:"GET_USER_SUCCESS",response})
            })
            .catch((error) => {
                dispatch({type:"GET_USER_ERROR",error})

            });
    }
};

export const createUser = (user) => {
    return (dispatch,getState) => {
        // make async call to database
        axios.post(`https://hoarding.herokuapp.com/api/users`, user)
            .then(() => {
                dispatch({type:"CREATE_USER_SUCCESS",user:user})
            })
            .catch((error) => {
                dispatch({type:"CREATE_USER_ERROR",error})

        });
    }
}