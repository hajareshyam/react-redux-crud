
const initState = {
    posts:[]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_POSTS_SUCCESS':
            console.log('Level 2');
            return {
                ...state,
                posts: action.payload.data
            };
        case 'GET_POSTS_ERROR':
            return state;
        case 'CREATE_POST_SUCCESS':
            return state;
        case 'CREATE_POST_ERROR':
            return state;
        case 'UPDATE_POST_SUCCESS':
           return state
        case 'UPDATE_POST_ERROR':
            return state;
        case 'DELETE_POST_SUCCESS':
            return {
                ...state,
                posts: state.posts.filter(({ id }) => id !== action.payload)
            }
        case 'DELETE_POST_ERROR':
            return state;
        default:
            return state;
    }
};

export default postReducer;