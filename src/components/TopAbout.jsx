import aboutImg from '../images/BroPic.jpg';
import Title from './Title';
import React from 'react'


export const TopAbout = () => {
  
  return (
         
     <section className="sectionTop" id="about">
     
     <Title title='about' subTitle='us' />
      <div className="section-center about-center">
   

        <article className="about-info">
          <h4>GYMRATZ BASKETBALL</h4>
          <p>
           Founded in 2020 as a private training organization and expanded in 2022 to a youth basketball program and physical fitness training.
           GymRatz program is a Miami Florida based program, that embodies the <strong>"Win, Teamwork, and self-confidence mindset"</strong>, by 
           encouraging students to have an inner drive to push and improve their performance daily. The program encourages students to a love for sports,
           inclusive participation, and great sportsmanship. We also dedicate to teaching athletes skills that will serve them on and off the court. As well
           as guide them through important lessons about teamwork, discipline, and overcoming adversities.  Through sportsmanship, respect for each other, and
           leadership, we strive to create an environment that will allow all of our athletes to reach their full potential.
          </p>
          <p>
            At GymRatz program we understand that growth as a player takes time and patience, and thats why we are so detail oriented in what we do.  There is a 
            strong emphasis on fundamentals and skill development through providing quality instruction in all aspects of basketball.  Regardless of goals, skill level,
            size, there is a place for every child to be apart of GymRatz program.

          </p>
          <a href="#about" className="btn">read more</a>
        </article>
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach" />
        </div>
      </div>
    </section>
  );
};

export default TopAbout;