import { FaGithub, FaLinkedinIn, FaTwitter, FaMedium } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Styles from './home.css'
import Avatar from './Avatar.jpg'
export default function Home() {
    
    return (<>
        <div className="appHome" style={{height: '40vw'}}>
            <div style={{fontSize:'large'}}>hey, I'm</div>
            <div>Rinku Bangale</div>
            <div style={{textAlign:'center'}}><img src={Avatar} alt="" style={{width:'80%', borderRadius:'50%', border: '2px dotted', padding: '4px'}}/></div>
            <div style={{fontSize:'x-large', width:'122%'}}> Aspiring Full Stack Web Developer</div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '75%',
            }}>
                <a href='https://github.com/rinkubangale' target='_blank' >
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/rinku-bangale-599433155' target='_blank' >
                    <FaLinkedinIn />        
                </a>
                <a href='https://twitter.com/rinku_bangale' target='_blank'>
                    <FaTwitter />
                </a>
                <a href='https://medium.com/@bangalehemant' target='_blank' >
                    <FaMedium />
                </a>
            </div>
                <div style={{fontSize: 'initial', textAlign: 'center'}}>
                    <FiMail />` bangalehemant@gmail.com` 
                </div>
                <div style={{fontSize: 'initial', textAlign: 'center'}}>
                    <FiPhone />` 7057215258 `
                </div>
        </div>
    </>)
}