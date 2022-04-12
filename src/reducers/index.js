import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reposReducer from './ReposReducer'

// Сам по React синхронный но тк будем работать с ассинхрон. запросами, эту задачу помогает решить thunk
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    repos: reposReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))