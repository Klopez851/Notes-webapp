import ProjectCard from "./ProjectCard";

function FurtureWork(){
    const projects = [
        {name:"Appointment Tracker", description:"I want to create an application that keeps track of the last time someone attended different types of appointments (like dental visits or physicals). The idea came from my own experience of being asked when my last appointment was and never being able to remember."},
        {name: "Period Tracker", description: "I’d also like to work on a personal period tracker that stores and processes all data locally, giving users control over their own information."},
        {name: "Task Tracking Website", description: "My goal is to create a fully functioning, simple, and cute task tracking website for personal use. I thought of this project because I wasn’t completely satisfied with the task tracking tools currently available."},
    ]
    
    return(
        <section>
            <h1>Future Work</h1>
            <p>I still have many ideas of things I want to make, some of which are:</p>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                {projects.map((project) => 
                    <ProjectCard
                        projectTitle={project.name}
                        description={project.description}
                    />
                )};
            </div>
        </section>
    );
};


export default FurtureWork;