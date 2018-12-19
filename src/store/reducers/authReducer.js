
const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER_SUCCESS':
            return state;
        case 'CREATE_USER_ERROR':
            return state;
        case 'GET_USER_SUCCESS':
            return state;
        case 'GET_USER_ERROR':
            return state;
        default:
            return state;
    }
};

export default authReducer;