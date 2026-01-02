function ProjectCard({imglink, imgAlt, projectTitle, projectLink, description, techs}){
    return(
        <div>
            { /*outside of an if statement the && returns the right side if the left side is truthy, else it returns left*/}
            {imglink && <img src={imglink} alt={imgAlt} />}

            {projectLink ?
                (<h2><a href={projectLink} target="blank">{projectTitle}</a></h2>) 
                :
                (<h2>{projectTitle}</h2>)
            }

            <p>{description}</p>

            {techs && (
                <div>
                    {techs.map((lang)=><button>{lang}</button>)}
                </div>
                )
            }
        </div>
    );
};

export default ProjectCard;