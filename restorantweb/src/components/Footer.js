import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LikedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>

      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
       <InstagramIcon />  
      </a>


      <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
       <TwitterIcon /> 
       </a>


       <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
       <FacebookIcon /> 
       </a>


       <a href="https://al.linkedin.com/" target="_blank" rel="noopener noreferrer">
       <LikedInIcon />
      </a>


      </div>
    </div>
  )
}

export default Footer
