import React from 'react';
import data from "../ProjectData"

const CountryApp = () => {
  return (
    <div className='project-content'>
      <img src={data[3].img} alt="project website pic" />
      <div className='code-tags'>
          {data[2].codeTags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <p>This app provides you information on the country you search. The app gives you the country’s demonym, its capital, where it's located, its population, and the currency that the country uses.
<br/><br/>
I made this app because I wanted to continue practicing fetching data from the API. But not even halfway through the project, I realized that what I really wanted to do was learn node.js, but not wanting to not finish what I started, I did the project first before finally jumping to node.
</p>
      <div className='btn-container'>
          <a href="https://ulyysys.github.io/country-app/" 
             target="_blank" 
             rel="noreferrer"><button>View Live</button></a>
          <a href="https://github.com/ulyySYS/country-app"
             target="_blank" 
             rel="noreferrer"><button>Source Code</button></a>
      </div>
    </div>  
  )
}

export default CountryApp