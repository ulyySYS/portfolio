import React from 'react';
import Project from './Project';
import Data from './ProjectData';

const Projects = () => {
  return (
    <div id="projects-container">
        {Data.map(data => <Project key={data.id} data={data} />)}
    </div>
  )
}

export default Projects