import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
export function fetchRedditData() {
    // when using async actions and thunk, instead of returning the action object,
    // we return a callback function. This has a `dispatch` parameter that we
    // can use to dispatch other actions whenever we want.
    return function(dispatch) {
        dispatch(requestRedditData());
        $.get("https://www.reddit.com/r/aww.json", function(data) {
            // Here is where we dig into the response JSON to find the data we actually need.
            const posts = data.data.children.slice(1);
            console.log(posts);
            dispatch(receiveRedditData(posts));
        });
    }
}

// Allow the reducer to update the state when the request starts loading.
function requestRedditData() {
    return {
        type: "REQUEST"
    }
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receiveRedditData(data) {
    return {
        type: "RECEIVE",
        data
    }
}
