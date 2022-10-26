import React from 'react'
import img from '../ezgif.com-gif-maker.gif'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="tagline">
                <h1>Healthy Fast Food with </h1>
                <img src={img} alt="" />
            </div>
            <p style={{display:"flex",justifyContent:"center"}}>© 2022 All Rights Reserved</p>
        </div>
    </>
  )
}

export default Footer