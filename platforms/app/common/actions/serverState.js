import fetch from 'isomorphic-fetch';

export const SERVER_STATE_REQUEST = 'SERVER_STATE_REQUEST';
export const SERVER_STATE_SUCCEED = 'SERVER_STATE_SUCCEED';
export const SERVER_STATE_FAILED = 'SERVER_STATE_FAILED';

const fetchStateUrl = __SERVER__
    ? `http://localhost:${require('../../../common/config').port}/api/server`
    : '/api/server';

export function serverStateRequest () {
    return {
        type: SERVER_STATE_REQUEST
    }
}

export function serverStateSucceed (data) {
    return {
        type: SERVER_STATE_SUCCEED,
        data: data
    }
}

export function serverStateFailed (error) {
    return {
        type: SERVER_STATE_FAILED,
        error
    }
}   

export function fetchServerStateIfNeeded (state) {
    return (dispatch) => {
        return dispatch(fetchServerState())
    }
}

function fetchServerState () {
    return dispatch => {
        dispatch(serverStateRequest());
        return fetch(fetchStateUrl)
            .then(res => res.json())
            .then(data => {
                dispatch(serverStateSucceed(data))
            })
            .catch(e => dispatch(serverStateFailed(e)))
    }
}