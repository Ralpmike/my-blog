import './WorkCardStyles.css'
import WorkCard from './WorkCard';
import workCardData from './WorkCardData'

import React from 'react'


const Work = () => {
  return (
    <div className='work-container'>
      <div className='project-heading'>
        <div className='project-container'>
            {workCardData.map((val, ind) => {

              return (
                <WorkCard 
                key = {ind}
                imgsrc = {val.imgsrc}
                title = {val.title}
                text = {val.text}
                view = {val.view}
                source = {val.source}
                />
              )
            }
            )}
        </div> 

      </div>
    </div> 
  )
}

export default Work;