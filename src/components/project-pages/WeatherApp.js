import React from 'react';
import data from "../ProjectData"

const WeatherApp = () => {
  return (
    <div className='project-content'>
      <img src={data[3].img} alt="project website pic" />
      <div className='code-tags'>
          {data[3].codeTags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <p>This app serves you the weather in your city through out the day for the next three days. The app makes a request on an API and displays the data.
      <br/><br/>
I made this project because I wanted to try and practice fetching data from APIs. At first, I looked for websites that provided weather data, which wasn’t hard, then I tried out a couple of APIs to find the one that best suited my needs, till I found one that was best compatible with the app I was planning on making. And from there, I started testing what I could do with the given data and figured that the API gave me the weather data for the next three days. After finishing it, I deployed it on Github where its code resides now.
</p>
      <div className='btn-container'>
          <a href="#"><button>View Live</button></a>
          <a href="#"><button>Source Code</button></a>
      </div>
    </div> 
  )
}

export default WeatherApp