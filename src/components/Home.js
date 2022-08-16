import React from 'react';
import Projects from './Projects';

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
                    <div className='card'>
                        <img src="" alt="linkedin pic"/>
                        <h2>
                            Want to talk about Web Development Programming? Let's make a connection!
                        </h2>
                    </div>
                    <div className='card'>
                        <img src="" alt="gmail pic"/>
                        <h2>Send me an Email!</h2>
                    </div>
                    <div className='card'>
                        <img src="" alt="github pic"/>
                        <h2>Check out my coding projects here</h2>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home