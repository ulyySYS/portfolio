import React from 'react';
import Projects from './Projects';

//icons
import linkedin7 from "../pics/linkedin7.png"
import gmail2 from "../pics/gmail2.png"
import github4 from "../pics/github4.png"

const Home = () => {

  return (
    <div id="home-container">
        <div id="introduction">
            <h1>HI! I am Ulysses Audan</h1>
            <h3>
             I'm a 17-year-old self-taught programmer with skills in web development, mainly React and JavaScript, as well as basic knowledge on Node and Express.
            </h3>
        </div>
        <div id="projects">
            <h1 id='projects-heading'>Check Out What I've Built</h1>
            <Projects />
        </div>
        
        <div id='contacts-container'>
            <div id="contacts">
                <h1>GET IN TOUCH</h1>
                <div className='cards'>
                    <a href="https://www.linkedin.com/in/ulysses-audan-641a1a246/" className='card'>
                        <img src={linkedin7} alt="linkedin pic"/>
                        <h2>
                            Want to talk about Web Development Programming? Let's make a connection!
                        </h2>
                    </a>
                    <div className='card email'>
                        <img src={gmail2} alt="gmail pic"/>
                        <h2>Send me an Email!</h2>
                        <h3>audanulysses320@gmail.com</h3>
                    </div>
                    <a href="https://github.com/ulyySYS" className='card'>
                        <img src={github4} alt="github pic"/>
                        <h2>Check out my coding projects here!</h2>
                    </a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home