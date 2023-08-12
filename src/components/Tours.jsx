import Title from './Title';
import { tours } from '../data';
import Tour from './Tour';
import React from 'react'
import Contact from './Contact';


const Tours = () => {
  return (
    <section className="section" id="tours">
      <Contact />
      <Title title='contact' subTitle='us' />
    
      <div className="section-center featured-center">
        {tours.map((tour)=> {
          
          return <Tour key={tour.id} {...tour} />
            
          
        })}
        

       
      </div>
    </section>
  )
}
export default Tours