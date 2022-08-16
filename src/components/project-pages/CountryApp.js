import React from 'react';
import data from "../ProjectData"

const CountryApp = () => {
  return (
    <div className='project-content'>
      <img src={data[2].img} alt="project website pic" />
      <div className='code-tags'>
          {data[2].codeTags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <p>This app provides you information on the country you search. The app gives you the country’s demonyms, its capital, where its located, its population, and the currency that the country uses.
<br/><br/>
I made this app because I wanted to continue practicing fetching data from API. But not even halfway through the project, I realized that what I really wanted to do was learn node.js, but not wanting to not finish what I started, I did the project first before finally hopping to node.
</p>
      <div className='btn-container'>
          <a href="#"><button>View Live</button></a>
          <a href="#"><button>Source Code</button></a>
      </div>
    </div>  
  )
}

export default CountryApp