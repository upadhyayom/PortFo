import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import './About.module.css';
import ama1 from'./Image/ama1.png';

const skillsData = [
  { name: 'Python', level: 'Intermediate' },
  { name: 'Artificial intelligence', level: 'Beginner' },
  { name: 'Machine Learning', level: 'Beginner' },
  { name: 'Android', level: 'Beginner' },
  { name: 'HTML', level: 'Intermediate' },
  { name: 'CSS', level: 'Intermediate' },
  { name: 'Data Structures', level: 'Beginner' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'React Native', level: 'Intermediate' },
  { name: 'ReactJS', level: 'Intermediate' },
];

const SkillBar = ({ level }) => {
  const skillLevels = {
    Beginner: '20%',
    Intermediate: '50%',
    Advanced: '80%',
  };

  const skillLevelStyle = {
    width: skillLevels[level] || '0%',
    height: '10px',
    backgroundColor: '#007bff',
    borderRadius: '2px',
    
  };

  return (
    <div >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span style={{color:'red'}}>{level}</span>
        <span>{skillLevels[level] || 'Unknown'}</span>
      </div>
      <div style={skillLevelStyle}></div>
    </div>
  );
};

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [showBuildHover, setBuildHover] = useState(false);
  const [showDesignHover, setDesignHover] = useState(false);

  const handleBuildMouseEnter = () => {
    setBuildHover(true);
  };

  const handleBuildMouseLeave = () => {
    setBuildHover(false);
  };

  const handleDesignMouseEnter = () => {
    setDesignHover(true);
  };

  const handleDesignMouseLeave = () => {
    setDesignHover(false);
  };

  return (
    <div style={{
    alignItems: 'center',
    marginTop:'3%',
  marginLeft: '20%',
  marginRight:'20%',
    height: '100%',marginBottom:'50px'
   
    }}>
      

      <div style={{ zIndex: '1', textAlign: 'center',padding:'20px'}}>
        <h1 style={{color:'white',fontSize:'8vw'}}>
          I design & build digital products
        </h1>
      </div>
      <div style={{
        position: 'fixed',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        background: '#1E1E1E',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
       
        zIndex: '1',
      }}>
        <div style={{  }}>
         
          <Link to="/" style={{ color: '#fff', fontSize: '1.8vw', textDecoration: 'none', marginBottom: '1rem', display: 'block' }}>
            Home
          </Link>
          <Link to="/work" style={{ color: '#fff', fontSize: '1.8vw', textDecoration: 'none', marginBottom: '1rem', display: 'block' }}>
            My Work          </Link>
          <Link to="/contact" style={{ color: '#fff', fontSize: '1.8vw', textDecoration: 'none', marginBottom: '1rem', display: 'block' }}>
            Contact
          </Link>
        </div></div>
      
      <div style={{ position: 'fixed', top: '10px', left: '10px' }}>
        <a
          href="https://drive.google.com/file/d/17eBwFeH2Isbe8YVUXGwRxLmNGQjpjUNU/view?usp=sharing"
          target="_blank"
          style={{
            color: 'Red',
            textDecoration: 'none',
            fontSize: '2vw',
            cursor: 'pointer',
          }}
        >
          Download CV
        </a>
      </div>
      <div style={{ width: '50vw',marginTop:'10%' ,}}>

        <h3 style={{ color: 'white',  fontSize: '4vw' }}>About Me</h3>
        <p style={{color:'white',fontSize:'2vw'}}>
          Hi, I’m Om. I'm a multi-talented human with experiences in a wide range of design disciplines.
       
          You can also call me a product designer, interaction designer, UI designer, or by any other market defined
          function-title. I'm also a multi-disciplinary maker with experiences in a wide range of design disciplines,
          <span style={{ color: 'red', fontSize: '2.5vw' }}>front-end developer</span>, music enthusiast, traveler,
          photographer, and more.
        </p>
        <h3 style={{ color: 'white', fontSize: '4vw' }}>Skills</h3>
        <div style={{ color: 'white' }}>
          {skillsData.map((skill, index) => (
            <div className="skill-badge" key={index}>
              <span>{skill.name}</span>
              <SkillBar level={skill.level }  />
            </div>
          ))}
          <div style={{   color: 'white' }}>
        <h3 style={{fontSize: '4vw',}}>Internship</h3>
        <h4 style={{fontSize:'2vw'}}>1. Mobile App Development</h4>
        <h5 style={{fontSize:'18px'}}>Adetrez Labs, Virtual</h5>
        <p>Feb 2023 - May 2023</p>
        <h4 style={{ fontWeight: 'bold' }}>Working with React Native and Java to design, develop, and debug mobile applications</h4>
        
      </div>
        </div>
        
      </div>
    
      
    
</div>

  );
};

export default About;
