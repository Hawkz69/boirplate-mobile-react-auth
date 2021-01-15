import React, { useState, useEffect } from 'react';

import { TextField } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/search';

import './SearchInput.scss'

const SearchInput = ({
  onChange,
  hintText,
  onSearch
}) => {
  return (
    <>
      <div className="search-input-container">
        <TextField
          autocomplete="off"
          autoComplete="off"
          name="search"
          hintText={hintText}
          floatingLabelText="Pesquisar"
          type="text"
          style={{
            width: '100%',
          }}
          onChange={onChange}
        />
        <div Style="margin-left: -30px; margin-top: 20px"><IconButton tooltip="Buscar" onClick={onSearch}>
          <ActionHome />
        </IconButton></div>
        
      </div>
    </>
  )
}

export default SearchInput;