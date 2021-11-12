import { FaGithub, FaLinkedinIn, FaTwitter, FaMedium } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
// import { Link } from 'react-router-dom'
import './home.css'
import Avatar from './Avatar.jpg'
export default function Home() {
    
    return (<>
        <div className="appHome">
            <div style={{fontSize:'large'}}>hey, I'm</div>
            <div>Rinku Bangale</div>
            <div style={{textAlign:'center'}}><img src={Avatar} alt="" style={{width:'50%', borderRadius:'50%', border: '2px dotted', padding: '4px'}}/></div>
            <div style={{fontSize:'x-large'}}> Aspiring Full Stack Web Developer</div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '75%',
            }}>
                <a href='https://github.com/rinkubangale' target='_blank' rel="noreferrer" >
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/rinku-bangale-599433155' target='_blank' rel="noreferrer" >
                    <FaLinkedinIn />        
                </a>
                <a href='https://twitter.com/rinku_bangale' target='_blank' rel="noreferrer" >
                    <FaTwitter />
                </a>
                <a href='https://medium.com/@bangalehemant' target='_blank' rel="noreferrer" >
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