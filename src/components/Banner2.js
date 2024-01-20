import React from 'react'
import "../components.css"

export default function Banner2() {
  return (
    <>
    <div className='banner2-parent'>
        {/* content */}
        <div className='banner2-content'>
            <h1>Control your future financial easily</h1>
            <h4>
            The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.
            </h4>
            <div className='banner2-btn'>
                <div className='b-btn'>Get Started</div>
            </div>
        </div>
        {/* image */}
        <div className='banner2-image'>
             <img className='image-frame' alt="Dashboard" src='https://img.freepik.com/free-vector/template-user-panel-dashboard_23-2148370480.jpg?w=740&t=st=1704120215~exp=1704120815~hmac=ac82a2d61af1781f094f711a6579ec90523ea2969ff4d5441c5b9e174829a0b5'></img>
        </div>
    </div>
    </>
  )
}
