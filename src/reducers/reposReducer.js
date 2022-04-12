const SET_REPOS = 'SET_REPOS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_IS_CURRENT_PAGE = 'SET_IS_CURRENT_PAGE'

const defaultState = {
    // Будем получать сюда репозитории с Github
    items: [],
    // Будет true, если будут приходить данные
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0
}

export default function reposReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.items,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_IS_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export const setRepos = (repos) => ({type:SET_REPOS, payload:repos})
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})
export const setIsCurrentPage = (bool) => ({type:SET_IS_CURRENT_PAGE, payload:bool})