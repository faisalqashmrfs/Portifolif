import React from 'react';  
import './Skills.css';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 , faCss3 , faJs , faReact , faGithub , faFigma, faRust, faFirstdraft } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';


const Skills = () => {  
    const skills = [  
        {  
            name: 'HTML',  
            icon: faHtml5,  
            description: 'Experience in writing clean and organized HTML code.'  
        },  
        {  
            name: 'CSS',  
            icon: faCss3,  
            description: 'Designing attractive and responsive user interfaces.'  
        },  
        {  
            name: 'JavaScript',  
            icon: faJs, 
            description: 'Advanced skills in programming with JavaScript.'  
        },  
        {  
            name: 'React',  
            icon: faReact,  
            description: 'Building user interface applications using React.js.'  
        },  
        {  
            name: 'Git',  
            icon: faGithub
            ,  
            description: 'Managing projects and collaboration using Git.'  
        },  
        {  
            name: 'Web Design',  
            icon: faFigma,  
            description: 'Designing and developing visually appealing websites.'  
        },  
        {  
            name: 'Responsive Design',  
            icon: faRust,  
            description: 'Developing layouts that adapt to various screen sizes.'  
        },  
        {  
            name: 'UX/UI Design',  
            icon: faFirstdraft,  
            description: 'Enhancing user experience and creating effective user interfaces.'  
        },  
        {  
            name: 'RESTful APIs',  
            icon: faLink,  
            description: 'Interacting with APIs efficiently.'  
        }  
    ];  

    return (  
        <section className='Skills-sec'>
        <h2>Skills</h2>  
        <div className="skills-container">  
            <div className="skills-list">  
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {/* <div className="skill-icon">{skill.icon}</div> */}
                        <div className="skill-icon"><FontAwesomeIcon icon={skill.icon} /></div>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>  
                ))}  
            </div>  
        </div>  
        </section>
    
    );  
}  

export default Skills;