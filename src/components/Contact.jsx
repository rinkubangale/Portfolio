import { FaPhoneAlt, FaAt, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Contact.css'


export default function Contact() {
    
    return (
        <div className="mainDiv">
            <div>Rinku Bangale</div>
            <div><FaPhoneAlt /> 7057215258</div>
            <div><FaAt /> bangalehemant@gmail.com</div>
            <div><FaGithub /> <a href="https://github.com/rinkubangale" target="_blank"  rel="noreferrer" >rinkubangale</a> </div>
            <div><FaLinkedinIn /><a href="https://www.linkedin.com/in/rinku-bangale-599433155/" target="_blank"  rel="noreferrer" > bangalerinku </a></div>
        </div>
    )
}