import {SiJavascript, SiHtml5, SiCss3, SiExpress, SiMongodb, SiMysql, SiGit } from 'react-icons/si'

import {FaReact, FaNodeJs} from 'react-icons/fa'

import Styles from './about.css';

export default function About() {
    
    return (<>
        <div className='aboutDiv'>
            <div className='AboutSec'>
                <div className='phead'>About Me,</div>
                <div className='pdata'>
                    'I'm, A self-motivated individual with a
                    problem-solving mindset. Seeking an
                    opportunity that allows me to best utilize
                    the skillset and experience within the role
                    of a FullStack Web Developer. Proficient
                    in solving Data Structure and Algorithm
                    Problems, and developing projects with
                    remote collaboration'
                </div>
            </div>
        </div>
        <div>
            <div className='aboutDiv'>{'Skills & Proficiencies'}</div>
            <div style={{
                fontSize: '50px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                alignContent: 'center',
            }}>

                <div className='Appicons'><FaReact /><div style={{fontSize: '14px', textAlign: 'center'}}>React</div></div>
                <div className='Appicons'><SiJavascript /><div style={{fontSize: '14px', textAlign: 'center'}}>JavaScript</div></div>
                <div className='Appicons'><SiHtml5 /><div style={{fontSize: '14px', textAlign: 'center'}}>HTML</div></div>
                <div className='Appicons'><SiCss3 /><div style={{fontSize: '14px', textAlign: 'center'}}>CSS</div></div>
                <div className='Appicons'><FaNodeJs /><div style={{fontSize: '14px', textAlign: 'center'}}>NodeJs</div></div>
                <div className='Appicons'><SiExpress /><div style={{fontSize: '14px', textAlign: 'center'}}>Express</div></div>
                <div className='Appicons'><SiMongodb /><div style={{fontSize: '14px', textAlign: 'center'}}>MongoDB</div></div>
                <div className='Appicons'><SiMysql /><div style={{fontSize: '14px', textAlign: 'center'}}>MySQL</div></div>
                <div className='Appicons'><SiGit /><div style={{fontSize: '14px', textAlign: 'center'}}>Git</div></div>
            </div>
        </div>
    </>)
}