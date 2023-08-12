import aboutImg from '../images/BroPic.jpg';
import Title from './Title';
import React from 'react'

const Contact = () => {
  return (
    
         
     <section className="sectionTop" id="about">
     
     <Title title='Contact' subTitle='us' />
     <div className="section-center contact-center">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please feel free to get in touch with us.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />

        <button type="submit">Submit</button>
      </form>
    </div>
    </section>
  );
}
export default Contact