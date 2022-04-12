const SET_COUNT = "SET_COUNT"

const defaultState = {
    // Будем получать сюда репозитории с Github
    items: [],
    // Будет true, если будут приходить данные
    isFetching: true,
    count: 0
}

export default function reposReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_COUNT:
                return {
                    ...state,
                    count: action.payload
                }
            break;
    
        default:
            return state
    }
}

export const setCount = (count) => ({type: SET_COUNT, payload: count})