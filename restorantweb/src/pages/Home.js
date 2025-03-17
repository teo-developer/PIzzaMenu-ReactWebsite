import React from 'react'
import{Link} from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg'
import '../styles/home.css'

function Home() {
  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})` }}  >

     <div 
     className='headerContainer'>

        <h1>Bella Pizzeria</h1>
        <p >Shije e vertete italiane,cdo cope e perfeksionuar </p>
        <Link to='/menu'>
        <button>SHIKO MENUNE</button>
        </Link>
     </div>
    </div>
  )
}

export default Home
