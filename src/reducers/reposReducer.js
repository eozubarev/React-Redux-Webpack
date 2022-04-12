const SET_REPOS = 'SET_REPOS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

const defaultState = {
    // Будем получать сюда репозитории с Github
    items: [],
    // Будет true, если будут приходить данные
    isFetching: true,
}

export default function reposReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}

export const setRepos = (repos) => ({type:SET_REPOS, payload:repos})
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})