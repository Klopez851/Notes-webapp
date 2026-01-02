import './Header.css'

function Header (){
    return(
        <header className='header-container'>
            <nav>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className='checkbtn'>
                    <i className="fas fa-bars"></i>
                </label>
                <div>
                    <a href="#">Intro</a> 
                    <a href="#">Projects</a> 
                    <a href="#">Skills</a> 
                    <a href="#">Certifications</a> 
                    <a href="#">About Me</a> 
                    <a href="#">Future Work</a> 
                    <a href="#">Contact Me</a> 
                    <a href="#">Resume</a> 
                </div>
            </nav>
        </header>
    );

}
export default Header;
//allows for the component to be exported