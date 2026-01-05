import profilePic from './assets/profilePic.jpg'
import './Intro.css'

function Intro(){
    return(
        <section className='intro-container'>
            <img src={profilePic} alt="Keidy Lopez" />
            <p>Hello! My name is Keidy and I’m a Massachusetts-based <span>backend engineer</span> by trade,
             with hands-on experience across the <span>full stack</span> through personal 
             projects. My primary interest lies in backend development, where 
             I enjoy designing and making <span>APIs</span>, working with <span>relational databases</span>, 
             and strengthening <span>application security</span> using <span>Java</span>, <span>Spring Boot</span>, and 
             <span>SQL</span> as my core tech stack.</p> 
        </section>

    );
};

export default Intro;