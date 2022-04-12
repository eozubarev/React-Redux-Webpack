import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';
import './main.less'

const Main = () => {

  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)

  useEffect(() => {
    dispatch(getRepos())
  }, []);

  return (
    <div>
      {repos.map((repo, index) => 
        <Repo key={index.toString()} repo={repo}/>
      )}
    </div>
  )
}

export default Main