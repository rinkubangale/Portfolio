import {FaGithub, FaLinkedinIn, FaTwitter, FaMedium} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Styles from './home.css'
import Avatar from './Avatar.jpg'
export default function Home() {
    
    return (<>
        <div className="appHome" style={{height: '40vw'}}>
            <div style={{fontSize:'large'}}>hey, I'm</div>
            <div>Rinku</div>
            <div style={{textAlign:'center'}}><img src={Avatar} alt="" style={{width:'80%', borderRadius:'50%', border: '2px dotted', padding: '4px'}}/></div>
            <div style={{fontSize:'x-large'}}> Aspiring Full Stack Web Dev</div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '75%',
            }}>
                <a href='https://github.com/rinkubangale'>
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/rinku-bangale-599433155' >
                    <FaLinkedinIn />        
                </a>
                <a href='https://twitter.com/rinku_bangale' >
                    <FaTwitter />
                </a>
                <a href='https://medium.com/@bangalehemant' >
                    <FaMedium />
                </a>
            </div>
        </div>
    </>)
}