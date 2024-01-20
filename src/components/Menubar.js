import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import "../components.css"

export default function Menubar() {
  return (
    <>
    <div className='menubar-parent' >
        {/* logo section */}
        <div className='logo'>POROMA</div>
        {/* menus */}
        <div className='menu-list' >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to='/'>Blogs</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>
           
        </div>
            {/* buttons */}
        <div className='menu-btn'>
            <Link to="/cart" ><PiShoppingCartBold  size={28}/></Link>
            <div className='menu-btn-border'>Sign In</div>
            <div className='border-btn' >Sign Up</div>
        </div>
        <Outlet />
    </div>
    </>
  )
}
