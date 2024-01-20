import React from 'react';
import Menubar from '../components/Menubar';
import "../pages.css"
import Prouductslist from '../components/Prouductslist';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

export default function Product() {
  return (
    <>
    <Menubar/>
    
        <div className='product_header'><h1>Products</h1>
        <form>
            <input type='text' placeholder='Search for products...' />
            <button><PiMagnifyingGlassBold size={24} />  </button>
        </form>
        
        </div>
        <div className='products_page'>
            <Prouductslist/>
    </div>
    
    </>
  )
}
