import React from 'react';
import {products_details } from "../Product_db.js";
import "../components.css"
import { PiShoppingCartBold,} from 'react-icons/pi';

function Prouductslist() {
    const product_list_db =products_details
  return (
    <>
    <div className='productlist_container'>
   { product_list_db.map((e)=>{
        return(
            <div className='product_box' key={e.id}>
                <img alt={e.productName} src={e.image}   />
                <div className='Product_content'>
                <h3>{e.productName}</h3>
                <h4>₹ <span>{e.price} </span></h4>
                <button><PiShoppingCartBold /> Add To Cart   </button>
                </div>
            </div>
        )
    })
}
</div>
    </>
  )
}

export default Prouductslist