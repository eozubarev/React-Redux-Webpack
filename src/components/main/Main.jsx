import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';
import './main.less'
import { setIsCurrentPage } from '../../reducers/ReposReducer';
import { createPages } from '../../utils/pagesCreator';

const Main = () => {

    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)

    const [searchValue, setSearchValue] = useState("")
    const pagesCount = Math.ceil(totalCount/perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(()=>{
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    function searchHandler() {
        dispatch(setIsCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }


  return (
    <div className='container'>
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

                  <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => dispatch(setIsCurrentPage(page))}>{page}</span>)}
            </div>
    </div>
  )
}

export default Main