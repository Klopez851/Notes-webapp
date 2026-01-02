import profilePic from './assets/profilePic.jpg'

function Intro(){
    return(
        <section>
            <h1>Intro</h1>
            <img src={profilePic} alt="Keidy Lopez" />
            <p>Hello! I’m a Massachusetts-based backend engineer by trade,
             with hands-on experience across the full stack through personal 
             projects. My primary interest lies in backend development, where 
             I enjoy designing and making APIs, working with relational databases, 
             and strengthening application security using Java, Spring Boot, and 
             SQL as my core tech stack.</p> 
        </section>

    );
};

export default Intro;