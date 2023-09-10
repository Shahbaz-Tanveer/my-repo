import React from 'react'
import Logo from '../images/Hungry.jpg';
import {FaCartArrowDown} from 'react-icons/fa6'

export default function Navbar({cartcounter,cartitems,incre,decre,kfcbutton,totalamount}) {


  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        
  <div className="container-fluid ">
    <button style={{color:"white"}} onClick={kfcbutton}  className="button-87" href="#"><bold>KFC</bold></button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      

      <button className="button-87" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">view cart({cartcounter})< FaCartArrowDown className='carticon'/> </button>
     
    </div>
    
  </div>
</nav>

    {/* -------------this is offcanvas code------------------ */}

<div className="offcanvas offcanvas-end canvas" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel" style={{color:"white"}}>KFC Cart</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    {
    
  cartitems.length? (  
     cartitems.map((c)=>{
     
       return(
       <div className='cartcard'> 
      
       <img  src={c.image} style={{width: "20%"}} alt="kfc card" />
       <p>  <big style={{color: "white" }}> {c.title} </big>  </p>
      <p style={{color: "white"}}>Rs.{c.price}  </p>
      <i className="fa-solid fa-cart-circle-plus"></i>
        <button onClick={()=>incre(c)} className='btn btn-warning'>+</button> <span style={{color: "white"}}> {c.quantity} </span><button onClick={()=>decre(c)} className='btn btn-warning'>-</button> 
        <hr/>
        </div>)
      
      }
      ))
      
   
  
  :( <img width={"100%"}src={Logo} alt='img'/>)
   
    }
 <div  className='meni'>
   {/* <p style={{color: "white"}}> TotalAmount: {totalamount}</p> */}
   
   <div class="ribbon">
   TotalAmount: {totalamount}
  <i></i>
  <i></i>
  <i></i>
  <i></i>
</div>


<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'/> 



   <div class="checkbox-wrapper-40"> 
  <label>
    <input disabled={cartcounter===0}   type="checkbox"/>
    <span style={{color: "white"}} class="checkbox"> <big> confirm order </big></span>
  </label>
</div>
</div>
  </div>

 
</div>
 </div>
    
  );
}
