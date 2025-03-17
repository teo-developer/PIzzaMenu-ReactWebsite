import React from 'react'
import pizzaLeft from'../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${pizzaLeft})` }} >

        </div>

        <div className='rightSide'>
            <h1>NA KONTAKTONI</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'> Emri</label>
                <input name='name' placeholder='Fusni emrin e plote...' type='text'/>
                <label htmlFor='email'> Email</label>
                <input name='email' placeholder='Fusni emailin tuaj...' type='email'/>
                <label htmlFor='message'> Mesazhe</label>
                <textarea rows='6' placeholder='Lini nje mesazh...' name='message' required> </textarea>   
                <button type='submit'>DERGO</button>

            </form>
        </div>
      
    </div>
  )
}

export default Contact
