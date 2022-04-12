import React from 'react'
import './repo.less'

const Repo = (props) => {

    const repo = props.repo

  return (
    <div className="repo">
        <div className="repo-header">
            <div className="repo-header-name"><span>Название:</span> {repo.name}</div>
            <div className="repo-header-stars"><span>Кол-во звёзд:</span> {repo.stargazers_count}</div>
        </div>
        <div className="repo-header-commit"><span>Последний коммит:</span> {repo.updated_at}</div>
        <a href={repo.html_url} className="repo-link">Ссылка на репозиторий</a>
    </div>
  )
}

export default Repo