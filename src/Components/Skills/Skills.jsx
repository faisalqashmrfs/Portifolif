import React from 'react';  
import './Skills.css';   
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";




const Skills = () => {  
    const skills = [  
        {  
            name: 'HTML',  
            icon: <FaHtml5 />
            ,  
            description: 'Experience in writing clean and organized HTML code.'  
        },  
        {  
            name: 'CSS',  
            icon: <FaCss3 />
            ,  
            description: 'Designing attractive and responsive user interfaces.'  
        },  
        {  
            name: 'JavaScript',  
            icon: <IoLogoJavascript />,  
            description: 'Advanced skills in programming with JavaScript.'  
        },  
        {  
            name: 'React',  
            icon: '⚛️',  
            description: 'Building user interface applications using React.js.'  
        },  
        {  
            name: 'Git',  
            icon: <FaGithub />
            ,  
            description: 'Managing projects and collaboration using Git.'  
        },  
        {  
            name: 'Web Design',  
            icon: '🌐',  
            description: 'Designing and developing visually appealing websites.'  
        },  
        {  
            name: 'Responsive Design',  
            icon: '📱',  
            description: 'Developing layouts that adapt to various screen sizes.'  
        },  
        {  
            name: 'UX/UI Design',  
            icon: '🎨',  
            description: 'Enhancing user experience and creating effective user interfaces.'  
        },  
        {  
            name: 'RESTful APIs',  
            icon: '🔗',  
            description: 'Interacting with APIs efficiently.'  
        }  
    ];  

    return (  
        <div className="skills-container">  
            <h2>Skills</h2>  
            <div className="skills-list">  
                {skills.map((skill, index) => (  
                    <div key={index} className="skill-card">  
                        <div className="skill-icon">{skill.icon}</div>  
                        <h3>{skill.name}</h3>  
                        <p>{skill.description}</p>  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
}  

export default Skills;