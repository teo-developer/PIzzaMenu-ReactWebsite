import React from 'react'
import multiplePizza from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>

        <div className='aboutTop' style={{backgroundImage: `url(${multiplePizza})` }} >

        </div>
        <div className='aboutBottom'>
           <div className='shkrimi'>RRETH NESH</div>
            <p>"My Pizzeria u themelua në vitin 2005 nga dy miq të ngushtë, Arbeni dhe Beni, të cilët ndanin një pasion të madh për gatimin dhe përbërësit e freskët. Me një përkushtim të jashtëzakonshëm ndaj cilësisë dhe shijes, ata filluan të përgatisnin pica tradicionale italiane duke përdorur receta të vjetra familjare. Fillimisht një vend i vogël në qoshe të qytetit, My Pizzeria u bë shpejt e njohur për atmosferën e saj të ngrohtë dhe mikpritëse. Çdo pice përgatitet me dashuri dhe kujdes, duke përdorur vetëm përbërësit më të freskët dhe natyralë. Sot, My Pizzeria është një destinacion i preferuar për familjet dhe miqtë që duan të shijojnë një vakt të shijshëm së bashku. Përveç picave tradicionale, ne ofrojmë edhe një shumëllojshmëri pjatash të tjera, si sallata të freskëta dhe antipasta të shijshme. Ekipi ynë është gjithmonë i gatshëm të mirëpresë klientët tanë me buzëqeshje dhe shërbim të shkëlqyer. Ne besojmë se çdo vizitë në My Pizzeria duhet të jetë një përvojë e veçantë dhe e paharrueshme. Ju mirëpresim që të bëheni pjesë e familjes sonë dhe të shijoni pica të përgatitura me dashuri në zemër të qytetit."</p>
        </div>
      
    </div>
  )
}

export default About
