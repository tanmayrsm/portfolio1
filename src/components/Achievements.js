import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import t from '../assets/img/cmpy/t.png';
import shi from '../assets/img/cmpy/shi.jpg';


function Achievements() {
    const data = [
        {
            id :1,
            icon : t,
            title : 'Employee of the month',
            text : 'For seamless contribution in app performance improvement',
            timeStamp : 'Feb 2022 & Oct 2022'
        },
        {
            id :2,
            icon : t,
            title : 'Special achievment award',
            text : 'Contribution in helping stakeholders get used to with no-code fashion Presentation, client demos.',
            timeStamp : 'Jan 2022'
        },
        {
            id :3,
            icon : shi,
            title :'Runner-ups' ,
            text : 'Smart India Hackathon - Grand finale',
            timeStamp : 'Mar 2019'
        }
    ];
    return (
        <div>
            <h2 className='flex justify-center items-center mb-5 pt-3'>Achievements</h2>
            <Carousel>
                {data.map(item =>  
                    <div className='flex justify-center items-center flex-col' key={item.id}>
                            <img src={item.icon} className='max-h-[10rem] max-w-[10rem]'/>
                            <h4>{item.title}</h4>
                            <p className='mt-3'>{item.timeStamp}</p>
                            <p className='mb-8'>{item.text}</p>
                    </div>
                )}
            </Carousel>
        </div>
    )
}

export default Achievements;
