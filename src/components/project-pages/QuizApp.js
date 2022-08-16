import React from 'react';
import data from "../ProjectData"

const QuizApp = () => {
  return (
    <div className='project-content'>
        <img src={data[0].img} alt="project website pic" />
        <div className='code-tags'>
            {data[0].codeTags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <p>
          This app provides you a quiz and gives you an option to make the questions yourself. The website is built on react and uses JSON to store the fifteen questions on the original quiz. When making the quiz yourself, the website gives you a chance to edit and revise your question after you’ve typed them out. After finishing the quiz, you are shown your score and you’re results, green means your answer was correct on that question and red means your answer was wrong. 
          <br/><br/>
          After a couple of months of learning React and practicing on making task trackers, I decided I wanted to make an original project, a project that isn’t just a copy of a tutorial from YouTube. I got my idea for my project from the quiz websites we would use during one of my online classes.
          <br/>
          The very first version of the quiz app was very basic, and the design was bland, it didn’t even have the option to make your own questions. This project was finished at the end of May, but when I first started, I had no idea it would take me three weeks to finish.
          <br/>
          The journey was long and difficult, there were times when I was overwhelmed with frustration, times when I doubted myself if I really had the capability to finish the project. But with all this running through my head, I kept going. Eager to succeed, I dragged myself to my laptop even if I thought wasn’t good enough, even if I thought that maybe programming just wasn’t for me, I kept going and going until I could see the light at the end of the tunnel.
          <br/>
          And though took me three weeks to finish a mediocre looking website, I’m still proud of it. Because with every step of the way and every struggle I learnt something new. I learned about how react routes works, how JSON works, fetching data, and ways to handle errors and problems. All in all, I know this website doesn’t look much, but its mine and I’m proud of it 
        </p>
        <div className='btn-container'>
            <a href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer">
                <button>View Live</button>
            </a>
            <a href="#"><button>Source Code</button></a>
        </div>
    </div>
  )
}

export default QuizApp