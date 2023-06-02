import React, { useState } from "react";
import Footer from "./components/Footer";
import Card from "./components/Cards";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import data from "./data/data.json";

const App=()=>{
  //counter state variable
  const [itemCount,setItemCount]=useState(0);

   //Managing the items in the cart
   const manageItems=(event)=>{
    if(event.target.innerText==="Add to cart"){
      addItem(event);
    }else if(event.target.innerText=="Remove from cart")
     removeItem(event)
   }

   //Add item function to increment item by-1 inside cart 

   const addItem=(event)=>{
       setItemCount(()=>itemCount+1);
       event.target.innerText="Remove from cart"
       event.target.classList.value="btn btn-danger mt-auto";

   }

   //Remove  item function to decrement item by-1 from  cart 

   const removeItem=(event)=>{
      setItemCount(()=>itemCount-1);
      event.target.innerText="Add to cart";
      event.target.classList.value="btn btn-primary mt-auto";
   }

  return(
    <>
    <Navbar itemCount={itemCount} />
    <Header />
    <Card data={data} manageItems={manageItems} />
    <Footer/>
    </>
   
  )
}


export default App;