import React from 'react'

export default function KfcCard({item, addtoCart}) {
  return (

    <div className="col cardplace">  
    <div className="card" style={{width: "18rem"}}>
  <img src={item.image} className="card-img-top" alt="kfc card" />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <hr/>
    <p className="card-text textclass">{item.description}. 
    </p>
    <p className="badge text-bg-primary">  Rs.{item.price}</p>
   
    <button  className="btn btn-primary contain" onClick={()=>addtoCart(item)}>add to cart</button>
   
  </div>
</div>
</div>
  )
}
