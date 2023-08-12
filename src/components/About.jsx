import aboutImg from '../images/BroPic.jpg';
import Title from './Title';
import TopAbout from './TopAbout';
import React from 'react'


export const About = () => {
  
  return (
  
    <>   <div>
    <TopAbout />
    </div> <section className="sectionBottom" id="about">
      <Title title='Charles Del Rosario ' subTitle='- FOUNDER' />
      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach" />
        </div>

        <article className="about-info">
          
          <p>
            Charles Del Rosario has coaching and skills training experience at the youth, pro athlete, and college level.  Growing up in New York City, Charles attended and played basketball for NewTown High School in Queens New York.
            During his career, Charles dedicated himself to play streetball and become one of the best street ball players in the city.
          </p>
          <p>
            After several years of playing basketball, Charles fell in love with training and working with players over the years.  Charles applies his confidence, passion, and skills of the game to help others achieve their goals
            in the sport.  His goal is to serve as a positive role model to the children in the community by motivating kids from all walks of life.

          </p>
          <a href="/services" className="btn">read more</a>
        </article>
      </div>
    </section></>
  );
};

export default About;