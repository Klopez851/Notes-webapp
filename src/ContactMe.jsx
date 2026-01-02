function ContactMe(){
    //add form to email button
    return(
        <section>
            <h1>Contact me</h1>
            <p>Like what you see? Lets connect!</p>

            <button onClick={()=>window.location.href="https://github.com/Klopez851"}>
                Github
            </button>

            <button onClick={()=>window.location.href="www.linkedin.com/in/keidy-lopez-1361072a2"}>
                LinkedIn
            </button>

{/*add a form that pops up when u click the button for them to email personally*/}
            <button>
                Email
            </button>
        </section>
    );
};

export default ContactMe;