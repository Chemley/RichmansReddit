const INITIAL_STATE = {
    posts: [],
    isLoading: true
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_STARSHIPS":
            return Object.assign({}, state, {
                starships: [],
                isLoading: true
            });
        case "RECEIVE":
            return Object.assign({}, state, {
                posts: action.data,
                isLoading: false
            });
        default:
            return state;
    }
}
