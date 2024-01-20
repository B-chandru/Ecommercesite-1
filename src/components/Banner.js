import React from 'react'
import "../components.css"

export default function Banner() {
  return (
    <>
    <div className='banner-parent'>
        {/* content */}
        <div className='banner-content'>
            <h1>Essential tips for a strong financial success</h1>
            <h4>
            The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.
            </h4>
            <div className='banner-btn'>
                <div className='b-btn'>Get Started</div>
                <div className='b-btn'>Open an Account</div>
            </div>
        </div>
        {/* image */}
        <div className='banner-image'>
             <img className='image-frame' alt="Dashboard" src='https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg?w=740&t=st=1704117615~exp=1704118215~hmac=0a76933e4b3359f190796695d17f6e92ab30502b4511700b05e2058909f2428b'></img>
        </div>
    </div>
    </>
  )
}
