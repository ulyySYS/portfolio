import React from 'react';
import data from "../ProjectData"

const Bookstore = () => {
  return (
    <div className='project-content'>
      <img src={data[1].img} alt="project website pic" />
      <div className='code-tags'>
          {data[1].codeTags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <p>This website represents a bookstore, where you can browse for different genres of books, read the synopsis, and have the option to purchase any of the books on Amazon. This website was built using react and express, where express takes the data from the local JSON database and serves it to the client.
    <br/>
      I got the book's data from a different API and typed it on my JSON database
<br/><br/>
I built this website after learning node.js and then express. Because I wanted to see what I could do with express, and at first, I realized I didn’t even know how to connect the backend to the frontend. So I learned about using proxy, and from there I figured out the rest through reading docs and googling.
<br/><br/>
Learning and using express didn’t pose much of a difficulty for me. I’d say the hardest part of making this project was deploying it to Heroku. To say that I struggled with the deployment is an understatement. I went through countless website tutorials and articles teaching me how to deploy express with react on Heroku. But none of them seemed to work, I didn’t know why, so I tried looking up why. I googled every error in the console to try to pinpoint what the problem is and from all the answers I’ve gathered there was not one that told me where the problem is, and considering how different each answer in each question was I figured that at this point the problem could literally be anything. This was so frustrating; I’ve been searching for such a long time that I started thinking maybe I just couldn’t do it, and it sucks when you go this far only to fail in deployment, the last step. But I’m grateful I didn’t give up because eventually I found a tutorial on YouTube that worked, and finally I could see the website I built deployed on the web.
</p>
      <div className='btn-container'>
          <a href="https://bookstore-react-express.herokuapp.com/"
          target="_blank" 
          rel="noreferrer"><button>View Live</button></a>
          <a href="https://github.com/ulyySYS/bookstore"
          target="_blank" 
          rel="noreferrer"><button>Source Code</button></a>
      </div>
    </div> 
  )
}

export default Bookstore