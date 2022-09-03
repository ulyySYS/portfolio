import React from 'react';
import {Link} from "react-router-dom";

// Remember that the div is inside the Link tag
const Project = ({data}) => {
  return (
    <Link to={`/${data.urlName}`} >
      <div className='project'>
        <div className="div-1">
          <img src={window.innerWidth > 471 ? data.img : data.imgMobile} alt="project website pic" />
        </div>       
        <div className="div-2">
            <h1>{data.name}</h1>
            <p>{data.basicInfo}</p>
        </div>
      </div>      
    </Link>
  )
}

export default Project