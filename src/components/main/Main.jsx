import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';
import './main.less'

const Main = () => {

  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)
  const isFetching = useSelector(state => state.repos.isFetching)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    dispatch(getRepos())
  }, []);

  function searchHandler() {
    dispatch(getRepos(searchValue))
  }

  return (
    <div>
      <div className='search'>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="search-input" />
        <button onClick={() => searchHandler()} className='search-btn'>Найти</button>
      </div>
      {
        isFetching === false
          ?
        repos.map((repo, index) => <Repo key={index.toString()} repo={repo}/>)
          :
            <div className='fetching'>

            </div>
      }
    </div>
  )
}

export default Main