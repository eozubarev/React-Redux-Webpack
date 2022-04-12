import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../reducers/ReposReducer'
import './app.less'

const App = () => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)

    function onCountClick() {
        dispatch(setCount(5))
    }

  return (
    <div className='app'>
        <button onClick={()=>onCountClick()}>COUNT</button>
        <div>{count}</div>
    </div>
  )
}

export default App