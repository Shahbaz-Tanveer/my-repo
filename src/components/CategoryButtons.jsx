import React from 'react'
import categories from '../data/CategoryData.json'
export default function CategoryButtons({selectionCat,selectedCatId}) {
  return (
    <div className='categories'>
      
       {categories.map(c=> <button type="button"
        className={`m-1 ${c.id===selectedCatId? 'btn btn-primary':'btn btn-warning'}`}
         key={c.id} onClick={()=>selectionCat(c.id)}>{c.title}</button>)
}

    </div>
  )
}

