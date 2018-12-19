import axios from "axios";

export const getPosts = () => {
    return (dispatch) => {

        // make async call to database
        axios.get(`https://hoarding.herokuapp.com/api/posts`)
            .then((response) => {
                dispatch({type:"GET_POSTS_SUCCESS",payload:response})
            })
            .catch((error) => {
                dispatch({type:"GET_POSTS_ERROR",error})

            });
    }
};

export const createPost = (post) => {
    return (dispatch,getState) => {
        // make async call to database
        axios.post(`https://hoarding.herokuapp.com/api/posts`, post)
            .then(() => {
                dispatch({type:"CREATE_POST_SUCCESS",payload:post})
            })
            .catch((error) => {
                dispatch({type:"CREATE_POST_ERROR",payload:error})

            });
    }
}

export const deletePost = (postId) => {
    return (dispatch) => {
        // make async call to database
        axios.delete(`https://hoarding.herokuapp.com/api/posts/${postId}`, postId)
            .then(() => {
                dispatch({type:"DELETE_POST_SUCCESS",payload:postId})
            })
            .catch((error) => {
                dispatch({type:"DELETE_POST_ERROR",payload:error})

            });
    }
}