import React from 'react'
import KfcCard from './kfcCard'
//import { items } from '../data/ProductData'

export default function Products({ addtoCart,items}) {
  return (
    <div   className="row row-cols-1 row-cols-md-4 g-4"  >
     
   {
   items.map(item=> < KfcCard key={item.Id} item={item} addtoCart={addtoCart}/>)
   }
   </div>

  )
}
