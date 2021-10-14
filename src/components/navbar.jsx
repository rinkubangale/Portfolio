import { Link } from 'react-router-dom'
import { HiOutlineDownload } from 'react-icons/hi'
import Resume from './Resume.pdf'
export default function Navbar({ imageLink, navStyle }) {
    return  (
        <div className="navbar">
            <div className='logoContainer'>
                <Link to='/'>
                    <img src={imageLink} alt="image logo" className='logo'/>
                </Link>
            </div>
            <div className='linkContainer'>
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
                <div >
                    <div className='aLinkContainer' style={{
                        fontSize: '18px',
                        rightpadding: '0px',
                        cursor: 'default',
                    }}>Resume</div>
                </div>
                <div className='res' style={{
                    width: '50%',
                    leftpadding: '0px',
                    marginLeft: '-26px',
                    cursor:'pointer',
                }}><Link to={Resume} download><HiOutlineDownload /></Link></div>
            </div>
        </div>
    )
}