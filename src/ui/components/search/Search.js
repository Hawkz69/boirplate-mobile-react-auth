import React from 'react';

import './Search.scss'

const Search = () => {
  return (
    <>
      <div className="search-event">
        <div Style="margin: 0 auto;">
          <input className="input" placeholder="Nome do evento"></input>
          <input className="input" Style="border-radius: 0px 0px 0px 0px;" placeholder="Categoria"></input>
          <button className="button">Pesquisar</button>
        </div>
      </div>
    </>
  )
}

export default Search;