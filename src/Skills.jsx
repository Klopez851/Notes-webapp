import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import IconCard from "./IconCard.jsx";


function Skills(){
    const skillList = [
        {icon:FaJava, name:'Java'},
        {icon:SiSpring, name:'Spring'},
        {icon:FaHtml5, name:'HTML'},
        {icon:FaCss3Alt, name:'CSS'},
        {icon:IoLogoJavascript, name:'Javascript'},
        {icon:FaPython, name:'Python'},
        {icon:DiMysql, name:'MySQL'},
        {icon:FaGitAlt, name:'Git'},
        {icon:FaGithub, name:'Github'}
        ];
    
    return(
        <section>
            <h1>Skills</h1>        
            <div  style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                {skillList.map((skill) => 
                    <IconCard 
                    icon = {skill.icon}
                    iconName={skill.name}
                    />
                )}
            </div>
        </section>

    );
};


export default Skills;