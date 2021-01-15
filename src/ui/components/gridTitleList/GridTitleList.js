import React from 'react';

import './GridTitleList.scss'

const GridTitleList = ({
  titles = [],
  children,
  items = 3
}) => {
  return (
    <>
      <div className="grid">
        <div className={
          items === 3 ? "titles" : 
          items === 4 ? "titles four" : 
          items === 5 ? "titles five" : "titles six"
        }>
          { titles.map(title => <p className="title-item">{title}</p>) }
          {/* <p>{items}</p> */}
        </div>
        { children }
      </div>
    </>
  )
}

export default GridTitleList;