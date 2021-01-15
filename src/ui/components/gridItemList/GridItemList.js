import React from 'react';

import './GridItemList.scss'

const GridItemList = ({
  actions = [],
  fields = [],
  items = 3,
  key,
}) => {
  return (
    <>
      <div 
        key={key}
        className={
        items === 3 ? "fields" : 
        items === 4 ? "fields four" : 
        items === 5 ? "fields five" : "fields six"}>
        { fields.map(field => <p>{field}</p>) }
        <div className={"actions-list"}>
          {
            actions.map((action, index) => (
              <>
                {action.disabled ? (
                  <p className="disabled">{action.label}</p>
                ) : (<p onClick={action.action}>{action.label}</p>)
                }
                {actions.length - 1 > index && <span>|</span> }
              </>
            ))
          }
        </div>
        
      </div>
      <hr className="divider"/>  
    </>
  )
}

export default GridItemList;