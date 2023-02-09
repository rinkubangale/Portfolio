import {useState} from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineViewList } from 'react-icons/hi'
// import Resume from 'https://drive.google.com/drive/u/0/folders/1KDZ0rSZL0BGf69Ezqa3XHUYySMd4B8-E';


export default function Navbar({ imageLink, navStyle }) {
    const [isNav, setIsNav] = useState(false)
    const handleNavClick = () => {
        isNav?setIsNav(false):setIsNav(true)
    }

    // const displayStyle1 = {
    //     display: 'flex',
    // }
    // const displayStyle2 = {
    //     display: 'none',
    // }
    return  (
        <div className="navbar">
            <div className='logoContainer'>
                <Link to='/'>
                    <img src={imageLink} alt="img logo" className='logo'/>
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
                    <a href="https://drive.google.com/file/d/1iF68KrUM_uxOjH2e2qzpkh_iGqAwi_dv/view?usp=sharing" target='_blank' rel="noreferrer" className='aLinkContainer'>Resume</a>
                </div>
                {/* <div >
                href="https://drive.google.com/file/d/1YDsvE_tz3zgG7ev_-cbnruYnUy_qfQkR/view?usp=sharing"  //prev resume link
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
