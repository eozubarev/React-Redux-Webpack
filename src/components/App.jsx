import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../reducers/ReposReducer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Main from './main/Main'
import './app.less'

const App = () => {

    const dispatch = useDispatch()

  return (
    <Router>
        <Routes>
            <Route path="/" element= { <Main/> } />
        </Routes>
      </Router>
  )
}

export default App