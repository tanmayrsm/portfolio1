import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from '../data';
import { ReactComponent as WorkIcon } from '../../assets/img/workIcon.svg';
import { ReactComponent as SchoolIcon } from '../../assets/img/schoolIcon.svg';
import location from '../../assets/img/location.svg';

import './Experience.css'

function Experience() {
    let workIconStyle = {background : '#06D6A0'};
    let schoolIconStyle = {background : '#f9c74f'};

    return (
        <div className='mainDiv'>
            {/* <span className="text-xl">Experience</span> */}
            <h2 className='flex justify-center items-center mb-5 pt-3'>Experience</h2>
                  
            <VerticalTimeline>
                {timelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
                let desc = element.description;
                return (
                    <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">
                        {element.title}
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle text-gray-500'>
                        {element.subTitle}
                    </h4>
                    <h5 className="vertical-timeline-element-subtitle">
                    <span className='flex text-sm my-2'>
                        <img src={location} className='max-h-4 max-w-[1rem] mx-1'></img>{element.location}
                    </span>
                    </h5>
                    <div className='description' id="description"dangerouslySetInnerHTML={{__html: desc}}></div>
                    {element.techStack ?
                    <div className="mt-1 flex justify-center items-center bg-white py-1">
                        {element.techStack.map(item => <img src={item} className="max-h-6 max-w-[1.5rem] mx-1 object-contain"></img>) }
                    </div>
                    : null}
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Experience;