import {useState} from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineDownload, HiOutlineViewList } from 'react-icons/hi'
import Resume from './Resume.pdf'


export default function Navbar({ imageLink, navStyle }) {
    const [isNav, setIsNav] = useState(false)
    const handleNavClick = () => {
        isNav?setIsNav(false):setIsNav(true)
    }

    const displayStyle1 = {
        display: 'flex',
    }
    const displayStyle2 = {
        display: 'none',
    }
    return  (
        <div className="navbar">
            <div className='logoContainer'>
                <Link to='/'>
                    <img src={imageLink} alt="image logo" className='logo'/>
                </Link>
            </div>

            <div className={isNav ? "noDisplayDiv" : "displayDiv" } style={{fontSize:"22px", marginRight:"1rem"}} onClick={handleNavClick}><HiOutlineViewList/></div>

            <div className={`linkContainer ${isNav ? 'displayDiv' : 'noDisplayDiv'}`}>
                <div className='divLinkContainer divCross' onClick={handleNavClick}>+</div>
                <div className='divLinkContainer'>
                    <Link to='/' className='aLinkContainer'>Home</Link>
                </div>
                <div className='divLinkContainer'>
                    <Link to='/aboutme' className='aLinkContainer'>About</Link>
                </div>
                <div className='divLinkContainer'>
                    <Link to='/project' className='aLinkContainer'>Project</Link>
                </div>
                <div className='divLinkContainer'>
                    <Link to='/contact' className='aLinkContainer'>Contact</Link>
                </div>
                <div className='divLinkContainer'>
                    <Link to={Resume} target='_blank' className='aLinkContainer' download >Resume</Link>
                </div>
                {/* <div >
                    <div className='aLinkContainer' style={{
                        fontSize: '18px',
                        rightpadding: '0px',
                        cursor: 'default',
                    }}>Resume</div>
                </div>
                <div className='res dwnld'><Link to={Resume} target='_blank' download ><HiOutlineDownload /></Link></div> */}
            </div>
        </div>
    )
}