import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({text, link, btnText}) => {
    return(
    <div className="sm:text-xl sm:leading-snug text-center bg-blue-300/50 rounded-xl drop-shadow-lg
    neo-brutasim-blue py-10 px-8 text-white mx-5">
        <p>{text}</p>
        <Link to={link} className = "neo-brutalism-white neo-btn ">
            {btnText}
            <img src={arrow} className = "w-4 h-4 object-contain "/>
        </Link>
    </div>
    );
}

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center  bg-blue-300/50 rounded-xl drop-shadow-lg
        neo-brutasim-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Bogdan</span> 👋
            <br/>
            A Soaftware Engineer from Bucharest
            </h1>
    ),
    2:(
        <InfoBox 
        text="Worked with many companies and picked up many skills along"
        link="/about"
        btnText="Learn More"
        />
    ),
    3:(
        <InfoBox 
            text="Led multiple projects to success over the years. Curious about the impact?"
            link="/projects"
            btnText="Visit my portofolio"
        />
    ),
    4:(
        <InfoBox 
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
