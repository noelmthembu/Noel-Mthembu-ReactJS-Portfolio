import React from 'react';
import "./home.css";
import Me from "../../assets/profile2.jpeg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () =>{
    return (
        <section className="home container" id="home">
          <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Noel Mthembu</h1>
            <span className="home__education">I'm a Software Developer</span>
            <HeaderSocials/>
            <a href="#contact" className="btn">Hire Me</a>
            <ScrollDown/>
          </div>
        
        </section>
    );
}
export default Home;