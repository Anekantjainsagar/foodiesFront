import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="mainPage">
        <h1>Find the good <span style={{fontSize:"3rem",color:"red"}}>life</span> by good <span style={{fontSize:"3rem",color:"blue"}}>food</span>  with <span style={{fontSize:"3rem",color:"yellow"}}>Foodies</span></h1>
        <Link to='/explore' className='exploreNow'>Explore Now</Link>
      </div>
    </>
  )
}

export default Home