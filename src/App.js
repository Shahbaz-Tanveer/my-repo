import React, { useState } from "react";
import Products from "./components/Products";
import CategoryButtons from "./components/CategoryButtons";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import items from '../src/data/Mydata.json'
import './App.css'
import Footer from "./components/Footer";
import Swal from 'sweetalert2'
///////////////////////////

function App() {

 
  let [selectedCatId,setselectedCatId]=useState(null);  
  let [MyProducts,setMyProducts]=useState(items); //for showing products on page
  let [cartitems,setcartitems]=useState([]);
  let [totalamount,settotalamount]=useState(0); // for total amount on cart items at end


  const selectionCat=(catid)=>{
setselectedCatId(catid);   // not necessary
const filterProducts=items.filter(P=>P.categoryid===catid );
setMyProducts(filterProducts);

  }
  ///////////////////

  const notify = () => Swal.fire({ // this is to show toaster
    position: 'top-end',
    icon: 'success',
    title: 'Item added to cart',
    showConfirmButton: false,
    timer: 1500
  }); // toaster function

  const kfcbutton=()=>{  //kfc button on navbar on show all items

    setMyProducts(items);
    setselectedCatId(null);

  }

  const addtoCart=(item1)=>{

    
      settotalamount(item1.price+totalamount);//add to total amount in cart
     
    const productIndex = cartitems.findIndex((item) => item.Id === item1.Id);

    if (productIndex !== -1)
     {
 notify(); 
 const updatedCart = [...cartitems];
    updatedCart[productIndex].quantity += 1;
    setcartitems(updatedCart);

    }
    else
{
  notify();  //for toaster
    setcartitems([...cartitems, { ...item1, quantity: 1}]);
   
}
   
  }
const incre=(cat)=>{ 
         // increment on cart button
         settotalamount(cat.price+totalamount); //add to total amount in cart
    const productIndex = cartitems.findIndex((item) => item.Id === cat.Id);
    const updatedCart = [...cartitems];
    updatedCart[productIndex].quantity += 1;
    setcartitems(updatedCart);
}

const decre=(cat)=>{        // decrement on cart button
 
  settotalamount(totalamount-cat.price);

  const productIndex = cartitems.findIndex((item) => item.Id === cat.Id);
  let updatedCart = [...cartitems];
  if(updatedCart[productIndex].quantity>0)
  {
  updatedCart[productIndex].quantity -= 1;
  }
  if(updatedCart[productIndex].quantity===0)
  {
   updatedCart = cartitems.filter((item) => item.Id !== cat.Id);
  }
   
  setcartitems(updatedCart);

 }


  return (
  <div className="container mb-5">
    <Navbar cartcounter={cartitems.length} cartitems={cartitems}incre={incre} decre={decre} kfcbutton={kfcbutton} totalamount={totalamount}/>
    <CategoryButtons selectionCat={selectionCat} selectedCatId={selectedCatId}/>
  <Products  addtoCart={addtoCart} items={MyProducts} />
  <hr></hr>
  < Pagination/>
< Footer/>

    </div>
  );
}

export default App;
